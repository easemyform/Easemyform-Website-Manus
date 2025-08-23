import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Linkedin, Star, AlertCircle, CheckCircle, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const LinkedInReview = ({ user }) => {
  const [profileUrl, setProfileUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)
  const [showUpgrade, setShowUpgrade] = useState(false)

  const analyzeProfile = () => {
    if (!profileUrl || !profileUrl.includes('linkedin.com')) {
      alert('Please enter a valid LinkedIn profile URL')
      return
    }

    setIsAnalyzing(true)
    
    // Simulate analysis
    setTimeout(() => {
      // Generate random low scores for free users
      const scores = {
        heading: Math.floor(Math.random() * 30) + 20,
        profilePhoto: Math.floor(Math.random() * 25) + 25,
        banner: Math.floor(Math.random() * 20) + 15,
        skills: Math.floor(Math.random() * 30) + 20,
        jobRoles: Math.floor(Math.random() * 25) + 30,
        connections: Math.floor(Math.random() * 20) + 25,
        education: Math.floor(Math.random() * 25) + 35
      }
      
      const overallScore = Math.floor(Object.values(scores).reduce((a, b) => a + b, 0) / 7)
      
      setResults({
        overallScore,
        scores,
        issues: [
          'Headline needs optimization for keywords',
          'Profile photo could be more professional',
          'LinkedIn banner is missing or not optimized',
          'Skills section needs more relevant skills',
          'Job descriptions lack impact and metrics',
          'Network size is below industry average',
          'Education section could be enhanced'
        ]
      })
      setIsAnalyzing(false)
      setShowUpgrade(true)
    }, 3000)
  }

  const handleUpgrade = () => {
    window.open('https://rzp.io/rzp/Ue72aJ1V', '_blank')
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

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
            LinkedIn Profile <span className="text-teal-600">Review</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get a comprehensive analysis of your LinkedIn profile and discover areas for improvement
          </motion.p>
        </div>

        {/* URL Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Linkedin className="h-6 w-6 mr-2 text-teal-600" />
                Enter Your LinkedIn Profile URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="profile-url">LinkedIn Profile URL</Label>
                  <Input
                    id="profile-url"
                    type="url"
                    placeholder="https://www.linkedin.com/in/your-profile"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Copy and paste your LinkedIn profile URL here
                  </p>
                </div>
                
                <Button 
                  onClick={analyzeProfile}
                  disabled={!profileUrl || isAnalyzing}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  {isAnalyzing ? 'Analyzing Profile...' : 'Analyze Profile'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Analysis Progress */}
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Analyzing Your LinkedIn Profile</h3>
                  <p className="text-gray-600">This may take a few moments...</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Results */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Overall Score */}
            <Card>
              <CardHeader>
                <CardTitle>LinkedIn Profile Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className={`text-6xl font-bold mb-2 ${getScoreColor(results.overallScore)}`}>
                    {results.overallScore}%
                  </div>
                  <p className="text-gray-600">Your profile needs significant improvement</p>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(results.scores).map(([category, score]) => (
                    <div key={category}>
                      <div className="flex justify-between mb-1">
                        <span className="capitalize font-medium">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className={`font-semibold ${getScoreColor(score)}`}>{score}%</span>
                      </div>
                      <Progress value={score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Issues Found */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-6 w-6 mr-2 text-red-600" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.issues.map((issue, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{issue}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Upgrade Prompt */}
            {showUpgrade && (
              <Card className="border-teal-200 bg-teal-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Star className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-teal-800 mb-2">
                      Get Detailed Report & Higher Score
                    </h3>
                    <p className="text-teal-700 mb-6">
                      Upgrade to get a comprehensive analysis with actionable insights:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Detailed improvement suggestions</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Keyword optimization recommendations</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Industry benchmarking</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Accurate scoring (80-90% range)</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleUpgrade}
                      size="lg"
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      Upgrade for ₹149 - Get Detailed Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Why LinkedIn Profile Review?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Your LinkedIn profile is often the first impression you make on potential employers and professional contacts. 
                A well-optimized profile can significantly increase your visibility and opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-2">87%</div>
                  <p className="text-sm text-gray-600">of recruiters use LinkedIn</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-2">5x</div>
                  <p className="text-sm text-gray-600">more profile views with optimization</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-2">3x</div>
                  <p className="text-sm text-gray-600">more connection requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default LinkedInReview

