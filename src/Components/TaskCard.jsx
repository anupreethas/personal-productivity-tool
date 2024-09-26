import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";

const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <div className="task_Card">
      <p className="task_Card_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {
            tags.map((tag, index) => <Tag key={index} tagName={tag} selected = {true} />)
          }
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)} >
          <button className="tasks_delete" >❌</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
