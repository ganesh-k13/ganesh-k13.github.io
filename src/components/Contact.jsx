import { profile } from '../data'

const Contact = () => (
  <section id="contact" className="min-h-screen py-20 px-6 bg-dark flex items-center">
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold mb-12 text-accent">Get In Touch</h2>
      <div className="space-y-6">
        <p className="text-xl text-gray-300">
          I'm always open to discussing new opportunities, collaborations, or just connecting with fellow engineers.
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <a href={`mailto:${profile.email}`} 
             className="text-2xl text-accent hover:text-blue-400 transition-colors">
            {profile.email}
          </a>
          <div className="flex gap-6 text-lg">
            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-accent transition-colors">
              GitHub →
            </a>
            <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-accent transition-colors">
              LinkedIn →
            </a>
            <a href={`https://twitter.com/${profile.twitter}`} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-accent transition-colors">
              Twitter →
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ganesh Kathiresan. Built with React + Vite + Tailwind CSS.
      </footer>
    </div>
  </section>
)

export default Contact
