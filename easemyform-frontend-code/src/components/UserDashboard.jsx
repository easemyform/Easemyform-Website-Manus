import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { FileText, Target, Linkedin, Eye, Download, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const UserDashboard = ({ user }) => {
  if (!user) {
    return (
      <div className="min-h-screen py-16 bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
            <p className="text-gray-600 mb-4">You need to login to access your dashboard.</p>
            <Link to="/login">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Login Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Mock user data
  const userScores = {
    atsScore: 45,
    linkedinScore: 52,
    lastUpdated: '2 days ago'
  }

  const services = [
    {
      title: 'ATS Score',
      score: userScores.atsScore,
      icon: <Target className="h-6 w-6" />,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Your resume ATS compatibility score'
    },
    {
      title: 'LinkedIn Score',
      score: userScores.linkedinScore,
      icon: <Linkedin className="h-6 w-6" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Your LinkedIn profile optimization score'
    }
  ]

  const recentActivity = [
    { action: 'ATS Score Check', date: '2 days ago', result: '45%' },
    { action: 'LinkedIn Review', date: '1 week ago', result: '52%' },
    { action: 'Profile Updated', date: '2 weeks ago', result: 'Success' }
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Welcome back, {user.name}!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Track your scores and manage your career services
          </motion.p>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={service.bgColor}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${service.color} bg-white mr-3`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className={`text-3xl font-bold ${service.color}`}>
                      {service.score}%
                    </div>
                  </div>
                  <Progress value={service.score} className="mb-4" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Last checked: {userScores.lastUpdated}</span>
                    <Button size="sm" variant="outline">
                      Recheck
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/ats-checker">
                    <Button className="w-full justify-start" variant="outline">
                      <Target className="h-4 w-4 mr-2" />
                      Check ATS Score
                    </Button>
                  </Link>
                  <Link to="/linkedin-review">
                    <Button className="w-full justify-start" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Review LinkedIn Profile
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Order Resume Service
                    </Button>
                  </Link>
                  <Link to="/linkedin-optimization">
                    <Button className="w-full justify-start" variant="outline">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn Optimization
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                      </div>
                      <div className="text-sm font-medium text-teal-600">
                        {activity.result}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card className="bg-teal-50 border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <Star className="h-6 w-6 mr-2" />
                Recommendations for You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-medium text-teal-800 mb-1">Improve Your ATS Score</h4>
                  <p className="text-sm text-teal-700 mb-2">
                    Your current ATS score is 45%. Consider upgrading to our premium ATS checker for detailed insights.
                  </p>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Upgrade Now - ₹99
                  </Button>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-medium text-teal-800 mb-1">LinkedIn Profile Optimization</h4>
                  <p className="text-sm text-teal-700 mb-2">
                    Your LinkedIn score is 52%. Our optimization service can help you reach 80%+.
                  </p>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Get Optimized - ₹1499
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default UserDashboard

