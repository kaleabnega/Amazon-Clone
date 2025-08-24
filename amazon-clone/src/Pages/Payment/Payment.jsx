import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./css/payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import ProductPriceFormat from "../../Components/Products/ProductPriceFormat";
import { axiosInstance } from "../../API/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  // console.log(user)

  const numOfBasketItems = basket.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const SubtotalPrice = basket.reduce((acc, curr) => {
    return acc + curr.productPrice * curr.quantity;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [IsProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e)

    if (e?.error?.message) {
      setError(e.error.message);
    } else {
      setError("");
    }
  };

  // payment confirmation logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${SubtotalPrice * 100}`,
      });

      console.log(response.data);

      const clientSecret = response.data.clientSecret;

      // const cardElement = elements.getElement(CardElement);

      // if (!cardElement) {
      //   setError("Payment method not ready yet. Please try again.");
      //   setIsProcessing(false);
      //   return;
      // }

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      console.log(paymentIntent);

      // database logic

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: SubtotalPrice,
          created: paymentIntent.created,
        });
      setIsProcessing(false);
      navigate("/orders", { state: "You have placed a new order" });
    } catch (error) {
      if (error) {
        console.error("Error occurred: " + error);
        setIsProcessing(false);
      }
    }
  };

  // console.log(user)

  return (
    <Layout>
      <section className={styles.payment_section}>
        <div className={styles.checkout_header}>
          <div>Checkout ({numOfBasketItems}) items</div>
        </div>

        <div
          style={{
            padding: "0px 30px",
          }}
        >
          <div className={styles.delivery_address_container}>
            <div className={styles.delivery_address_label}>
              Delivery Address
            </div>
            <div>
              <div>{user?.email}</div>
              <div>123 React Lane</div>
              <div>Chicago, IL</div>
            </div>
          </div>
          <hr />
          <div className={styles.review_items_container}>
            <div>Review Items and Delivery</div>
            <div className={styles.items_to_be_purchased}>
              {basket?.map((item, index) => {
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
                  />
                );
              })}
            </div>
          </div>

          <hr />

          <div className={styles.payment_method_container}>
            <div className={styles.payment_method_label}>Payment Methods</div>
            <div className={styles.card_info_container}>
              <form action="" onSubmit={handleSubmit}>
                {error && (
                  <small
                    style={{
                      color: "red",
                    }}
                  >
                    {error}
                  </small>
                )}
                <CardElement onChange={handleChange} />
                <div className={styles.total_order_info_container}>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <div>Total Order |</div>
                    <div>
                      <ProductPriceFormat price={SubtotalPrice} />
                    </div>
                  </div>

                  <div className={styles.payment_button}>
                    <button type="submit">
                      {IsProcessing ? (
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <ClipLoader size={15} />
                          <div>Please wait ...</div>
                        </div>
                      ) : (
                        <>Pay Now</>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
