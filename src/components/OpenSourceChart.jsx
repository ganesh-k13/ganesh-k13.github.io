import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import visualData from '../data/visuals.json'

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6']

const OpenSourceChart = () => (
  <div className="bg-darker p-6 rounded-lg border border-gray-800">
    <h3 className="text-2xl font-semibold mb-6 text-gray-100">Open Source Contributions</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={visualData.openSourceImpact}
          dataKey="contributions"
          nameKey="project"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ project, contributions }) => `${project}: ${contributions}`}
        >
          {visualData.openSourceImpact.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #3b82f6', borderRadius: '8px' }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export default OpenSourceChart
