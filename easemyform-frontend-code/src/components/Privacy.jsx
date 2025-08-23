import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Privacy <span className="text-teal-600">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-gray-500 mt-2"
          >
            Last updated: January 2024
          </motion.p>
        </div>

        {/* Privacy Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Secure Storage</h3>
              <p className="text-sm text-gray-600">Your data is encrypted and stored securely</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Lock className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">No Sharing</h3>
              <p className="text-sm text-gray-600">We never share your personal information</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Eye className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">Clear policies on data usage</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <UserCheck className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Your Control</h3>
              <p className="text-sm text-gray-600">You control your data and privacy settings</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal information (name, email address, phone number)</li>
                <li>Professional information (work experience, education, skills)</li>
                <li>Resume and career-related documents</li>
                <li>Payment information (processed securely through Razorpay)</li>
                <li>Communication records with our support team</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Create and optimize your resume and LinkedIn profile</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Process payments and send transaction confirmations</li>
                <li>Send service updates and important notifications</li>
                <li>Improve our services based on usage patterns and feedback</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure payment processing through certified providers</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability (receive a copy of your data)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us at <a href="mailto:ceo@easemyform.com" className="text-teal-600 hover:underline">ceo@easemyform.com</a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. 
                We may retain certain information for longer periods as required by law or for legitimate business purposes, such as fraud prevention and safety.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> <a href="mailto:ceo@easemyform.com" className="text-teal-600 hover:underline">ceo@easemyform.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917697470397" className="text-teal-600 hover:underline">+91-7697470397</a></p>
                <p><strong>Response Time:</strong> We will respond to your inquiry within 48 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                Updates to This Policy
              </h3>
              <p className="text-teal-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. 
                We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Privacy

