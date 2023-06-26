import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.logo} src={logo.src} alt="Logo" />
      </div>

      <ul>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/insertNewTrip">Insert a new trip</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
