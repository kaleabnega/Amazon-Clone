import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./css/products.module.css";
import Loader from "../Loader/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setProducts(() => {
          return res.data;
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error occurred: " + err);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.products_container}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productID={product.id}
                productTitle={product.title}
                productDescription={product.description}
                productImage={product.image}
                productPrice={product.price}
                productRating={product.rating.rate}
                productRatingCount={product.rating.count}
                renderAddToCartButton={true}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Products;
