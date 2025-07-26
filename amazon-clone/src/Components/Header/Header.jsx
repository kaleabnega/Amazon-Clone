import React from "react";
import style from "./css/header.module.css";
import us_flag from "../../assets/images/united-states-of-america-flag-png-large.png";
import amazon_logo from "../../assets/images/pngimg.com - amazon_PNG11.png";
import LowerHeader from "../LowerHeader/LowerHeader";

function Header() {
  return (
    <>
      <section className={style.header_container}>
        <div className={style.left_side_logo}>
          <div className={style.amazon_logo}>
            <img src={amazon_logo} alt="amazon logo" />
          </div>
          <div
            style={{
              display: "flex",
              padding: "5px 0px",
              marginRight: "15px",
            }}
          >
            <svg
              fill="grey"
              className={style.location_image}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>map-marker</title>
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            <div
              style={{
                fontSize: "12px",
              }}
            >
              <div>Delivering to</div>
              <div>Ethiopia</div>
            </div>
          </div>
        </div>

        <div className={style.search_bar_container}>
          <div>
            <select name="" id="" defaultValue="all">
              <option value="all">All</option>
            </select>
            <input type="text" placeholder="Search Product" />
          </div>
          <div className={style.search_button_container}>
            <button>
              <svg
                style={{
                  width: "30px",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>magnify</title>
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={style.language_switch_container}>
          <div className={style.usa_flag_container}>
            <img src={us_flag} alt="united-states-flag" />
          </div>

          <div>
            <select
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
              name=""
              id=""
              defaultValue="en"
            >
              <option value="en">EN</option>
            </select>
          </div>
        </div>

        <div
          className={style.right_side_links}
          style={{
            display: "flex",
            fontWeight: "bolder",
          }}
        >
          <div className={style.sign_in_container}>
            <a href="#">
              <div className={style.sign_in_label}>Sign In</div>
              <div>Account & Lists</div>
            </a>
          </div>
          <div>
            <a href="#">
              <div className={style.returns_label}>Returns</div>
              <div>& Orders</div>
            </a>
          </div>
        </div>

        <div className={style.cart_container}>
          <a href="">
            <svg
              style={{
                width: "30px",
                paddingTop: "10px",
              }}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>cart-outline</title>
              <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
            </svg>
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
