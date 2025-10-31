import { openSource } from '../data'

const OpenSource = () => (
  <section id="opensource" className="min-h-screen py-20 px-6 bg-dark">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-accent">Open Source</h2>
      <div className="space-y-10">
        {openSource.map((project, idx) => (
          <div key={idx} className="bg-darker p-6 rounded-lg border border-gray-800 hover:border-accent transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-100">{project.name}</h3>
                <p className="text-accent mt-1">{project.role}</p>
              </div>
              <div className="flex gap-4">
                {project.links.team && (
                  <a href={project.links.team} target="_blank" rel="noopener noreferrer"
                     className="text-sm text-gray-400 hover:text-accent transition-colors">
                    Team
                  </a>
                )}
                <a href={project.links.contributions} target="_blank" rel="noopener noreferrer"
                   className="text-sm text-gray-400 hover:text-accent transition-colors">
                  Contributions
                </a>
              </div>
            </div>
            <ul className="space-y-2">
              {project.contributions.map((contribution, i) => (
                <li key={i} className="text-gray-300 text-sm">
                  • {contribution}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default OpenSource
