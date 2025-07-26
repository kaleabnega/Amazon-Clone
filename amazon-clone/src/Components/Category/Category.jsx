import React from "react";
import { categoryInfo } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import styles from "./css/category.module.css";

function Category() {
  return (
    <>
      <section className={styles.categories_container}>
        {categoryInfo.map((category, index) => {
          return (
            <CategoryCard
              key={index}
              title={category.title}
              imgLink={category.imgLink}
            />
          );
        })}
      </section>
    </>
  );
}

export default Category;
