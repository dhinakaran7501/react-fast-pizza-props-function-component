import React from "react";
import "./header.css";

const Header = ({ shopName, menuTitle }) => {
  return (
    <div className="header">
      <div className="title">
        <p>{shopName}</p>
      </div>
      <div className="menu-title">
        <h4>{menuTitle}</h4>
      </div>
      <div className="menu-content">
        <p>
          Authentic Italian Cuisine. 6 creative dishes to choose from. All from
          our stone oven, organic and finger licking delicious
        </p>
      </div>
    </div>
  );
};

export default Header;
