import os
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, ServerSelectionTimeoutError
import logging

class DatabaseConnection:
    def __init__(self):
        self.client = None
        self.db = None
        self.connection_string = os.getenv('MONGODB_CONNECTION_STRING')
        self.database_name = os.getenv('DATABASE_NAME', 'easemyform')
        
    def connect(self):
        try:
            if not self.connection_string:
                logging.warning("MongoDB connection string not found, using default settings")
                return False
                
            self.client = MongoClient(
                self.connection_string,
                serverSelectionTimeoutMS=5000,
                connectTimeoutMS=10000,
                socketTimeoutMS=20000,
                maxPoolSize=50,
                retryWrites=True
            )
            
            # Test the connection
            self.client.admin.command('ping')
            self.db = self.client[self.database_name]
            logging.info("Successfully connected to MongoDB Atlas")
            return True
            
        except ConnectionFailure as e:
            logging.error(f"Failed to connect to MongoDB: {e}")
            return False
        except ServerSelectionTimeoutError as e:
            logging.error(f"Server selection timeout: {e}")
            return False
        except Exception as e:
            logging.error(f"Unexpected error connecting to MongoDB: {e}")
            return False
    
    def get_database(self):
        if self.db is None:
            self.connect()
        return self.db
    
    def close_connection(self):
        if self.client:
            self.client.close()
            logging.info("MongoDB connection closed")

# Global database instance
db_connection = DatabaseConnection()

