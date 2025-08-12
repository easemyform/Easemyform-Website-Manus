import os
import sys
from dotenv import load_dotenv
from flask import Flask, send_from_directory
from flask_cors import CORS

# Load environment variables
load_dotenv()

# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

# Import routes
from src.routes.auth import auth_bp
from src.routes.ats import ats_bp
from src.routes.linkedin import linkedin_bp
from src.routes.admin import admin_bp
from src.database.connection import db_connection

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))

# Configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-here')
app.config['MAX_CONTENT_LENGTH'] = int(os.getenv('MAX_FILE_SIZE', 10485760))

# Enable CORS for all routes
CORS(app, origins="*")

# Initialize database connection
db_connection.connect()

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(ats_bp, url_prefix='/api/ats')
app.register_blueprint(linkedin_bp, url_prefix='/api/linkedin')
app.register_blueprint(admin_bp, url_prefix='/api/admin')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
        return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404

@app.route('/api/health')
def health_check():
    return {'status': 'healthy', 'message': 'EaseMyForm API is running'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
