import BaseLayout from "./components/baselayout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";


function App() {

  return (
    <Router>
      <div>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BaseLayout>
      </div>
    </Router >
  )
}

export default App
