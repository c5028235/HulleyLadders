import { useEffect, useState } from "react";
import { getHomeProducts } from "/src/config/api";
import { Link } from "react-router-dom";
import "/src/assets/css/homeproducts.css";

function HomeProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getHomeProducts()
      .then(res => {
        // show only first 6 products
        setProducts(res.data.slice(0, 6));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="home-products">

      <h2>Featured Products</h2>

      <div className="home-grid">

        {products.map(product => (

          <Link 
            to={`/products/${product.slug}`} 
            key={product.id}
            className="card-link"
          >

            <div className="product-card">

              <img src={product.image} alt={product.name} />

              <h4>{product.name}</h4>

              <p className="price">£{product.base_price}</p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default HomeProducts;