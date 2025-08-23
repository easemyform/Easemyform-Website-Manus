import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Star, FileText, Linkedin, Target, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const services = [
    {
      title: 'Resume + Cover Letter',
      price: '₹1999',
      description: 'Professional ATS-friendly resume with cover letter',
      features: [
        'ATS-optimized resume',
        'Professional cover letter',
        'Unlimited revisions',
        '24/7 support',
        'Fast delivery',
        'Industry-specific templates'
      ],
      icon: <FileText className="h-8 w-8" />,
      link: 'https://rzp.io/rzp/xri3LLj',
      popular: true
    },
    {
      title: 'LinkedIn Optimization',
      price: '₹1499',
      description: 'Complete LinkedIn profile makeover and HR connections',
      features: [
        'Profile optimization',
        'Professional headline',
        'Skills enhancement',
        'Connect with domain HRs',
        'Profile photo guidance',
        'Banner design tips'
      ],
      icon: <Linkedin className="h-8 w-8" />,
      link: 'https://rzp.io/l/aDrhVPnV',
      popular: false
    },
    {
      title: 'LinkedIn Review',
      price: '₹149',
      description: 'Comprehensive LinkedIn profile analysis and scoring',
      features: [
        'Profile scoring',
        'Detailed analysis report',
        'Improvement suggestions',
        'Competitive benchmarking',
        'Action plan',
        'Follow-up support'
      ],
      icon: <Eye className="h-8 w-8" />,
      link: 'https://rzp.io/rzp/Ue72aJ1V',
      popular: false
    },
    {
      title: 'ATS Checker',
      price: '₹99',
      description: 'Resume ATS compatibility check with detailed report',
      features: [
        'ATS score analysis',
        'Keyword optimization',
        'Format compatibility',
        'Detailed report',
        'Improvement tips',
        'Industry benchmarks'
      ],
      icon: <Target className="h-8 w-8" />,
      link: 'https://rzp.io/rzp/qIH8G2w',
      popular: false
    }
  ]

  const handlePurchase = (link) => {
    window.open(link, '_blank')
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
            Choose Your <span className="text-teal-600">Career Package</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Professional services designed to accelerate your career growth and help you land your dream job
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${service.popular ? 'ring-2 ring-teal-600 shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-shadow`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                  <div className="text-4xl font-bold text-teal-600 mb-2">{service.price}</div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handlePurchase(service.link)}
                    className={`w-full ${service.popular ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose EaseMyForm?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10,000+</div>
                <p className="text-gray-600">Successful Resumes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">4.8/5</div>
                <p className="text-gray-600">Google Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Terms */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Service Terms & Delivery</h4>
            <div className="text-blue-700 space-y-2">
              <p>• Resume will be submitted on WhatsApp number within 2-3 working days after payment</p>
              <p>• We provide twice editing within a week</p>
              <p>• After 10 days, we delete your resume from our database</p>
              <p>• Any changes after that will charge full amount</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing

