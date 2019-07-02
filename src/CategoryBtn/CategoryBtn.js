import React from "react";
import "./CategoryBtn.scss";

const CategoryBtn = ({ name, icon }) => {
  return (
    <button className="category-btn">
      <h3>{name}</h3>
      {icon}
    </button>
  );
};

export default CategoryBtn;
