import React from "react";
import { useState } from "react";
import styles from "../css/Temperature.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Temperature() {
  const [num, setnum] = useState(0);
  return (
    <div
      className={
        styles.container +
        " " +
        (num <= 0
          ? styles.cool
          : num < 10
          ? styles.cooler
          : num < 23
          ? styles.neutral
          : styles.hot)
      }
    >
      <div className={styles.form}>
        <Button
          variant="contained"
          id={styles.btn}
          onClick={() => setnum(num - 1)}
        >
          Decrement
        </Button>
        <p id={styles.number}>{num}</p>
        <Button
          variant="contained"
          id={styles.btn}
          onClick={() => setnum(num + 1)}
        >
          Increment
        </Button>
      </div>
    </div>
  );
}
export default Temperature;
