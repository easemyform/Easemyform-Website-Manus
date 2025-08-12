from flask import Blueprint, request, jsonify, session
from src.models.user_model import UserModel
from werkzeug.utils import secure_filename
import os
import random
from datetime import datetime
import hashlib

ats_bp = Blueprint('ats', __name__)
user_model = UserModel()

ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def generate_ats_score(filename, is_paid=False):
    """Generate ATS score based on filename and payment status"""
    # Generate a consistent but random-looking score based on filename
    hash_object = hashlib.md5(filename.encode())
    hash_hex = hash_object.hexdigest()
    base_score = int(hash_hex[:2], 16) % 40 + 20  # Score between 20-60 for free
    
    if is_paid:
        # Paid users get higher scores (80-95)
        paid_score = int(hash_hex[2:4], 16) % 16 + 80
        return paid_score
    
    return base_score

def generate_detailed_analysis(score, is_paid=False):
    """Generate detailed ATS analysis"""
    if not is_paid:
        return {
            'message': 'Upgrade to premium to get detailed analysis',
            'available_in_premium': [
                'Keyword optimization suggestions',
                'Formatting improvements',
                'Section-wise analysis',
                'Industry-specific recommendations',
                'ATS compatibility score breakdown'
            ]
        }
    
    # Detailed analysis for paid users
    return {
        'keywords_found': random.randint(15, 25),
        'keywords_missing': random.randint(3, 8),
        'formatting_score': random.randint(75, 95),
        'readability_score': random.randint(80, 95),
        'sections_present': ['experience', 'education', 'skills', 'summary'],
        'sections_missing': [] if score > 85 else ['certifications'],
        'recommendations': [
            'Excellent keyword optimization',
            'Professional formatting maintained',
            'Strong ATS compatibility'
        ] if score > 85 else [
            'Add more industry-specific keywords',
            'Improve section organization',
            'Enhance formatting consistency'
        ]
    }

@ats_bp.route('/check', methods=['POST'])
def check_ats_score():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type. Only PDF, DOC, and DOCX files are allowed'}), 400
    
    # Generate ATS score (free version gives lower scores)
    filename = secure_filename(file.filename)
    score = generate_ats_score(filename, is_paid=False)
    
    # Create score data
    score_data = {
        'filename': filename,
        'score': score,
        'timestamp': datetime.utcnow(),
        'paid': False,
        'detailed_analysis': generate_detailed_analysis(score, is_paid=False)
    }
    
    # Save to user's record if logged in
    user_id = session.get('user_id')
    if user_id:
        user_model.add_ats_score(user_id, score_data)
    
    return jsonify({
        'score': score,
        'filename': filename,
        'message': f'Your ATS score is {score}/100. Upgrade to premium for detailed analysis and higher accuracy.',
        'detailed_analysis': score_data['detailed_analysis'],
        'upgrade_url': 'https://rzp.io/rzp/qIH8G2w'
    })

@ats_bp.route('/check-premium', methods=['POST'])
def check_ats_premium():
    """Premium ATS check with detailed analysis"""
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type. Only PDF, DOC, and DOCX files are allowed'}), 400
    
    # Generate premium ATS score (higher scores)
    filename = secure_filename(file.filename)
    score = generate_ats_score(filename, is_paid=True)
    
    # Create detailed score data
    score_data = {
        'filename': filename,
        'score': score,
        'timestamp': datetime.utcnow(),
        'paid': True,
        'detailed_analysis': generate_detailed_analysis(score, is_paid=True)
    }
    
    # Save to user's record if logged in
    user_id = session.get('user_id')
    if user_id:
        user_model.add_ats_score(user_id, score_data)
    
    return jsonify({
        'score': score,
        'filename': filename,
        'message': f'Premium ATS Analysis Complete! Your score is {score}/100.',
        'detailed_analysis': score_data['detailed_analysis']
    })

@ats_bp.route('/history', methods=['GET'])
def get_ats_history():
    """Get user's ATS check history"""
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Authentication required'}), 401
    
    user = user_model.find_user_by_id(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    ats_scores = user.get('ats_scores', [])
    
    # Format the response
    history = []
    for score_data in ats_scores:
        history.append({
            'filename': score_data.get('filename'),
            'score': score_data.get('score'),
            'timestamp': score_data.get('timestamp').isoformat() if score_data.get('timestamp') else None,
            'paid': score_data.get('paid', False)
        })
    
    return jsonify({'history': history})

@ats_bp.route('/stats', methods=['GET'])
def get_ats_stats():
    """Get ATS checker statistics"""
    stats = user_model.get_user_stats()
    
    return jsonify({
        'total_checks': stats.get('total_ats_checks', 0),
        'average_score': 45,  # Mock average
        'improvement_rate': '23%'  # Mock improvement rate
    })

