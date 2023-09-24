import { Home } from "./pages/Home/Home"
import './App.css'
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./pages/About/About"


function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App
