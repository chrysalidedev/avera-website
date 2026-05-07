import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Objectives from './components/Objectives'
import Bureau from './components/Bureau'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Bureau />
      <Contact />
      <Footer />
    </div>
  )
}
