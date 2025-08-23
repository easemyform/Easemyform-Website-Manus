import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import ATSChecker from './components/ATSChecker'
import LinkedInOptimization from './components/LinkedInOptimization'
import LinkedInReview from './components/LinkedInReview'
import ResumeTemplates from './components/ResumeTemplates'
import Privacy from './components/Privacy'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar user={user} isAdmin={isAdmin} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resume-templates" element={<ResumeTemplates />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ats-checker" element={<ATSChecker user={user} />} />
          <Route path="/linkedin-optimization" element={<LinkedInOptimization />} />
          <Route path="/linkedin-review" element={<LinkedInReview user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} setIsAdmin={setIsAdmin} />} />
          <Route path="/admin" element={<AdminDashboard isAdmin={isAdmin} />} />
          <Route path="/dashboard" element={<UserDashboard user={user} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
