import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, FileText, Briefcase, MessageSquare, TrendingUp, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const AdminDashboard = ({ isAdmin }) => {
  if (!isAdmin) {
    return (
      <div className="min-h-screen py-16 bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
            <p className="text-gray-600">You don't have permission to access this page.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const stats = [
    { title: 'Total Users', value: '1,247', icon: <Users className="h-6 w-6" />, color: 'bg-blue-500' },
    { title: 'Resumes Created', value: '10,234', icon: <FileText className="h-6 w-6" />, color: 'bg-green-500' },
    { title: 'Active Jobs', value: '156', icon: <Briefcase className="h-6 w-6" />, color: 'bg-purple-500' },
    { title: 'Blog Posts', value: '89', icon: <MessageSquare className="h-6 w-6" />, color: 'bg-orange-500' }
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
            Admin Dashboard
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Manage jobs, blog posts, and monitor platform activity
          </motion.p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full text-white ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Management */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-6 w-6 mr-2 text-teal-600" />
                  Job Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Manage job postings and opportunities for users
                </p>
                <div className="space-y-2 mb-4">
                  <Button className="w-full justify-start" variant="outline">
                    Add New Job
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    View All Jobs
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Manage Categories
                  </Button>
                </div>
                <div className="text-sm text-gray-500">
                  Last updated: 2 hours ago
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Blog Management */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-teal-600" />
                  Blog Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create and manage blog posts and career advice content
                </p>
                <div className="space-y-2 mb-4">
                  <Button className="w-full justify-start" variant="outline">
                    Create New Post
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    View All Posts
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Manage Categories
                  </Button>
                </div>
                <div className="text-sm text-gray-500">
                  Last post: 1 day ago
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-teal-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">New user registration</p>
                    <p className="text-sm text-gray-600">john.doe@example.com</p>
                  </div>
                  <div className="text-sm text-gray-500">5 min ago</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Resume order completed</p>
                    <p className="text-sm text-gray-600">Order #12345</p>
                  </div>
                  <div className="text-sm text-gray-500">15 min ago</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">New job posted</p>
                    <p className="text-sm text-gray-600">Software Engineer at TechCorp</p>
                  </div>
                  <div className="text-sm text-gray-500">1 hour ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard

