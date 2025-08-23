import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Phone, Shield, User } from 'lucide-react'
import { motion } from 'framer-motion'

const Login = ({ setUser, setIsAdmin }) => {
  const [step, setStep] = useState('phone') // 'phone' or 'otp'
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSendOTP = (e) => {
    e.preventDefault()
    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Please enter a valid phone number')
      return
    }
    
    setIsLoading(true)
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false)
      setStep('otp')
      alert('OTP sent to your phone number!')
    }, 2000)
  }

  const handleVerifyOTP = (e) => {
    e.preventDefault()
    if (!otp || otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP')
      return
    }

    setIsLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      
      // Check if admin (demo: if phone ends with 0397, make admin)
      const isAdminUser = phoneNumber.endsWith('0397')
      
      const userData = {
        phone: phoneNumber,
        name: isAdminUser ? 'Admin User' : 'User',
        id: Date.now()
      }
      
      setUser(userData)
      setIsAdmin(isAdminUser)
      
      if (isAdminUser) {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    }, 2000)
  }

  const handleResendOTP = () => {
    alert('OTP resent to your phone number!')
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 rounded-full">
                  {step === 'phone' ? (
                    <Phone className="h-8 w-8 text-teal-600" />
                  ) : (
                    <Shield className="h-8 w-8 text-teal-600" />
                  )}
                </div>
              </div>
              <CardTitle className="text-2xl">
                {step === 'phone' ? 'Login to EaseMyForm' : 'Verify OTP'}
              </CardTitle>
              <p className="text-gray-600">
                {step === 'phone' 
                  ? 'Enter your phone number to receive an OTP'
                  : `Enter the 6-digit code sent to ${phoneNumber}`
                }
              </p>
            </CardHeader>
            
            <CardContent>
              {step === 'phone' ? (
                <form onSubmit={handleSendOTP} className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91-9876543210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send you a verification code
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending OTP...' : 'Send OTP'}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOTP} className="space-y-4">
                  <div>
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="123456"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter the 6-digit code sent to your phone
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify & Login'}
                  </Button>
                  
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-sm text-teal-600 hover:underline"
                    >
                      Didn't receive OTP? Resend
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setStep('phone')}
                      className="text-sm text-gray-600 hover:underline"
                    >
                      Change phone number
                    </button>
                  </div>
                </form>
              )}
              
              {/* Demo Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Demo Login Info:</h4>
                <div className="text-xs text-blue-700 space-y-1">
                  <p><strong>Admin:</strong> +91-7697470397 (any 6-digit OTP)</p>
                  <p><strong>User:</strong> Any other phone number (any 6-digit OTP)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Login

