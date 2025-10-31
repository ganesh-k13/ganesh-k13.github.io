import { skills, education, publications } from '../data'

const Skills = () => (
  <section id="skills" className="min-h-screen py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-accent">Skills & Education</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Languages</h3>
        <div className="flex flex-wrap gap-3">
          {skills.languages.map((lang, idx) => (
            <span key={idx} className="px-4 py-2 bg-dark border border-accent text-accent rounded-full text-sm">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {skills.technologies.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 bg-dark border border-gray-700 text-gray-300 rounded-full text-sm hover:border-accent transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Education</h3>
        <div className="bg-dark p-6 rounded-lg border border-gray-800">
          <p className="text-xl text-gray-100">{education.degree}</p>
          <p className="text-accent mt-2">{education.institution}</p>
          <p className="text-gray-400 mt-1">GPA: {education.gpa} • {education.period}</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Publications</h3>
        <a href={publications.scholarProfile} target="_blank" rel="noopener noreferrer"
           className="inline-block bg-dark p-6 rounded-lg border border-gray-800 hover:border-accent transition-colors">
          <p className="text-gray-300">Google Scholar Profile</p>
          <p className="text-accent mt-2">{publications.citations} citations</p>
        </a>
      </div>
    </div>
  </section>
)

export default Skills
