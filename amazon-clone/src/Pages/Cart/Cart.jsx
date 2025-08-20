import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import ProductPriceFormat from "../../Components/Products/ProductPriceFormat";
import { Link } from "react-router-dom";
import styles from "./css/cart.module.css";
import { Type } from "../../Utility/action.type";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const SubtotalPrice = basket.reduce((acc, curr) => {
    return acc + curr.productPrice * curr.quantity;
  }, 0);

  const numOfBasketItems = basket.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  console.log(basket);

  const increment = (item) => {
    dispatch({ type: Type.ADD_TO_BASKET, item: item });
  };

  const decrement = (id) => {
    dispatch({ type: Type.REMOVE_FROM_BASKET, id });
  };

  return (
    <Layout>
      <div className={styles.cart_page_container}>
        <div className={styles.cart_items_info}>
          <div>
            <h1>Hello</h1>
            <h2>Your Shopping Basket</h2>
          </div>
          <hr />
          <div className={styles.cart_items}>
            {basket?.length == 0 ? (
              <p>No items in your cart.</p>
            ) : (
              basket?.map((item) => {
                return (
                  <div key={item?.productID} className={styles.cart_item}>
                    <ProductCard
                      productID={item?.productID}
                      productTitle={item.productTitle}
                      productDescription={item.productDescription}
                      productImage={item.productImage}
                      productPrice={item.productPrice}
                      productRating={item?.productRating}
                      productRatingCount={item?.productRatingCount}
                      isFlex={true}
                      renderDescription={true}
                      renderAddToCartButton={false}
                    />

                    <div className={styles.num_of_item_controller_container}>
                      <div className={styles.num_of_item_controller}>
                        <button onClick={() => increment(item)}>+</button>
                        <div>{item.quantity}</div>
                        <button onClick={() => decrement(item.productID)}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {basket?.length != 0 && (
          <div>
            <div className={styles.checkout_container}>
              <div className={styles.subtotal_container}>
                Subtotal (<span>{numOfBasketItems}</span> items):
                <span
                  style={{
                    paddingLeft: "25px",
                  }}
                >
                  $<ProductPriceFormat price={SubtotalPrice} />
                </span>
              </div>
              <div className={styles.gift_checkbox_container}>
                <input
                  type="checkbox"
                  id="gift-checkbox"
                  style={{
                    marginRight: "20px",
                  }}
                />
                <label htmlFor="gift-checkbox">
                  This order contains a gift
                </label>
              </div>
              <div className={styles.checkout_link_container}>
                <Link className={styles.checkout_link} to="/payment">
                  Continue to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
