import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Easemyform</h3>
            <p className="text-gray-300 mb-4">
              Professional resume and LinkedIn services to help you land your dream job. 
              Join thousands of professionals who have transformed their careers with our expert services.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:support@easemyform.com" className="text-gray-300 hover:text-white">
                  support@easemyform.com
                </a>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+917697470397" className="text-gray-300 hover:text-white">
                +91-7697470397
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white">
                  Resume Building
                </Link>
              </li>
              <li>
                <Link to="/linkedin-optimization" className="text-gray-300 hover:text-white">
                  LinkedIn Optimization
                </Link>
              </li>
              <li>
                <Link to="/ats-checker" className="text-gray-300 hover:text-white">
                  ATS Checker
                </Link>
              </li>
              <li>
                <Link to="/linkedin-review" className="text-gray-300 hover:text-white">
                  LinkedIn Review
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Easemyform. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">4.8/5 Google Rating</span>
            <span className="text-gray-400 text-sm">10,000+ Resumes Created</span>
            <span className="text-gray-400 text-sm">95% Success Rate</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

