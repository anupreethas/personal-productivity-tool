import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskColumns from "./Components/TaskColumns";
import Header from "./Components/Header";

const oldTasks = localStorage.getItem("tasks");
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Header />
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumns
          title="📌 To Do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumns
          title="🚧 In Progress"
          tasks={tasks}
          status="inprogress"
          handleDelete={handleDelete}
        />
        <TaskColumns
          title="✅ Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
