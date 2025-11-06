import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import visualData from '../data/visuals.json'

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']

const OpenSourceChart = () => {
  const handleLegendClick = (entry) => {
    const project = visualData.openSourceImpact.find(p => p.project === entry.value)
    if (project) {
      window.open(`https://github.com/${project.repo}/commits?author=ganesh-k13`, '_blank')
    }
  }

  return (
    <div className="bg-darker p-6 rounded-lg border border-gray-800">
      <h3 className="text-2xl font-semibold mb-6 text-gray-100">Open Source Contributions</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={visualData.openSourceImpact}
            dataKey="contributions"
            nameKey="project"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label={({ project, contributions }) => `${project}: ${contributions}`}
            labelLine={{ stroke: '#6b7280', strokeWidth: 1 }}
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
              color: '#f1f5f9'
            }}
            itemStyle={{ color: '#f1f5f9' }}
          />
          <Legend 
            wrapperStyle={{ color: '#9ca3af', cursor: 'pointer' }} 
            onClick={handleLegendClick}
          />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 text-center mt-2">Click project names to view commits on GitHub</p>
    </div>
  )
}

export default OpenSourceChart
