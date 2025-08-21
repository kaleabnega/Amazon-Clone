import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./css/signup.module.css";
import amazon_logo_black from "../../assets/images/amazon-logo-black.png";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState({ signin: false, signup: false });

  const [{ user }, dispatch] = useContext(DataContext);

  // console.log(user);

  const navigate = useNavigate();

  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name == "signin") {
      setIsLoading({ ...IsLoading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setIsLoading({ ...IsLoading, signin: false });
          navigate("/")
        })
        .catch((err) => {
          // console.error("Error occurred: " + err);
          setError(err.message);
          setIsLoading({ ...IsLoading, signin: false });
        });
    } else {
      setIsLoading({ ...IsLoading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setIsLoading({ ...IsLoading, signup: false });
          navigate("/");
        })
        .catch((err) => {
          // console.error("Error occurred: " + err);
          setError(err.message);
          setIsLoading({ ...IsLoading, signup: false });
        });
    }
  };

  return (
    <section className={styles.auth_section}>
      <div className={styles.auth_container}>
        <Link to="/">
          <div className={styles.amazon_logo}>
            <img
              style={{
                width: "150px",
              }}
              src={amazon_logo_black}
              alt="amazon-logo-black"
            />
          </div>
        </Link>

        <div className={styles.auth_details_container}>
          <div className={styles.sign_in_heading}>Sign-in</div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <div className={styles.email_label_container}>
              <label htmlFor="email">Email</label>
            </div>
            <input
              value={email}
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className={styles.password_label_container}>
              <label htmlFor="password">Password</label>
            </div>
            <input
              value={password}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.sign_in_button_container}>
            <button type="submit" name="signin" onClick={authHandler}>
              {IsLoading.signin ? <ClipLoader size={15} /> : <>Sign in</>}
            </button>
          </div>

          <div className={styles.conditions_of_use_container}>
            By signing-in, you agree to the AMAZON FAKE CLONE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice
          </div>
          <div className={styles.create_account_button_container}>
            <button type="submit" name="signup" onClick={authHandler}>
              {IsLoading.signup ? (
                <ClipLoader size={15} />
              ) : (
                <>Create your Amazon account</>
              )}
            </button>
          </div>

          {error && (
            <div
              style={{
                color: "red",
                paddingTop: "10px",
                width: "330px",
              }}
            >
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignUp;
