import { useEffect, useState } from "react";
import API from "../../services/api";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    API.get("products/")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));

  }, []);

  const deleteProduct = async (id) => {

    try {

      await API.delete(`products/${id}/`);
setProducts(products.filter(p => p.id !== id));

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-layout">
<Sidebar />

      <div className="admin-content">

        <h1>Products</h1>

        <table className="products-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map(product => (

              <tr key={product.id}>

                <td>{product.name}</td>

                <td>£{product.price}</td>

                <td>

                  <Link to={`/admin/products/edit/${product.id}`}>
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Products;
