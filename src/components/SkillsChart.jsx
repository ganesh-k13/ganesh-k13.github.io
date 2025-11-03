import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import visualData from '../data/visuals.json'

const SkillsChart = () => (
  <div className="bg-darker p-6 rounded-lg border border-gray-800">
    <h3 className="text-2xl font-semibold mb-6 text-gray-100">Skill Proficiency</h3>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={visualData.skillProficiency} layout="vertical" margin={{ left: 120 }}>
        <XAxis type="number" domain={[0, 100]} stroke="#6b7280" />
        <YAxis type="category" dataKey="skill" stroke="#6b7280" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #3b82f6', borderRadius: '8px' }}
          labelStyle={{ color: '#3b82f6' }}
        />
        <Bar dataKey="level" radius={[0, 8, 8, 0]}>
          {visualData.skillProficiency.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.level >= 85 ? '#3b82f6' : '#6b7280'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default SkillsChart
