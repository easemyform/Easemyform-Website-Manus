from flask import Blueprint, request, jsonify, session
from src.models.user_model import UserModel
from src.database.connection import db_connection
from datetime import datetime, timedelta
from bson import ObjectId

admin_bp = Blueprint('admin', __name__)
user_model = UserModel()

def require_admin():
    """Decorator to require admin authentication"""
    user_id = session.get('user_id')
    is_admin = session.get('is_admin')
    
    if not user_id or not is_admin:
        return jsonify({'error': 'Admin access required'}), 403
    
    return None

@admin_bp.route('/dashboard', methods=['GET'])
def get_dashboard_stats():
    """Get admin dashboard statistics"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        # Get user statistics
        user_stats = user_model.get_user_stats()
        
        # Get recent activity (last 30 days)
        thirty_days_ago = datetime.utcnow() - timedelta(days=30)
        recent_users = db.users.count_documents({
            'created_at': {'$gte': thirty_days_ago}
        })
        
        # Mock additional statistics
        stats = {
            'total_users': user_stats.get('total_users', 0),
            'total_ats_checks': user_stats.get('total_ats_checks', 0),
            'total_linkedin_reviews': user_stats.get('total_linkedin_reviews', 0),
            'recent_users': recent_users,
            'revenue': {
                'this_month': 45000,  # Mock revenue
                'last_month': 38000,
                'growth': '+18.4%'
            },
            'popular_services': [
                {'name': 'Resume Building', 'count': 120},
                {'name': 'LinkedIn Optimization', 'count': 85},
                {'name': 'ATS Checker', 'count': 200},
                {'name': 'LinkedIn Review', 'count': 150}
            ]
        }
        
        return jsonify(stats)
        
    except Exception as e:
        return jsonify({'error': f'Failed to fetch dashboard stats: {str(e)}'}), 500

@admin_bp.route('/users', methods=['GET'])
def get_users():
    """Get all users with pagination"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        page = int(request.args.get('page', 1))
        limit = int(request.args.get('limit', 20))
        skip = (page - 1) * limit
        
        # Get users with pagination
        users_cursor = db.users.find({}).sort('created_at', -1).skip(skip).limit(limit)
        users = []
        
        for user in users_cursor:
            users.append({
                'id': str(user['_id']),
                'phone_number': user['phone_number'],
                'is_admin': user.get('is_admin', False),
                'created_at': user['created_at'].isoformat() if user.get('created_at') else None,
                'last_login': user['last_login'].isoformat() if user.get('last_login') else None,
                'ats_checks': len(user.get('ats_scores', [])),
                'linkedin_reviews': len(user.get('linkedin_scores', []))
            })
        
        # Get total count for pagination
        total_users = db.users.count_documents({})
        total_pages = (total_users + limit - 1) // limit
        
        return jsonify({
            'users': users,
            'pagination': {
                'current_page': page,
                'total_pages': total_pages,
                'total_users': total_users,
                'has_next': page < total_pages,
                'has_prev': page > 1
            }
        })
        
    except Exception as e:
        return jsonify({'error': f'Failed to fetch users: {str(e)}'}), 500

@admin_bp.route('/jobs', methods=['GET'])
def get_jobs():
    """Get all job postings"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        jobs_cursor = db.jobs.find({}).sort('created_at', -1)
        jobs = []
        
        for job in jobs_cursor:
            jobs.append({
                'id': str(job['_id']),
                'title': job['title'],
                'company': job['company'],
                'location': job['location'],
                'job_type': job.get('job_type', 'Full-time'),
                'salary_range': job.get('salary_range', 'Not specified'),
                'status': job.get('status', 'active'),
                'created_at': job['created_at'].isoformat() if job.get('created_at') else None
            })
        
        return jsonify({'jobs': jobs})
        
    except Exception as e:
        return jsonify({'error': f'Failed to fetch jobs: {str(e)}'}), 500

@admin_bp.route('/jobs', methods=['POST'])
def create_job():
    """Create a new job posting"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        data = request.get_json()
        
        job_data = {
            'title': data.get('title'),
            'company': data.get('company'),
            'location': data.get('location'),
            'description': data.get('description'),
            'requirements': data.get('requirements', []),
            'salary_range': data.get('salary_range'),
            'job_type': data.get('job_type', 'Full-time'),
            'posted_by': ObjectId(session.get('user_id')),
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
            'status': 'active'
        }
        
        result = db.jobs.insert_one(job_data)
        
        return jsonify({
            'message': 'Job created successfully',
            'job_id': str(result.inserted_id)
        })
        
    except Exception as e:
        return jsonify({'error': f'Failed to create job: {str(e)}'}), 500

@admin_bp.route('/jobs/<job_id>', methods=['PUT'])
def update_job(job_id):
    """Update a job posting"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        data = request.get_json()
        
        update_data = {
            'title': data.get('title'),
            'company': data.get('company'),
            'location': data.get('location'),
            'description': data.get('description'),
            'requirements': data.get('requirements', []),
            'salary_range': data.get('salary_range'),
            'job_type': data.get('job_type', 'Full-time'),
            'status': data.get('status', 'active'),
            'updated_at': datetime.utcnow()
        }
        
        # Remove None values
        update_data = {k: v for k, v in update_data.items() if v is not None}
        
        result = db.jobs.update_one(
            {'_id': ObjectId(job_id)},
            {'$set': update_data}
        )
        
        if result.matched_count == 0:
            return jsonify({'error': 'Job not found'}), 404
        
        return jsonify({'message': 'Job updated successfully'})
        
    except Exception as e:
        return jsonify({'error': f'Failed to update job: {str(e)}'}), 500

@admin_bp.route('/jobs/<job_id>', methods=['DELETE'])
def delete_job(job_id):
    """Delete a job posting"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        result = db.jobs.delete_one({'_id': ObjectId(job_id)})
        
        if result.deleted_count == 0:
            return jsonify({'error': 'Job not found'}), 404
        
        return jsonify({'message': 'Job deleted successfully'})
        
    except Exception as e:
        return jsonify({'error': f'Failed to delete job: {str(e)}'}), 500

@admin_bp.route('/blogs', methods=['GET'])
def get_blogs():
    """Get all blog posts"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        blogs_cursor = db.blog_posts.find({}).sort('created_at', -1)
        blogs = []
        
        for blog in blogs_cursor:
            blogs.append({
                'id': str(blog['_id']),
                'title': blog['title'],
                'slug': blog.get('slug'),
                'excerpt': blog.get('excerpt'),
                'author': blog.get('author', 'EaseMyForm Team'),
                'published': blog.get('published', False),
                'views': blog.get('views', 0),
                'likes': blog.get('likes', 0),
                'created_at': blog['created_at'].isoformat() if blog.get('created_at') else None
            })
        
        return jsonify({'blogs': blogs})
        
    except Exception as e:
        return jsonify({'error': f'Failed to fetch blogs: {str(e)}'}), 500

@admin_bp.route('/blogs', methods=['POST'])
def create_blog():
    """Create a new blog post"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    db = db_connection.get_database()
    if not db:
        return jsonify({'error': 'Database connection failed'}), 500
    
    try:
        data = request.get_json()
        
        # Generate slug from title
        slug = data.get('title', '').lower().replace(' ', '-').replace(',', '').replace('.', '')
        
        blog_data = {
            'title': data.get('title'),
            'slug': slug,
            'content': data.get('content'),
            'excerpt': data.get('excerpt'),
            'author': data.get('author', 'EaseMyForm Team'),
            'tags': data.get('tags', []),
            'featured_image': data.get('featured_image'),
            'published': data.get('published', False),
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
            'views': 0,
            'likes': 0
        }
        
        result = db.blog_posts.insert_one(blog_data)
        
        return jsonify({
            'message': 'Blog post created successfully',
            'blog_id': str(result.inserted_id)
        })
        
    except Exception as e:
        return jsonify({'error': f'Failed to create blog post: {str(e)}'}), 500

@admin_bp.route('/recent-activity', methods=['GET'])
def get_recent_activity():
    """Get recent user activity"""
    auth_error = require_admin()
    if auth_error:
        return auth_error
    
    # Mock recent activity data
    activities = [
        {
            'id': 1,
            'user': '+91-9876543210',
            'action': 'ATS Check',
            'details': 'Checked resume.pdf - Score: 45',
            'timestamp': datetime.utcnow().isoformat()
        },
        {
            'id': 2,
            'user': '+91-9876543211',
            'action': 'LinkedIn Review',
            'details': 'Profile review completed - Score: 62',
            'timestamp': (datetime.utcnow() - timedelta(minutes=30)).isoformat()
        },
        {
            'id': 3,
            'user': '+91-9876543212',
            'action': 'User Registration',
            'details': 'New user registered',
            'timestamp': (datetime.utcnow() - timedelta(hours=1)).isoformat()
        }
    ]
    
    return jsonify({'activities': activities})

