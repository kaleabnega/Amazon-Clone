import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/Pages/Home/Home";
import SignUp from "./src/Pages/Auth/SignUp";
import Payment from "./src/Pages/Payment/Payment";
import Orders from "./src/Pages/Orders/Orders";
import Cart from "./src/Pages/Cart/Cart";
import CategoryItems from "./src/Pages/CategoryItems/CategoryItems";
import ProductDetail from "./src/Pages/ProductDetail/ProductDetail";
import {CheckoutProvider, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RyY6TIqXq7PsHFAgfiB1ps3LXWtZ4A3rfHlkbsnyvvXxbyUPBa7gdSDuJuoInjgOkauLHKncLgmh4As36O7EpOY00JnWc25pL"
);

function ComponentRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<SignUp />}></Route>
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        ></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:productID" element={<ProductDetail />}></Route>
        <Route
          path="/category/:categoryType"
          element={<CategoryItems />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default ComponentRoutes;
