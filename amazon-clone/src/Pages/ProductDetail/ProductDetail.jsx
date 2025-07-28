import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { baseURL } from "../../API/baseURL";
import ProductCard from "../../Components/Products/ProductCard";
import axios from "axios";
import styles from "./css/productdetail.module.css";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/products/${productID}`)
      .then((res) => {
        setProduct(() => {
          return res.data;
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error occurred: " + err);
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.products_container}>
          <ProductCard
            key={product?.id}
            productID={product?.id}
            productTitle={product.title}
            productImage={product.image}
            productPrice={product.price}
            productRating={product?.rating?.rate}
            productRatingCount={product?.rating?.count}
          />
        </div>
      )}
    </Layout>
  );
}

export default ProductDetail;
