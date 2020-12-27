import React from "react";

const Dropdown = ({ active, items, onClick, label }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {active ? active.name : label}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {items &&
          items.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  onClick(item);
                }}
                className="dropdown-item"
              >
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
