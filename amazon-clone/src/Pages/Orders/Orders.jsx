import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./css/orders.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import ProductCard from "../../Components/Products/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <section className={styles.orders_section}>
        <div className={styles.orders_container}>
          <div
            style={{
              padding: "0px 50px",
            }}
          >
            <div>
              <h2>Your Orders</h2>
              {!orders.length && (
                <div
                  style={{
                    padding: "10px",
                  }}
                >
                  You don't have any orders
                </div>
              )}
            </div>
            <div>
              {orders.map((order) => {
                return (
                  <div className={styles.order_container}>
                    <div>Order ID: ({order.id})</div>
                    <div>
                      {order?.data?.basket?.map((item, index) => {
                        return (
                          <ProductCard
                            key={index}
                            productID={item?.productID}
                            productTitle={item.productTitle}
                            productDescription={item.productDescription}
                            productImage={item.productImage}
                            productPrice={item.productPrice}
                            productRating={item?.productRating}
                            productRatingCount={item?.productRatingCount}
                            isFlex={true}
                            renderAddToCartButton={false}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
