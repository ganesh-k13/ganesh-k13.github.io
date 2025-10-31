import { experience } from '../data'

const Experience = () => (
  <section id="experience" className="min-h-screen py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-accent">Experience</h2>
      <div className="space-y-12">
        {experience.map((job, idx) => (
          <div key={idx} className="border-l-2 border-accent pl-6 hover:border-blue-400 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-100">{job.company}</h3>
            <p className="text-lg text-accent mt-1">{job.role}</p>
            <p className="text-sm text-gray-500 mt-1">{job.period} • {job.location}</p>
            <ul className="mt-4 space-y-3">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 leading-relaxed">
                  • {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
