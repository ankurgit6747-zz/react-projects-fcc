import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {/* <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItems("all")}>
        all
      </button> */}
      {categories.map((item, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterItems(item)}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
