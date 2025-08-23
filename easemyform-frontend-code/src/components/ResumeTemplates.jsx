import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import resumeTemplate1 from '../assets/resume-template-1.png';
import resumeTemplate2 from '../assets/resume-template-2.png';
import resumeTemplate3 from '../assets/resume-template-3.png';

const ResumeTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Professional Modern",
      description: "Clean, ATS-friendly design perfect for corporate roles",
      image: resumeTemplate1,
      features: ["ATS Optimized", "Modern Layout", "Professional Colors"],
      source: "Novoresume Style"
    },
    {
      id: 2,
      name: "Creative Professional",
      description: "Eye-catching design for creative and marketing professionals",
      image: resumeTemplate2,
      features: ["Creative Layout", "Visual Appeal", "Industry Focused"],
      source: "Novoresume Style"
    },
    {
      id: 3,
      name: "Executive Premium",
      description: "Sophisticated design for senior-level positions",
      image: resumeTemplate3,
      features: ["Executive Style", "Premium Look", "Leadership Focus"],
      source: "Enhancv Style"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Resume <span className="text-primary">Templates & Design</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our collection of professionally designed resume templates inspired by industry leaders like Novoresume and Enhancv.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={template.image} 
                    alt={`${template.name} Resume Template`}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-xs">
                    {template.source}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/pricing">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get This Template - ₹1999
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Your Professional Resume?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our expert writers will create a custom resume using these professional templates, 
            tailored specifically to your industry and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Your Resume - ₹1999
              </Button>
            </Link>
            <Link to="/ats-checker">
              <Button size="lg" variant="outline">
                Check Your Current Resume
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeTemplates;

