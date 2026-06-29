import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f0ece4]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
