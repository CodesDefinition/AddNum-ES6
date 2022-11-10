import React from "react";
import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div id={styles.navbar}>
        <img src="" alt="Insert Logo Here" />
        <ul id={styles.navlist}>
          <li className={styles.navlist}>
            <Link to="/" className={styles.navitem}>
              Home
            </Link>
          </li>
          <li className={styles.navlist}>
            <Link to="/AddNum" className={styles.navitem}>
              Add Module
            </Link>
          </li>
          <li className={styles.navlist}>
            <Link to="/Todo" className={styles.navitem}>
              Todo Module
            </Link>
          </li>
          <li className={styles.navlist}>
            <Link to="/Temperature" className={styles.navitem}>
              Temperature Module
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
