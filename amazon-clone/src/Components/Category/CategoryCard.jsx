import React from "react";
import styles from "./css/category.module.css"
import { Link } from "react-router-dom";


function CategoryCard(props) {
  const { title, name, imgLink } = props;
  return (
    <>
      <div className={styles.category_container}>
        <Link to={`/category/${name}`}>
          <div>
            <h2>{title}</h2>
          </div>
          <span className={styles.category_img_container}>
            <img className={styles.category_img} src={imgLink} alt="" />
          </span>
          <p>Shop now</p>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
