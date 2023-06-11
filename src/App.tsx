import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Main from './components/Main'
import { Navbar } from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div >
  )
}

export default App
