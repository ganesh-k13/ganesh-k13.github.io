import { motion } from 'framer-motion'
import { useState } from 'react'
import visualData from '../data/visuals.json'

const CareerTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />
      <div className="space-y-8">
        {visualData.careerTimeline.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative pl-20"
          >
            <div className="absolute left-6 w-5 h-5 rounded-full bg-accent border-4 border-darker" />
            <div className={`bg-darker p-6 rounded-lg border transition-all duration-300 ${
              hoveredIndex === idx ? 'border-accent scale-105' : 'border-gray-800'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100">{job.company}</h3>
                  <p className="text-accent">{job.role}</p>
                </div>
                <span className="text-sm text-gray-500">{job.start} - {job.end}</span>
              </div>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-gray-800"
                >
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-dark text-xs text-gray-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CareerTimeline
