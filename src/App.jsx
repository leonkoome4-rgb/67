import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
