import BaseLayout from "./components/baselayout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import ProductPage from "./components/pages/productpage";


function App() {

  return (
    <Router>
      <div>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:slug" element={<ProductPage/>}/>
          </Routes>
        </BaseLayout>
      </div>
    </Router >
  )
}

export default App
