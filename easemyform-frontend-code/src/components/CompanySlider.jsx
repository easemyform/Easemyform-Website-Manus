import { motion } from 'framer-motion'
import companyLogos from '../assets/company-logos.png'

const CompanySlider = () => {
  const companies = [
    'Meta', 'Netflix', 'Tesla', 'Spotify', 'Google', 'Microsoft', 'Amazon', 'Apple'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Clients Work At
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by professionals from top companies worldwide
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex justify-center items-center"
            animate={{
              x: [0, -50],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {/* Company logos image */}
            <div className="flex-shrink-0">
              <img 
                src={companyLogos} 
                alt="Top Companies - Meta, Netflix, Tesla, Google, Microsoft, Amazon, Apple" 
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex-shrink-0 ml-12">
              <img 
                src={companyLogos} 
                alt="Top Companies - Meta, Netflix, Tesla, Google, Microsoft, Amazon, Apple" 
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Individual company names for better SEO */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {companies.join(' • ')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CompanySlider

