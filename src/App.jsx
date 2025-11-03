import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CareerTimeline from './components/CareerTimeline'
import OpenSourceChart from './components/OpenSourceChart'

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <section id="visualizations" className="min-h-screen py-20 px-6 bg-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-accent">Career Insights</h2>
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-gray-100">Career Journey</h3>
            <CareerTimeline />
          </div>
          <div className="max-w-2xl mx-auto">
            <OpenSourceChart />
          </div>
        </div>
      </section>
      <Experience />
      <OpenSource />
      <Skills />
      <Contact />
    </main>
  </>
)

export default App
