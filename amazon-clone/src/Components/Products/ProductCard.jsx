import React from "react";
import styles from "./css/products.module.css";
import Rating from "@mui/material/Rating";
import ProductPriceFormat from "./ProductPriceFormat";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const {
    productID,
    productImage,
    productTitle,
    productPrice,
    productRating,
    productRatingCount,
  } = props;
  return (
    <section>
      <div>
        <Link to={`/products/${productID}`}>
          <div className={styles.product_image_container}>
            <img className={styles.product_image} src={productImage} alt="" />
          </div>
        </Link>

        <div className={styles.product_details_container}>
          <div className={styles.product_title_container}>{productTitle}</div>
          <div className={styles.rating_container}>
            <span>
              <Rating precision={0.1} value={productRating} />
            </span>
            <span>{productRatingCount}</span>
          </div>

          <div className={styles.price_container}>
            $<ProductPriceFormat price={productPrice} />
          </div>
        </div>

        <div className={styles.add_to_cart_button}>Add to Cart</div>
      </div>
    </section>
  );
}

export default ProductCard;
