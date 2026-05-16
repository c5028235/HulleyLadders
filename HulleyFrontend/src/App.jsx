import BaseLayout from "./components/baselayout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import ProductPage from "./components/pages/productpage";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Account from "./components/pages/Account";
import AdminDashboard from "/src/admin/AdminDashboard";
import AdminRoute from "/src/admin/AdminRoute";
import Logout from "./components/logout";
import GuestRoute from "./components/guestroute";
import DashboardLayout from "./admin/dashboardlayout";
import Products from "./admin/pages/product";
import AddProduct from "./admin/pages/addproducts";


function App() {

  return (

    <div>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/login" element={
            <GuestRoute>
              <Login />
            </GuestRoute>} />
          <Route path="/register" element={
            <GuestRoute>
              <Register />
            </GuestRoute>} />
          <Route path="/account" element={<Account />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>} />

          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                <Products />
              </AdminRoute>}
          />

          <Route
            path="/admin/add-product"
            element={<AdminRoute>
              <AddProduct />
            </AdminRoute>}
          />
        </Routes>
      </BaseLayout>
    </div>

  )
}

export default App
