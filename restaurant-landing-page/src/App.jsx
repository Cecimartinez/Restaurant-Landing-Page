import './index.css'
import { Home } from "./pages/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./pages/About/About"
import { Work } from "./pages/Work/Work"
import { Footer } from "./components/Footer/Footer"
import { Contact } from "./pages/Contact/Contact"
import { Testimonials } from "./pages/Testimonials/Testimonials"
import { Element } from 'react-scroll';
import { ScrollToTop } from './components'


function App() {
  return (
    <>
      <div className='App'> 
      <Navbar />
        <Home />
      <Element name="about"> 
        <About />
      </Element>
      <Element name="work"> 
        <Work/>
      </Element>
      <Element name="testimonials"> 
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <ScrollToTop/>
      <Footer/>

    </div>
    </>
  )
}

export default App
