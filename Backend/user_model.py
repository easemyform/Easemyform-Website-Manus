from src.database.connection import db_connection
from bson import ObjectId
from datetime import datetime
import bcrypt
import os

class UserModel:
    def __init__(self):
        self.db = db_connection.get_database()
        if self.db:
            self.collection = self.db.users
        else:
            self.collection = None
    
    def create_user(self, phone_number, is_admin=False):
        if not self.collection:
            return None
            
        # Check if user already exists
        existing_user = self.find_user_by_phone(phone_number)
        if existing_user:
            return str(existing_user['_id'])
        
        user_data = {
            'phone_number': phone_number,
            'is_admin': is_admin,
            'created_at': datetime.utcnow(),
            'last_login': None,
            'ats_scores': [],
            'linkedin_scores': []
        }
        
        try:
            result = self.collection.insert_one(user_data)
            return str(result.inserted_id)
        except Exception as e:
            print(f"Error creating user: {e}")
            return None
    
    def find_user_by_phone(self, phone_number):
        if not self.collection:
            return None
        return self.collection.find_one({'phone_number': phone_number})
    
    def find_user_by_id(self, user_id):
        if not self.collection:
            return None
        try:
            return self.collection.find_one({'_id': ObjectId(user_id)})
        except:
            return None
    
    def update_last_login(self, user_id):
        if not self.collection:
            return False
        try:
            self.collection.update_one(
                {'_id': ObjectId(user_id)},
                {'$set': {'last_login': datetime.utcnow()}}
            )
            return True
        except:
            return False
    
    def add_ats_score(self, user_id, score_data):
        if not self.collection:
            return False
        try:
            self.collection.update_one(
                {'_id': ObjectId(user_id)},
                {'$push': {'ats_scores': score_data}}
            )
            return True
        except:
            return False
    
    def add_linkedin_score(self, user_id, score_data):
        if not self.collection:
            return False
        try:
            self.collection.update_one(
                {'_id': ObjectId(user_id)},
                {'$push': {'linkedin_scores': score_data}}
            )
            return True
        except:
            return False
    
    def is_admin_phone(self, phone_number):
        admin_phone = os.getenv('ADMIN_PHONE', '+91-7697470397')
        return phone_number == admin_phone
    
    def get_user_stats(self):
        if not self.collection:
            return {'total_users': 0, 'total_ats_checks': 0, 'total_linkedin_reviews': 0}
        
        try:
            total_users = self.collection.count_documents({})
            
            # Count total ATS checks
            pipeline_ats = [
                {'$unwind': '$ats_scores'},
                {'$count': 'total'}
            ]
            ats_result = list(self.collection.aggregate(pipeline_ats))
            total_ats = ats_result[0]['total'] if ats_result else 0
            
            # Count total LinkedIn reviews
            pipeline_linkedin = [
                {'$unwind': '$linkedin_scores'},
                {'$count': 'total'}
            ]
            linkedin_result = list(self.collection.aggregate(pipeline_linkedin))
            total_linkedin = linkedin_result[0]['total'] if linkedin_result else 0
            
            return {
                'total_users': total_users,
                'total_ats_checks': total_ats,
                'total_linkedin_reviews': total_linkedin
            }
        except:
            return {'total_users': 0, 'total_ats_checks': 0, 'total_linkedin_reviews': 0}

