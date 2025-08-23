import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Star, Users, Award, FileText, Linkedin, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import CompanySlider from './CompanySlider'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Main Content - Left/Center */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Professional Resume & 
                <span className="text-primary"> LinkedIn Services</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-3xl"
              >
                Just 5% of resumes pass initial screening. Be in the top 5%. 
                Our hassle-free resume building service ensures you stand out before HR even sees it.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/pricing">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                    Get Started - ₹1999
                  </Button>
                </Link>
                <Link to="/ats-checker">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                    Check ATS Score
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            {/* Resume Templates Section - Top Right */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-6 border border-primary/20"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Resume Templates & Design
                </h3>
                <div className="space-y-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm text-primary font-medium">✨ Professional Templates</p>
                    <p className="text-xs text-primary/70">ATS-friendly designs</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm text-primary font-medium">🎨 Custom Designs</p>
                    <p className="text-xs text-primary/70">Tailored to your industry</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm text-primary font-medium">📱 Mobile Optimized</p>
                    <p className="text-xs text-primary/70">Looks great everywhere</p>
                  </div>
                </div>
                <Link to="/resume-templates" className="block mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    View Templates
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Resumes Created</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8/5</h3>
              <p className="text-gray-600">Google Rating</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Product Section - Resume Building */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Main Product
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional resume building service to help you land your dream job
            </p>
          </div>
          
          {/* Main Product - Resume Building */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="hover:shadow-xl transition-shadow border-primary/30 bg-gradient-to-r from-primary/5 to-blue-50">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <FileText className="h-16 w-16 text-primary mx-auto md:mx-0 mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Professional Resume Building</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Get a professionally crafted, ATS-friendly resume that stands out from the competition. 
                      Our expert writers create resumes that get you noticed by recruiters and hiring managers.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                      <span className="text-4xl font-bold text-primary">₹1999</span>
                      <span className="text-gray-500 line-through text-xl">₹2999</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">33% OFF</span>
                    </div>
                    <Link to="/pricing">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                        Get Your Resume Now
                      </Button>
                    </Link>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h4 className="font-semibold mb-4">What's Included:</h4>
                      <ul className="text-left space-y-2">
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Professional Resume</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Cover Letter</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />ATS Optimization</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Unlimited Revisions</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />24-48 Hour Delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sub Products */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600">
              Enhance your career prospects with our specialized services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                <CardContent className="p-6 text-center">
                  <Linkedin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">LinkedIn Optimization</h3>
                  <p className="text-gray-600 mb-4">Complete profile makeover with HR connections</p>
                  <p className="text-2xl font-bold text-primary">₹1499</p>
                  <Link to="/linkedin-optimization" className="block mt-4">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Optimize Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">ATS Checker</h3>
                  <p className="text-gray-600 mb-4">Resume compatibility analysis & scoring</p>
                  <p className="text-2xl font-bold text-primary">₹99</p>
                  <Link to="/ats-checker" className="block mt-4">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Check ATS Score
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">LinkedIn Review</h3>
                  <p className="text-gray-600 mb-4">Profile analysis & detailed scoring report</p>
                  <p className="text-2xl font-bold text-primary">₹149</p>
                  <Link to="/linkedin-review" className="block mt-4">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get Review
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Slider */}
      <CompanySlider />

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 4-step process ensures you get a professional resume that stands out from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Share Your Details",
                description: "Upload your current resume or share your career details with us through our simple form.",
                icon: "📤",
                color: "bg-blue-500"
              },
              {
                step: 2,
                title: "Expert Analysis",
                description: "Our professional writers analyze your background and industry requirements to craft the perfect resume.",
                icon: "🔍",
                color: "bg-primary"
              },
              {
                step: 3,
                title: "Resume Creation",
                description: "We create an ATS-friendly, professionally formatted resume that highlights your strengths.",
                icon: "📝",
                color: "bg-green-500"
              },
              {
                step: 4,
                title: "Review & Delivery",
                description: "Review your new resume, request revisions if needed, and receive your final documents.",
                icon: "✅",
                color: "bg-purple-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EaseMyForm Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">Easemyform</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their careers with our expert resume writing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "ATS-Optimized Resumes",
                description: "Our resumes are designed to pass through Applicant Tracking Systems used by 90% of companies, ensuring your resume reaches human recruiters."
              },
              {
                icon: "👥",
                title: "Industry Experts",
                description: "Our team consists of experienced HR professionals and career coaches who understand what recruiters look for in different industries."
              },
              {
                icon: "⚡",
                title: "Quick Turnaround",
                description: "Resume will be submitted on WhatsApp number within 2-3 working days after payment. Fast and convenient delivery."
              },
              {
                icon: "📝",
                title: "Editing & Data Policy",
                description: "We provide twice editing within a week. After 10 days, we delete your resume from our database. Any changes after that will charge full amount."
              },
              {
                icon: "🏆",
                title: "Proven Track Record",
                description: "With over 10,000 successful resumes and a 4.8/5 Google rating, our results speak for themselves."
              },
              {
                icon: "📦",
                title: "Complete Package",
                description: "Get not just a resume, but also a cover letter, LinkedIn optimization, and ongoing career support."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-gray-600">Google Rating</p>
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">522+</div>
              <p className="text-gray-600">Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>

          {/* Featured Testimonials - 12 Google Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sandhra Biju",
                role: "Local Guide",
                content: "Great team! They helped me create a perfect resume and cover letter. Very professional and understanding. I'm really happy with the result. Highly recommend!",
                rating: 5,
                timeAgo: "1 month ago"
              },
              {
                name: "Aditi Chopdekar",
                role: "Professional",
                content: "I am very satisfied with the way my resume was created. The resume looks professional and well-structured. I'm impressed with the formatting and content of my resume.",
                rating: 5,
                timeAgo: "1 week ago"
              },
              {
                name: "Arun M",
                role: "Professional",
                content: "I'm very satisfied with the resume created. They delivered a well-structured, ATS-friendly resume that highlights my skills and experience effectively. The formatting was clean and professional.",
                rating: 5,
                timeAgo: "1 month ago"
              },
              {
                name: "Jaya Mishra",
                role: "Professional",
                content: "I'm extremely satisfied with Easemyform. The expert was very professional and helped me craft a standout resume that showcases my skills and experience. The final product looks amazing.",
                rating: 5,
                timeAgo: "2 weeks ago"
              },
              {
                name: "Sathish Kumar",
                role: "Local Guide",
                content: "Made over coz i seen my new professional Resume making your team. Its looking beautiful and i so Happy to see my Resume. A lot of thanks. I give FIVE STAR.",
                rating: 5,
                timeAgo: "1 month ago"
              },
              {
                name: "Jaggannatth",
                role: "Professional",
                content: "I really impressed the way you updated my CV. It's looking more Professional and Precise. I appreciate your efforts and insights. Thanks for the support.",
                rating: 5,
                timeAgo: "1 month ago"
              },
              {
                name: "Vaishnavi Raikar",
                role: "Job Seeker",
                content: "Highly recommend this service! They helped me create a professional resume, cover letter that perfectly highlights my skills and experience. Thanks to them, I feel confident in my job search!",
                rating: 5,
                timeAgo: "2 months ago"
              },
              {
                name: "Satya Jit Barik",
                role: "Professional",
                content: "Trust full, really this people are amazing they done good job i am really appreciate to them thank you for your immediate response and help full nature.",
                rating: 5,
                timeAgo: "2 weeks ago"
              },
              {
                name: "Vaibhav Raijada",
                role: "Professional",
                content: "Was a touch and go with interview approaching but the team helped with a quick and complete turnaround by providing a well drafted resume. I am not only thankful but grateful for the service.",
                rating: 5,
                timeAgo: "4 months ago"
              },
              {
                name: "Trishika Cyndi",
                role: "Job Seeker",
                content: "Rohan is very professional when it comes to making resume. His c.v helped me in getting a job and im very grateful for his assistance. Thank you Rohan you are indeed The Best.",
                rating: 5,
                timeAgo: "1 week ago"
              },
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                content: "Excellent service! The team at Easemyform created a professional resume that helped me stand out in my job applications. The ATS optimization really made a difference. Highly recommended!",
                rating: 5,
                timeAgo: "3 weeks ago"
              },
              {
                name: "Rajesh Kumar",
                role: "Marketing Manager",
                content: "Outstanding work! They transformed my old resume into a modern, professional document. The cover letter was also perfectly crafted. Worth every penny. Thank you for the excellent service!",
                rating: 5,
                timeAgo: "1 month ago"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{testimonial.timeAgo}</span>
                    </div>
                    <p className="text-gray-600 mb-4 italic text-sm">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have successfully landed their dream jobs with our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

