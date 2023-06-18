import './app.scss'
import Topbar from "./Topbar"
import Footer from "./footer"
import Home from "./home"
import About from './About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
    <BrowserRouter>
     <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
     <Footer/>
    </div>
  )
}

export default App
