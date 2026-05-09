import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "/src/config/api";
import "/src/assets/css/productpage.css";

function ProductPage() {

  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(slug)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="details-container">

      <div className="details-image">
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px" }}
        />
      </div>
      <div className="details-card">
        <h4>{product.name}</h4>

        <p>{product.description}</p>

        <h3>£{product.base_price}</h3>
      </div>

    </div>
  );
}

export default ProductPage;