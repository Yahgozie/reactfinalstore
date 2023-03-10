import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://localhost:5001/api/Products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    agent.Catalog.list().then(products => setProducts(products)).catch(error => console.log(error)).finally(() => setLoading(false))
  }, []);

  if(loading) return <LoadingComponent message="Loading products......" />

   return (
    <>
      <ProductList products={products} />   
    </>
  );
}

export default Catalog;
