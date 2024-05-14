import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const List = ({ tasks, taskStatus, deleteTask }) => {
  return (
    <ListGroup
      variant="flush"
      style={{
        alignItems: "center",
        justijustifyContent: "space-between",
      }}
    >
      {tasks.map((task) => (
        <ListGroup.Item
          key={task.id}
          style={{
            display: "flex",
            alignItems: "center",
            justijustifyContent: "space-between",
          }}
        >
          <div
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              margin: "15px",
            }}
          >
            {task.title}
          </div>
          <Button
            variant={task.completed ? "outline-secondary" : "success"}
            onClick={() => taskStatus(task.id)}
            style={{ margin: "12px" }}
          >
            {task.completed ? "Undo" : "Complete"}
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteTask(task.id)}
            style={{ margin: "10px" }}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default List;
