import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "/src/config/api";

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
    <div style={{ padding: "40px", color: "white" }}>

      <h1>{product.name}</h1>

      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "300px" }}
      />

      <p>{product.description}</p>

      <h3>£{product.price}</h3>

    </div>
  );
}

export default ProductPage;