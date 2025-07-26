import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "../Header/css/header.module.css"

function LowerHeader() {
  return (
    <>
      <section className={style.lower_header_container}>
        <div className={style.list_container}>
          <ul>
            <li>
              <a href="#">
               
                <GiHamburgerMenu/>
                <span>All</span>
              </a>
            </li>
            <li>
              <a href="#">Today's Deals</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">Registry</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default LowerHeader;
