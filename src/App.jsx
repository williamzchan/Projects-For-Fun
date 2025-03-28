import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Calculator from "./Components/Calculator/Calculator"
import Todolist from "./Components/Todolist/Todolist"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todolist" element={<Todolist/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
