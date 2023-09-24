import { Home } from "./pages/Home/Home"
import './App.css'
import { Navbar } from "./components/Navbar/Navbar"


function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
