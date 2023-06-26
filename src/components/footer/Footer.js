import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img className={styles.logo} src={logo.src} alt="Trips Around" />
      </div>

      <ul>
        <li>
          <a href="https://codeacademy.lt/kontaktai/">Contacts</a>
        </li>
        <li>
          <a href="https://codeacademy.lt/">About us</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

