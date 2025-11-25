import { experience } from '../data'

const Experience = () => (
  <section id="experience" className="min-h-screen py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent">Experience</h2>
      <div className="space-y-8 sm:space-y-12">
        {experience.map((job, idx) => (
          <div key={idx} className="border-l-2 border-accent pl-4 sm:pl-6 hover:border-blue-400 transition-colors">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">{job.company}</h3>
            <p className="text-base sm:text-lg text-accent mt-1">{job.role}</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{job.period} • {job.location}</p>
            <ul className="mt-4 space-y-2 sm:space-y-3">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
