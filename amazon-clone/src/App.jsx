import "./App.css";
import CarouselDisplay from "./Components/CarouselDisplay/CarouselDisplay";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <CarouselDisplay />
      <Category />
      <Products/>
    </>
  );
}

export default App;
