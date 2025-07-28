import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../API/baseURL";
import ProductCard from "../../Components/Products/ProductCard";
import styles from "./css/categoryitems.module.css";
import Loader from "../../Components/Loader/Loader";

function CategoryItems() {
  const { categoryType } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/products/category/${categoryType}`)
      .then((res) => {
        console.log(res);
        setItems(() => {
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
      <div
        style={{
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "35px",
          paddingTop: "25px",
          marginBottom: "70px",
        }}
      >
        {categoryType}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.products_container}>
          {items.map((item) => {
            return (
              <ProductCard
                key={item.id}
                productID={item.id}
                productTitle={item.title}
                productImage={item.image}
                productPrice={item.price}
                productRating={item.rating.rate}
                productRatingCount={item.rating.count}
              />
            );
          })}
        </div>
      )}
    </Layout>
  );
}

export default CategoryItems;
