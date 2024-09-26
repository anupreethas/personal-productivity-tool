import React from "react";
import "./Tag.css";

const Tag = (props) => {
  const { tagName, selectTag, selected } = props;

  const tagStyle = {
    Urgent: {backgroundColor: "#ff6347"},
    Important: {backgroundColor: "#FFA500"},
    Extras: {backgroundColor: "#90EE90"},
    default: {backgroundColor: "#f9f9f9"},
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => {
        selectTag(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default Tag;
