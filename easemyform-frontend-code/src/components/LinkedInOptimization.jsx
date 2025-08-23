import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Linkedin, Users, TrendingUp, Award, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const LinkedInOptimization = () => {
  const handlePurchase = () => {
    window.open('https://rzp.io/l/aDrhVPnV', '_blank')
  }

  const features = [
    'Complete profile optimization',
    'Professional headline creation',
    'Skills enhancement and endorsements',
    'Connect with domain HRs',
    'Profile photo guidance',
    'Banner design recommendations',
    'Content strategy advice',
    'Network expansion tips'
  ]

  const process = [
    {
      step: 1,
      title: 'Share Credentials',
      description: 'Provide your LinkedIn login credentials securely'
    },
    {
      step: 2,
      title: 'Profile Analysis',
      description: 'Our experts analyze your current profile'
    },
    {
      step: 3,
      title: 'Optimization',
      description: 'We optimize your profile for maximum visibility'
    },
    {
      step: 4,
      title: 'HR Connections',
      description: 'Connect with relevant HRs in your domain'
    }
  ]

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
            LinkedIn <span className="text-teal-600">Optimization</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your LinkedIn profile into a powerful career tool that attracts recruiters and opportunities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Linkedin className="h-6 w-6 mr-2 text-teal-600" />
                  Complete Profile Makeover
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our LinkedIn optimization service includes a complete profile transformation 
                  that makes you stand out to recruiters and industry professionals.
                </p>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 border-teal-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">₹1499</div>
                  <p className="text-teal-700 mb-4">Complete LinkedIn Optimization</p>
                  <Button 
                    onClick={handlePurchase}
                    className="w-full bg-teal-600 hover:bg-teal-700"
                  >
                    Get Started Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {process.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why LinkedIn Optimization?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">87%</div>
                    <p className="text-sm text-gray-600">of recruiters use LinkedIn</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">5x</div>
                    <p className="text-sm text-gray-600">more profile views</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  A well-optimized LinkedIn profile can significantly increase your visibility 
                  to recruiters and open up new career opportunities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">HR Connections</h3>
                <p className="text-gray-600">Connect with relevant HRs in your industry domain</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Increased Visibility</h3>
                <p className="text-gray-600">Get 5x more profile views and connection requests</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Brand</h3>
                <p className="text-gray-600">Build a strong professional brand that attracts opportunities</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Security & Privacy
              </h3>
              <p className="text-blue-700">
                Your LinkedIn credentials are handled with utmost security. We use secure protocols 
                and never store your login information permanently. All changes are made transparently 
                and you maintain full control of your account.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default LinkedInOptimization

