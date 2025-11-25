import { skills, education, publications } from '../data'

const Skills = () => (
  <section id="skills" className="min-h-screen py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent">Skills & Education</h2>
      
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">Languages</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.languages.map((lang, idx) => (
            <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-dark border border-accent text-accent rounded-full text-xs sm:text-sm">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">Technologies</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-dark border border-gray-700 text-gray-300 rounded-full text-xs sm:text-sm hover:border-accent transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">Education</h3>
        <div className="bg-dark p-4 sm:p-6 rounded-lg border border-gray-800">
          <p className="text-lg sm:text-xl text-gray-100">{education.degree}</p>
          <p className="text-accent mt-2 text-sm sm:text-base">{education.institution}</p>
          <p className="text-gray-400 mt-1 text-xs sm:text-sm">GPA: {education.gpa} • {education.period}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">Publications</h3>
        <a href={publications.scholarProfile} target="_blank" rel="noopener noreferrer"
           className="inline-block w-full sm:w-auto bg-dark p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-accent transition-colors">
          <p className="text-gray-300 text-sm sm:text-base">Google Scholar Profile</p>
          <p className="text-accent mt-2 text-sm sm:text-base">{publications.citations} citations</p>
        </a>
      </div>
    </div>
  </section>
)

export default Skills
