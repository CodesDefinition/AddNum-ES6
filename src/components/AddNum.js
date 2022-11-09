import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../css/AddNum.module.css";
import { style } from "@mui/system";
import { useState } from "react";

function AddNum() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [sum, setsum] = useState(0);
  const add = () => setsum(num1 + num2);
  const clear = () => {
    setnum1(0);
    setnum2(0);
    setsum(0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.module}>
        <h1>This Module will add two numbers</h1>
        <TextField
          id="num1"
          label="Enter number 1"
          variant="standard"
          value={num1}
          onChange={(e) => setnum1(parseInt(e.target.value))}
        />
        <TextField
          id="num2"
          label="Enter number 2"
          variant="standard"
          value={num2}
          onChange={(e) => setnum2(parseInt(e.target.value))}
        />
        <Button variant="contained" onClick={add}>
          Add
        </Button>
        <Button variant="contained" onClick={clear}>
          Clear
        </Button>
        <p>The sum is : {sum}</p>
      </div>
    </div>
  );
}

export default AddNum;
