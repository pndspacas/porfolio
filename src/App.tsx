import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Main from './components/main'
import { Navbar } from './components/navbar'
import Projects from './components/projects'

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
