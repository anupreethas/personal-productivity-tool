import React from "react";
import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTaskData((previousState) => {
      return { ...previousState, [name]: value };
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if task is empty before adding it to the list
    if (taskData.task.trim() !== "") {
      setTasks((previousState) => [...previousState, taskData]);
      setTaskData({
        task: "",
        status: "todo",
        tags: [],
      });
    } else {
      // Add CSS class to the alert message element
      const alertElement = document.getElementById("alert-message");
      alertElement.classList.add("alert-show");
      setTimeout(() => {
        alertElement.classList.remove("alert-show");
      }, 3000); // Remove class after 3 seconds
    }
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTask = taskData.tags.filter((item) => item !== tag);
      setTaskData((previousState) => {
        return { ...previousState, tags: filterTask };
      });
    } else {
      setTaskData((previousState) => {
        return { ...previousState, tags: [...previousState.tags, tag] };
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
  }

  return (
    <>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="task_input"
            placeholder="What do you need to do?"
            onChange={handleChange}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag tagName="Urgent" selectTag={selectTag} selected ={checkTag("Urgent")}/>
              <Tag tagName="Important" selectTag={selectTag} selected ={checkTag("Important")} />
              <Tag tagName="Extras" selectTag={selectTag} selected ={checkTag("Extras")} />
            </div>
            <div>
              <select
                className="task_status"
                name="status"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
          {/* Added element for alert message */}
          <div id="alert-message" className="alert-message">
            Oops! Looks like you forgot to add your task! 🙈
          </div>
        </form>
      </header>
    </>
  );
};

export default TaskForm;
