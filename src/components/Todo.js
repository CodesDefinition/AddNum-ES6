import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../css/Todo.module.css";
import { useState } from "react";

function Todo() {
  const [tasks, settasks] = useState([]);
  const [itmTask, setitmTask] = useState("");
  const addTask = () => {
    settasks([itmTask, ...tasks]);
  };
  return (
    <div className={styles.container}>
      <h1>This the Todo List Module</h1>
      <div className={styles.module}>
        <TextField
          id="outlined-basic"
          label="Add a task here ..."
          variant="outlined"
          value={itmTask}
          onChange={(e) => setitmTask(e.target.value)}
        />
        <Button variant="outlined" onClick={addTask}>
          Add task
        </Button>
      </div>
      {tasks.map((task) => (
        <div className={styles.list}>{task}</div>
      ))}
    </div>
  );
}

export default Todo;
