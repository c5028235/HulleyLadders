import { useState } from "react";
import API from "../../services/api";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("products/create/", form);

      navigate("/admin/products");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-content">

        <h1>Add Product</h1>

        <form onSubmit={handleSubmit} className="admin-form">

          <input
            placeholder="Name"
            onChange={e => setForm({...form, name: e.target.value})}
          />

          <input
            placeholder="Price"
            onChange={e => setForm({...form, price: e.target.value})}
          />

          <textarea
            placeholder="Description"
            onChange={e => setForm({...form, description: e.target.value})}
          />

          <button type="submit">
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;
