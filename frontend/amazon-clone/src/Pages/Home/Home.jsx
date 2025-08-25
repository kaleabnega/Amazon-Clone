import React from "react";
import CarouselDisplay from "../../Components/CarouselDisplay/CarouselDisplay";
import Category from "../../Components/Category/Category";
import Products from "../../Components/Products/Products";
import Layout from "../../Components/Layout/Layout";

function Home() {
  return (
    <Layout>
      <CarouselDisplay />
      <Category />
      <Products />
    </Layout>
  );
}

export default Home;
