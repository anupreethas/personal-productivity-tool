import React from "react";
import favicon from "../assets/todo_favicon3.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="websiteLogo" src={favicon} alt="favicon" />
      <h1 className="WebsiteTitle">Todoist</h1>
    </div>
  );
};

export default Header;
