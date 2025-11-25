import { profile } from '../data'

const Hero = () => (
  <section id="about" className="min-h-screen flex items-center pt-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
        {profile.name}
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6">{profile.title}</h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 items-start sm:items-center">
        <a href="https://ganesh-k13.github.io/Ganesh-Kathiresan-Resume/" target="_blank" rel="noopener noreferrer"
           className="px-6 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center">
          Download Resume
        </a>
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={`https://twitter.com/${profile.twitter}`} target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-accent transition-colors">
            Twitter
          </a>
          <a href={`https://${profile.medium}.medium.com/`} target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-accent transition-colors">
            Medium
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
