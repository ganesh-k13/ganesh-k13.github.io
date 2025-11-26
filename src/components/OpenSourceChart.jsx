import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import visualData from '../data/visuals.json'

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']

const OpenSourceChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLegendClick = (entry) => {
    const project = visualData.openSourceImpact.find(p => p.project === entry.value)
    if (project) {
      window.open(`https://github.com/${project.repo}/commits?author=ganesh-k13`, '_blank')
    }
  }

  return (
    <div className="bg-darker p-4 sm:p-6 rounded-lg border border-gray-800">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-100">Open Source Contributions</h3>
      <div className="h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
          <Pie
            data={visualData.openSourceImpact}
            dataKey="contributions"
            nameKey="project"
            cx="50%"
            cy="50%"
            outerRadius={isMobile ? 60 : 90}
            label={!isMobile ? ({ project, contributions }) => `${project}: ${contributions}` : false}
            labelLine={!isMobile ? { stroke: '#6b7280', strokeWidth: 1 } : false}
          >
            {visualData.openSourceImpact.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '2px solid #3b82f6', 
              borderRadius: '8px',
              color: '#f1f5f9',
              fontSize: '12px'
            }}
            itemStyle={{ color: '#f1f5f9' }}
          />
          <Legend 
            wrapperStyle={{ color: '#9ca3af', cursor: 'pointer', fontSize: '12px' }} 
            onClick={handleLegendClick}
          />
        </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">Click project names to view commits on GitHub</p>
    </div>
  )
}

export default OpenSourceChart
