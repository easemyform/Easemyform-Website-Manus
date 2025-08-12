# Easemyform Backend (Flask)

This is the backend API for Easemyform, built with Flask and MongoDB Atlas integration.

## 🚀 Features

- **User Authentication** - OTPless phone-based login system
- **ATS Checker API** - Resume compatibility scoring
- **LinkedIn Services API** - Profile optimization and review
- **Admin Dashboard API** - Job and blog management
- **Payment Integration** - Razorpay payment processing
- **File Upload** - Resume and document handling
- **Database Integration** - MongoDB Atlas cloud database

## 🛠️ Technology Stack

- **Flask** - Python web framework
- **MongoDB Atlas** - Cloud NoSQL database
- **PyMongo** - MongoDB Python driver
- **Flask-CORS** - Cross-origin resource sharing
- **OTPless** - Phone authentication service
- **Razorpay** - Payment gateway integration
- **Python-dotenv** - Environment variable management

## 📁 Project Structure

```
src/
├── database/
│   └── connection.py       # MongoDB Atlas connection
├── models/
│   └── user_model.py       # User data models
├── routes/
│   ├── auth.py            # Authentication endpoints
│   ├── ats.py             # ATS checker endpoints
│   ├── linkedin.py        # LinkedIn services endpoints
│   └── admin.py           # Admin dashboard endpoints
├── main.py                # Main Flask application
├── requirements.txt       # Python dependencies
├── .env                   # Environment variables (create manually)
└── README.md              # This file
```

## 🔧 Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Create Environment Variables

Create a `.env` file in the root directory:

```env
# Flask Configuration
FLASK_ENV=development
SECRET_KEY=your-secret-key-here
DEBUG=True

# MongoDB Atlas Configuration
MONGODB_CONNECTION_STRING=mongodb+srv://username:password@cluster.mongodb.net/easemyform?retryWrites=true&w=majority
DATABASE_NAME=easemyform

# OTPless Configuration
OTPLESS_APP_ID=your-otpless-app-id
OTPLESS_CLIENT_ID=your-otpless-client-id
OTPLESS_CLIENT_SECRET=your-otpless-client-secret

# Razorpay Configuration
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret

# JWT Configuration
JWT_SECRET_KEY=your-jwt-secret-key
JWT_EXPIRATION_HOURS=24

# Application Configuration
MAX_FILE_SIZE=10485760
ALLOWED_EXTENSIONS=pdf,doc,docx
ADMIN_PHONE=+91-7697470397
OTP_EXPIRY_MINUTES=5
```

### 3. Start Development Server

```bash
python src/main.py
```

The server will start on `http://localhost:5000`

## 🌐 API Endpoints

### Authentication Routes (`/api/auth/`)

- `POST /api/auth/send-otp` - Send OTP to phone number
- `POST /api/auth/verify-otp` - Verify OTP and login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### ATS Checker Routes (`/api/ats/`)

- `POST /api/ats/upload` - Upload resume for ATS check
- `GET /api/ats/score/{user_id}` - Get ATS score
- `POST /api/ats/purchase` - Purchase detailed ATS report

### LinkedIn Services Routes (`/api/linkedin/`)

- `POST /api/linkedin/optimization` - LinkedIn profile optimization
- `POST /api/linkedin/review` - LinkedIn profile review
- `GET /api/linkedin/score/{user_id}` - Get LinkedIn score

### Admin Routes (`/api/admin/`)

- `GET /api/admin/users` - Get all users
- `POST /api/admin/jobs` - Add job posting
- `PUT /api/admin/jobs/{job_id}` - Update job posting
- `DELETE /api/admin/jobs/{job_id}` - Delete job posting
- `POST /api/admin/blogs` - Add blog post
- `PUT /api/admin/blogs/{blog_id}` - Update blog post

### Health Check

- `GET /api/health` - API health status

## 🗄️ Database Schema

### Users Collection

```json
{
  "_id": "ObjectId",
  "phone": "+91-9876543210",
  "name": "John Doe",
  "email": "john@example.com",
  "verified": true,
  "created_at": "2024-01-01T00:00:00Z",
  "last_login": "2024-01-01T00:00:00Z",
  "subscription": {
    "plan": "premium",
    "expires_at": "2024-12-31T23:59:59Z"
  }
}
```

### ATS Scores Collection

```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId",
  "filename": "resume.pdf",
  "score": 75,
  "detailed_report": {
    "keywords": 8,
    "formatting": 9,
    "sections": 7
  },
  "created_at": "2024-01-01T00:00:00Z"
}
```

### LinkedIn Scores Collection

```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId",
  "profile_url": "https://linkedin.com/in/johndoe",
  "score": 65,
  "detailed_report": {
    "headline": 7,
    "photo": 8,
    "banner": 6,
    "skills": 7,
    "connections": 5,
    "education": 8
  },
  "created_at": "2024-01-01T00:00:00Z"
}
```

## 🔐 Authentication Flow

1. **Send OTP**: User enters phone number, OTP sent via OTPless
2. **Verify OTP**: User enters OTP, backend verifies with OTPless
3. **Create Session**: JWT token generated and returned
4. **Protected Routes**: Token required for authenticated endpoints

## 💳 Payment Integration

The backend integrates with Razorpay for payment processing:

- Resume Building: ₹1999
- LinkedIn Optimization: ₹1499
- LinkedIn Review: ₹149
- ATS Checker: ₹99

## 🚀 Production Deployment

### Environment Configuration

For production, update `.env` file:

```env
FLASK_ENV=production
DEBUG=False
SECRET_KEY=strong-production-secret-key
MONGODB_CONNECTION_STRING=production-mongodb-connection-string
```

### WSGI Configuration

Create `wsgi.py` for production deployment:

```python
from src.main import app

if __name__ == "__main__":
    app.run()
```

### Process Management

Use PM2 or similar process manager:

```bash
pm2 start "python src/main.py" --name easemyform-api
pm2 startup
pm2 save
```

## 🔧 Development Tools

### Testing API Endpoints

Use curl or Postman to test endpoints:

```bash
# Health check
curl http://localhost:5000/api/health

# Send OTP
curl -X POST http://localhost:5000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber": "+91-9876543210"}'
```

### Database Management

Connect to MongoDB Atlas using MongoDB Compass or CLI:

```bash
mongosh "mongodb+srv://cluster.mongodb.net/easemyform" --username your-username
```

## 📊 Monitoring and Logging

- **Application Logs**: Flask built-in logging
- **Database Monitoring**: MongoDB Atlas dashboard
- **Error Tracking**: Implement error tracking service
- **Performance Monitoring**: Monitor API response times

## 🔒 Security Considerations

- **Environment Variables**: Never commit `.env` file
- **JWT Tokens**: Use strong secret keys
- **CORS**: Configure appropriate origins for production
- **Input Validation**: Validate all user inputs
- **Rate Limiting**: Implement rate limiting for API endpoints

## 📞 Support

For technical support or questions about the backend:
- Email: support@easemyform.com
- Phone: +91-7697470397

## 📄 License

This project is proprietary software for Easemyform.

---

**Built with ❤️ for Easemyform**

