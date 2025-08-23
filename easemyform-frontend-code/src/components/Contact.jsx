import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions about our services? We're here to help you succeed in your career journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91-9876543210" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select 
                      id="service" 
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="resume">Resume Writing</option>
                      <option value="linkedin">LinkedIn Optimization</option>
                      <option value="ats">ATS Checker</option>
                      <option value="review">LinkedIn Review</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:support@easemyform.com" className="text-primary hover:underline">
                      support@easemyform.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+917697470397" className="text-primary hover:underline">
                      +91-7697470397
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">24/7 Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Contact Us */}
            <Card>
              <CardHeader>
                <CardTitle>Why Contact Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Get personalized career advice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Discuss your specific requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Learn about our process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Get pricing information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Trusted by Professionals
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10,000+</div>
                    <p className="text-sm text-primary/70">Resumes Created</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.8/5</div>
                    <p className="text-sm text-primary/70">Google Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">How quickly can you deliver?</h4>
                  <p className="text-gray-600 mb-4">We deliver professional resumes within 24-48 hours of receiving your information.</p>
                  
                  <h4 className="font-semibold mb-2">Do you offer revisions?</h4>
                  <p className="text-gray-600 mb-4">Yes, we offer unlimited revisions until you're completely satisfied.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-600 mb-4">We accept all major payment methods through our secure Razorpay integration.</p>
                  
                  <h4 className="font-semibold mb-2">Is my information secure?</h4>
                  <p className="text-gray-600 mb-4">Absolutely. We maintain strict confidentiality and never share your personal information.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

