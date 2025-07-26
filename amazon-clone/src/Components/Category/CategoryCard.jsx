import React from "react";
import styles from "./css/category.module.css"

function CategoryCard(props) {
  const { title, imgLink } = props;
  return (
    <>
      <div className={styles.category_container}>
        <a href="">
          <div>
            <h2>{title}</h2>
          </div>
          <span className={styles.category_img_container}>
            <img className={styles.category_img} src={imgLink} alt="" />
          </span>
          <p>Shop now</p>
        </a>
      </div>
    </>
  );
}

export default CategoryCard;
