import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const NewTask = ({ addTask, tasks }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleInputChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskTitle) {
      const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: newTaskTitle,
        completed: false,
      };
      addTask(newTask);
      setNewTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={newTaskTitle}
        onChange={handleInputChange}
      />
      <Button variant="primary" type="submit" style={{ margin: "10px" }}>
        Add Task
      </Button>
    </form>
  );
};

export default NewTask;
