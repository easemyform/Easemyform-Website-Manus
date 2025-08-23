import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, User, LogOut } from 'lucide-react'
import logo from '../assets/FINALEMFLOGO.jpg'

const Navbar = ({ user, isAdmin, setUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Easemyform" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/ats-checker" className="text-gray-700 hover:text-primary transition-colors">
              ATS Checker
            </Link>
            <Link to="/linkedin-optimization" className="text-gray-700 hover:text-primary transition-colors">
              LinkedIn Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                  <User size={16} />
                  <span>Dashboard</span>
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="text-gray-700 hover:text-primary">
                    Admin
                  </Link>
                )}
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut size={16} className="mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary/90">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Pricing
              </Link>
              <Link to="/ats-checker" className="block px-3 py-2 text-gray-700 hover:text-primary">
                ATS Checker
              </Link>
              <Link to="/linkedin-optimization" className="block px-3 py-2 text-gray-700 hover:text-primary">
                LinkedIn Services
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Contact
              </Link>
              
              {user ? (
                <div className="px-3 py-2 space-y-2">
                  <Link to="/dashboard" className="block text-gray-700 hover:text-primary">
                    Dashboard
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="block text-gray-700 hover:text-primary">
                      Admin
                    </Link>
                  )}
                  <Button onClick={handleLogout} variant="outline" size="sm" className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="px-3 py-2">
                  <Link to="/login">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

