# Easemyform Frontend (React)

This is the frontend application for Easemyform, built with React, Tailwind CSS, and modern web technologies.

## 🚀 Features

- **Professional Resume Building** - Main product (₹1999)
- **LinkedIn Optimization** - Complete profile makeover (₹1499)
- **ATS Checker** - Resume compatibility analysis (₹99)
- **LinkedIn Review** - Profile analysis and scoring (₹149)
- **User Authentication** - OTPless phone-based login
- **Mobile Responsive** - Fully responsive design
- **12 Google Testimonials** - Real customer reviews
- **Company Logos Slider** - Top companies showcase
- **Resume Templates** - Professional template gallery

## 🛠️ Technology Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Shadcn/UI** - UI component library

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   ├── progress.jsx
│   │   └── textarea.jsx
│   ├── AdminDashboard.jsx  # Admin panel
│   ├── ATSChecker.jsx      # ATS score checker
│   ├── CompanySlider.jsx   # Company logos slider
│   ├── Contact.jsx         # Contact page
│   ├── Footer.jsx          # Website footer
│   ├── Home.jsx            # Homepage
│   ├── HowItWorks.jsx      # How it works section
│   ├── LinkedInOptimization.jsx  # LinkedIn services
│   ├── LinkedInReview.jsx  # LinkedIn review service
│   ├── Login.jsx           # User login
│   ├── Navbar.jsx          # Navigation bar
│   ├── Pricing.jsx         # Pricing page
│   ├── Privacy.jsx         # Privacy policy
│   ├── ResumeTemplates.jsx # Resume templates
│   ├── Testimonials.jsx    # Customer testimonials
│   ├── UserDashboard.jsx   # User dashboard
│   └── WhyEnroll.jsx       # Why choose us
├── App.jsx                 # Main app component
├── App.css                 # Global styles
├── index.css               # Tailwind imports
└── main.jsx                # App entry point
```

## 🎨 Color Scheme

- **Primary Color**: Light Blue (#34e1eb)
- **Background**: Gradient from cyan-50 to blue-50
- **Text**: Gray-900 for headings, Gray-600 for body text
- **Accent**: Various shades of the primary color

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   # or
   pnpm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   # or
   pnpm run preview
   ```

## 🌐 API Integration

The frontend communicates with the Flask backend through RESTful APIs:

- **Authentication**: `/api/auth/`
- **ATS Checker**: `/api/ats/`
- **LinkedIn Services**: `/api/linkedin/`
- **Admin Functions**: `/api/admin/`

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_OTPLESS_APP_ID=your-otpless-app-id
VITE_RAZORPAY_KEY_ID=your-razorpay-key-id
```

## 📦 Dependencies

### Core Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `framer-motion` - Animations
- `lucide-react` - Icons

### Development Dependencies
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS post-processor
- `postcss` - CSS processor

## 🚀 Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder contents to your web server**

3. **Configure web server for SPA routing** (if using React Router)

## 📞 Support

For technical support or questions about the frontend:
- Email: support@easemyform.com
- Phone: +91-7697470397

## 📄 License

This project is proprietary software for Easemyform.

---

**Built with ❤️ for Easemyform**

