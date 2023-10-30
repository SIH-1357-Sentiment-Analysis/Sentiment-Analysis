import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home(props) {
  return (
    <div>
      <div className={styles.header}>
          <h1>EMO - NEXA</h1>
        </div>
    <div className={styles.box}>
    
      <div className={styles.innerbox} >
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div></div>
  );
}

export default Home;