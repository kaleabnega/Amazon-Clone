import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./css/products.module.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(() => {
          return res.data;
        });
      })
      .catch((err) => {
        console.error("Error occurred: " + err);
      });
  }, []);
  return (
    <div className={styles.products_container}>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            productTitle={product.title}
            productImage={product.image}
            productPrice={product.price}
            productRating={product.rating.rate}
            productRatingCount={product.rating.count}
          />
        );
      })}
    </div>
  );
}

export default Products;
