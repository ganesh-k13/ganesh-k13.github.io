import { profile } from '../data'

const Hero = () => (
  <section id="about" className="min-h-screen flex items-center pt-20">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
        {profile.name}
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">{profile.title}</h2>
      <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{profile.bio}</p>
      <div className="flex gap-6 mt-8 items-center">
        <a href="https://ganesh-k13.github.io/Ganesh-Kathiresan-Resume/" target="_blank" rel="noopener noreferrer"
           className="px-6 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
          Download Resume
        </a>
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
  </section>
)

export default Hero
