import BaseLayout from "./components/baselayout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import ProductPage from "./components/pages/productpage";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AdminDashboard from "./admin/AdminDashboard";
import AdminRoute from "./components/AdminRoute";


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
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
          </Routes>
        </BaseLayout>
      </div>
    </Router >
  )
}

export default App
