import React, { useContext } from "react";
import styles from "./css/products.module.css";
import Rating from "@mui/material/Rating";
import ProductPriceFormat from "./ProductPriceFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard(props) {
  const {
    productID,
    productImage,
    productTitle,
    productDescription,
    productPrice,
    productRating,
    productRatingCount,
    isFlex,
    renderDescription,
    renderAddToCartButton,
  } = props;

  const [state, dispatch] = useContext(DataContext);

  const basketItem = props;
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: basketItem,
    });
  };

  return (
    <section
      className={
        isFlex
          ? styles.product_card_container_flex
          : styles.product_card_container
      }
    >
      <div>
        <Link to={`/products/${productID}`}>
          <div className={styles.product_image_container}>
            <img className={styles.product_image} src={productImage} alt="" />
          </div>
        </Link>

        <nav className={styles.product_details_container}>
          <div className={styles.product_title_container}>{productTitle}</div>
          {renderDescription && (
            <div className={styles.product_description_container}>
              {productDescription}
            </div>
          )}
          <div className={styles.rating_container}>
            <span>
              <Rating precision={0.1} value={productRating} />
            </span>
            <span>{productRatingCount}</span>
          </div>

          <div className={styles.price_container}>
            $<ProductPriceFormat price={productPrice} />
          </div>
        </nav>

        {renderAddToCartButton && (
          <div className={styles.add_to_cart_button} onClick={addToCart}>
            Add to Cart
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductCard;
