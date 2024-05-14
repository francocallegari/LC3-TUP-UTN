import { useState } from "react";
import "./App.css";
import List from "./components/list/List";
import NewTask from "./components/newTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hacer la tarea", completed: false },
    { id: 2, title: "Limpiar la casa", completed: true },
    { id: 3, title: "Pasear al perro", completed: false },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const taskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>My to-do list</h1>
      <br></br>
      <NewTask addTask={addTask} tasks={tasks} />
      <br></br>
      <List tasks={tasks} taskStatus={taskStatus} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
