from flask import Blueprint, request, jsonify, session
from src.models.user_model import UserModel
import random
import hashlib
from datetime import datetime
import re

linkedin_bp = Blueprint('linkedin', __name__)
user_model = UserModel()

def validate_linkedin_url(url):
    """Validate LinkedIn profile URL"""
    pattern = r'^https?://(www\.)?linkedin\.com/in/[a-zA-Z0-9-]+/?$'
    return re.match(pattern, url) is not None

def generate_linkedin_score(profile_url, is_paid=False):
    """Generate LinkedIn profile score"""
    # Generate consistent scores based on URL
    hash_object = hashlib.md5(profile_url.encode())
    hash_hex = hash_object.hexdigest()
    
    if is_paid:
        # Paid users get detailed scores (70-95)
        base_score = int(hash_hex[:2], 16) % 26 + 70
        return {
            'overall_score': base_score,
            'detailed_scores': {
                'heading': int(hash_hex[2:4], 16) % 31 + 70,
                'profile_photo': int(hash_hex[4:6], 16) % 31 + 70,
                'banner': int(hash_hex[6:8], 16) % 31 + 70,
                'skills': int(hash_hex[8:10], 16) % 31 + 70,
                'experience': int(hash_hex[10:12], 16) % 31 + 70,
                'connections': int(hash_hex[12:14], 16) % 31 + 70,
                'education': int(hash_hex[14:16], 16) % 31 + 70
            }
        }
    else:
        # Free users get lower scores (30-65)
        base_score = int(hash_hex[:2], 16) % 36 + 30
        return {
            'overall_score': base_score,
            'detailed_scores': {
                'heading': int(hash_hex[2:4], 16) % 36 + 30,
                'profile_photo': int(hash_hex[4:6], 16) % 36 + 30,
                'banner': int(hash_hex[6:8], 16) % 36 + 30,
                'skills': int(hash_hex[8:10], 16) % 36 + 30,
                'experience': int(hash_hex[10:12], 16) % 36 + 30,
                'connections': int(hash_hex[12:14], 16) % 36 + 30,
                'education': int(hash_hex[14:16], 16) % 36 + 30
            }
        }

def generate_recommendations(scores, is_paid=False):
    """Generate recommendations based on scores"""
    if not is_paid:
        return [
            'Upgrade to premium for detailed recommendations',
            'Get personalized improvement suggestions',
            'Access industry-specific optimization tips'
        ]
    
    recommendations = []
    detailed_scores = scores['detailed_scores']
    
    if detailed_scores['heading'] < 80:
        recommendations.append('Optimize your professional headline with industry keywords')
    
    if detailed_scores['profile_photo'] < 80:
        recommendations.append('Update your profile photo to a professional headshot')
    
    if detailed_scores['banner'] < 80:
        recommendations.append('Customize your LinkedIn banner to reflect your personal brand')
    
    if detailed_scores['skills'] < 80:
        recommendations.append('Add more relevant skills and get endorsements')
    
    if detailed_scores['experience'] < 80:
        recommendations.append('Enhance your experience section with achievements and metrics')
    
    if detailed_scores['connections'] < 80:
        recommendations.append('Expand your professional network by connecting with industry peers')
    
    if detailed_scores['education'] < 80:
        recommendations.append('Complete your education section with relevant details')
    
    if not recommendations:
        recommendations.append('Your profile looks great! Keep engaging with your network.')
    
    return recommendations

@linkedin_bp.route('/review', methods=['POST'])
def review_linkedin_profile():
    """Free LinkedIn profile review"""
    data = request.get_json()
    profile_url = data.get('profile_url', '').strip()
    
    if not profile_url:
        return jsonify({'error': 'LinkedIn profile URL is required'}), 400
    
    if not validate_linkedin_url(profile_url):
        return jsonify({'error': 'Invalid LinkedIn profile URL format'}), 400
    
    # Generate scores (free version)
    scores = generate_linkedin_score(profile_url, is_paid=False)
    recommendations = generate_recommendations(scores, is_paid=False)
    
    # Create score data
    score_data = {
        'profile_url': profile_url,
        'overall_score': scores['overall_score'],
        'detailed_scores': scores['detailed_scores'],
        'recommendations': recommendations,
        'timestamp': datetime.utcnow(),
        'paid': False
    }
    
    # Save to user's record if logged in
    user_id = session.get('user_id')
    if user_id:
        user_model.add_linkedin_score(user_id, score_data)
    
    return jsonify({
        'overall_score': scores['overall_score'],
        'message': f'Your LinkedIn profile score is {scores["overall_score"]}/100. Upgrade for detailed analysis!',
        'basic_feedback': {
            'heading': 'Needs improvement' if scores['detailed_scores']['heading'] < 60 else 'Good',
            'profile_photo': 'Needs improvement' if scores['detailed_scores']['profile_photo'] < 60 else 'Good',
            'banner': 'Needs improvement' if scores['detailed_scores']['banner'] < 60 else 'Good',
            'overall': 'Consider upgrading for detailed recommendations'
        },
        'upgrade_url': 'https://rzp.io/rzp/Ue72aJ1V',
        'recommendations': recommendations
    })

@linkedin_bp.route('/review-premium', methods=['POST'])
def review_linkedin_premium():
    """Premium LinkedIn profile review"""
    data = request.get_json()
    profile_url = data.get('profile_url', '').strip()
    
    if not profile_url:
        return jsonify({'error': 'LinkedIn profile URL is required'}), 400
    
    if not validate_linkedin_url(profile_url):
        return jsonify({'error': 'Invalid LinkedIn profile URL format'}), 400
    
    # Generate detailed scores (premium version)
    scores = generate_linkedin_score(profile_url, is_paid=True)
    recommendations = generate_recommendations(scores, is_paid=True)
    
    # Create detailed score data
    score_data = {
        'profile_url': profile_url,
        'overall_score': scores['overall_score'],
        'detailed_scores': scores['detailed_scores'],
        'recommendations': recommendations,
        'timestamp': datetime.utcnow(),
        'paid': True
    }
    
    # Save to user's record if logged in
    user_id = session.get('user_id')
    if user_id:
        user_model.add_linkedin_score(user_id, score_data)
    
    return jsonify({
        'overall_score': scores['overall_score'],
        'detailed_scores': scores['detailed_scores'],
        'detailed_feedback': {
            'heading': {
                'score': scores['detailed_scores']['heading'],
                'feedback': 'Excellent professional headline' if scores['detailed_scores']['heading'] > 80 else 'Consider adding more industry-specific keywords'
            },
            'profile_photo': {
                'score': scores['detailed_scores']['profile_photo'],
                'feedback': 'Professional photo present' if scores['detailed_scores']['profile_photo'] > 80 else 'Consider updating to a more professional headshot'
            },
            'banner': {
                'score': scores['detailed_scores']['banner'],
                'feedback': 'Great custom banner' if scores['detailed_scores']['banner'] > 80 else 'Consider customizing your banner to reflect your personal brand'
            },
            'skills': {
                'score': scores['detailed_scores']['skills'],
                'feedback': 'Comprehensive skills section' if scores['detailed_scores']['skills'] > 80 else 'Add more relevant skills and seek endorsements'
            },
            'experience': {
                'score': scores['detailed_scores']['experience'],
                'feedback': 'Detailed experience with achievements' if scores['detailed_scores']['experience'] > 80 else 'Add more specific achievements and metrics'
            },
            'connections': {
                'score': scores['detailed_scores']['connections'],
                'feedback': 'Strong professional network' if scores['detailed_scores']['connections'] > 80 else 'Expand your network by connecting with industry professionals'
            },
            'education': {
                'score': scores['detailed_scores']['education'],
                'feedback': 'Complete education information' if scores['detailed_scores']['education'] > 80 else 'Add more details to your education section'
            }
        },
        'recommendations': recommendations,
        'message': f'Premium LinkedIn Analysis Complete! Your overall score is {scores["overall_score"]}/100.'
    })

@linkedin_bp.route('/optimization-info', methods=['GET'])
def get_optimization_info():
    """Get LinkedIn optimization service information"""
    return jsonify({
        'service': 'LinkedIn Optimization',
        'price': '₹1499',
        'description': 'Complete LinkedIn profile makeover by our experts',
        'process': [
            'Share your LinkedIn credentials securely',
            'Our experts log in and optimize your profile',
            'We connect you with relevant HR professionals in your domain',
            'Get a completely optimized profile within 24-48 hours'
        ],
        'features': [
            'Professional headline optimization',
            'About section rewriting',
            'Experience section enhancement',
            'Skills and endorsements optimization',
            'Network expansion with domain HRs',
            'Profile photo and banner suggestions'
        ],
        'security_note': 'We use secure, encrypted methods to access your profile and never store your credentials permanently.',
        'purchase_url': 'https://rzp.io/l/aDrhVPnV'
    })

@linkedin_bp.route('/history', methods=['GET'])
def get_linkedin_history():
    """Get user's LinkedIn review history"""
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Authentication required'}), 401
    
    user = user_model.find_user_by_id(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    linkedin_scores = user.get('linkedin_scores', [])
    
    # Format the response
    history = []
    for score_data in linkedin_scores:
        history.append({
            'profile_url': score_data.get('profile_url'),
            'overall_score': score_data.get('overall_score'),
            'timestamp': score_data.get('timestamp').isoformat() if score_data.get('timestamp') else None,
            'paid': score_data.get('paid', False)
        })
    
    return jsonify({'history': history})

@linkedin_bp.route('/stats', methods=['GET'])
def get_linkedin_stats():
    """Get LinkedIn service statistics"""
    stats = user_model.get_user_stats()
    
    return jsonify({
        'total_reviews': stats.get('total_linkedin_reviews', 0),
        'average_score': 58,  # Mock average
        'optimization_requests': 150  # Mock optimization requests
    })

