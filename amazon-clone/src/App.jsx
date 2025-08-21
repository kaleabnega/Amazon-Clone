import { useContext, useEffect } from "react";
import ComponentRoutes from "../ComponentRoutes";
import "./App.css";
import CarouselDisplay from "./Components/CarouselDisplay/CarouselDisplay";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authenticatedUser) => {
      if (authenticatedUser) {
        dispatch({
          type: Type.SET_USER,
          user: authenticatedUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      {/* <Header />
      <CarouselDisplay />
      <Category />
      <Products/> */}

      <ComponentRoutes />
    </>
  );
}

export default App;
