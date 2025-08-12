from flask import Blueprint, request, jsonify, session
from src.models.user_model import UserModel
import random
import os
from datetime import datetime, timedelta

auth_bp = Blueprint('auth', __name__)
user_model = UserModel()

# In-memory OTP storage (in production, use Redis or database)
otp_storage = {}

@auth_bp.route('/send-otp', methods=['POST'])
def send_otp():
    data = request.get_json()
    phone_number = data.get('phone_number')
    
    if not phone_number:
        return jsonify({'error': 'Phone number is required'}), 400
    
    # Generate 6-digit OTP
    otp = str(random.randint(100000, 999999))
    
    # Store OTP with expiry (5 minutes)
    expiry_time = datetime.utcnow() + timedelta(minutes=int(os.getenv('OTP_EXPIRY_MINUTES', 5)))
    otp_storage[phone_number] = {
        'otp': otp,
        'expiry': expiry_time
    }
    
    # In production, send OTP via SMS service
    # For demo purposes, we'll return the OTP (remove this in production)
    return jsonify({
        'message': 'OTP sent successfully',
        'otp': otp  # Remove this in production
    })

@auth_bp.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = request.get_json()
    phone_number = data.get('phone_number')
    otp = data.get('otp')
    
    if not phone_number or not otp:
        return jsonify({'error': 'Phone number and OTP are required'}), 400
    
    # Check if OTP exists and is valid
    stored_otp_data = otp_storage.get(phone_number)
    if not stored_otp_data:
        return jsonify({'error': 'OTP not found or expired'}), 400
    
    if datetime.utcnow() > stored_otp_data['expiry']:
        del otp_storage[phone_number]
        return jsonify({'error': 'OTP expired'}), 400
    
    if stored_otp_data['otp'] != otp:
        return jsonify({'error': 'Invalid OTP'}), 400
    
    # OTP is valid, create or get user
    is_admin = user_model.is_admin_phone(phone_number)
    user_id = user_model.create_user(phone_number, is_admin)
    
    if user_id:
        user_model.update_last_login(user_id)
        
        # Store user session
        session['user_id'] = user_id
        session['phone_number'] = phone_number
        session['is_admin'] = is_admin
        
        # Clean up OTP
        del otp_storage[phone_number]
        
        return jsonify({
            'message': 'Login successful',
            'user': {
                'id': user_id,
                'phone_number': phone_number,
                'is_admin': is_admin
            }
        })
    else:
        return jsonify({'error': 'Failed to create user'}), 500

@auth_bp.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'message': 'Logged out successfully'})

@auth_bp.route('/me', methods=['GET'])
def get_current_user():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user = user_model.find_user_by_id(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    return jsonify({
        'user': {
            'id': str(user['_id']),
            'phone_number': user['phone_number'],
            'is_admin': user.get('is_admin', False),
            'created_at': user['created_at'].isoformat() if user.get('created_at') else None,
            'last_login': user['last_login'].isoformat() if user.get('last_login') else None
        }
    })

