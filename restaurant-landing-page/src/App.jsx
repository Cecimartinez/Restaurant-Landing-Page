import { Home } from "./pages/Home/Home"
import './App.css'
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./pages/About/About"
import { Work } from "./pages/Work/Work"
import { Footer } from "./components/Footer/Footer"


function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Work/>
        <Footer/>
      </div>
    </>
  )
}

export default App
