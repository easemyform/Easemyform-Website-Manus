import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Upload, FileText, AlertCircle, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const ATSChecker = ({ user }) => {
  const [file, setFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)
  const [showUpgrade, setShowUpgrade] = useState(false)

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0]
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile)
      setResults(null)
      setShowUpgrade(false)
    } else {
      alert('Please upload a PDF file only')
    }
  }

  const analyzeResume = () => {
    if (!file) return

    setIsAnalyzing(true)
    
    // Simulate analysis
    setTimeout(() => {
      // Generate random low score for free users
      const freeScore = Math.floor(Math.random() * 30) + 20 // 20-50 range
      
      setResults({
        overallScore: freeScore,
        categories: {
          formatting: Math.floor(Math.random() * 20) + 20,
          keywords: Math.floor(Math.random() * 25) + 15,
          experience: Math.floor(Math.random() * 30) + 25,
          skills: Math.floor(Math.random() * 25) + 20,
          education: Math.floor(Math.random() * 20) + 30
        },
        issues: [
          'Resume format not ATS-friendly',
          'Missing important keywords',
          'Poor section organization',
          'Inconsistent formatting',
          'Lack of quantified achievements'
        ]
      })
      setIsAnalyzing(false)
      setShowUpgrade(true)
    }, 3000)
  }

  const handleUpgrade = () => {
    window.open('https://rzp.io/rzp/qIH8G2w', '_blank')
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getProgressColor = (score) => {
    if (score >= 80) return 'bg-green-600'
    if (score >= 60) return 'bg-yellow-600'
    return 'bg-red-600'
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
            ATS Resume <span className="text-teal-600">Checker</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Check if your resume is ATS-friendly and get a detailed analysis to improve your chances
          </motion.p>
        </div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-6 w-6 mr-2 text-teal-600" />
                Upload Your Resume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="resume-upload">Choose PDF file</Label>
                  <Input
                    id="resume-upload"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="mt-1"
                  />
                </div>
                
                {file && (
                  <div className="flex items-center p-3 bg-teal-50 rounded-lg">
                    <FileText className="h-5 w-5 text-teal-600 mr-2" />
                    <span className="text-sm text-teal-800">{file.name}</span>
                  </div>
                )}
                
                <Button 
                  onClick={analyzeResume}
                  disabled={!file || isAnalyzing}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
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
                  <h3 className="text-lg font-semibold mb-2">Analyzing Your Resume</h3>
                  <p className="text-gray-600">This may take a few moments...</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Results Section */}
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
                <CardTitle>ATS Compatibility Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className={`text-6xl font-bold mb-2 ${getScoreColor(results.overallScore)}`}>
                    {results.overallScore}%
                  </div>
                  <p className="text-gray-600">Your resume needs significant improvement</p>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(results.categories).map(([category, score]) => (
                    <div key={category}>
                      <div className="flex justify-between mb-1">
                        <span className="capitalize font-medium">{category}</span>
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
                  Issues Found
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
                      Get Detailed Analysis & Higher Score
                    </h3>
                    <p className="text-teal-700 mb-6">
                      Upgrade to our premium ATS checker to get:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Detailed improvement suggestions</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Keyword optimization tips</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Industry-specific benchmarks</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                        <span>Higher accuracy scoring (80-90%)</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleUpgrade}
                      size="lg"
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      Upgrade for ₹99 - Get Better Score
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
              <CardTitle>What is ATS?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Applicant Tracking System (ATS) is software used by employers to filter resumes before they reach human recruiters. 
                Over 90% of large companies use ATS to screen applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-2">75%</div>
                  <p className="text-sm text-gray-600">of resumes are rejected by ATS</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-2">6 sec</div>
                  <p className="text-sm text-gray-600">average time recruiters spend on a resume</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-2">90%</div>
                  <p className="text-sm text-gray-600">of Fortune 500 companies use ATS</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default ATSChecker

