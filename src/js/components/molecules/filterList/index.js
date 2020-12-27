import React, { useState, useEffect } from "react";
import Dropdown from "../../atoms/dropdown";

const FilterList = ({ filters, productTypes, onClear, onFilterChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (filters && filters.search !== value) {
      setValue(filters.search || "");
    }
  }, [filters, value]);

  const onChange = (event) => {
    setValue(event.target.value);

    onFilterChange({
      key: "search",
      value: event.target.value
    });
  };

  return (
    <div className="filter-list">
      <Dropdown
        items={productTypes}
        active={filters.type}
        onClick={(data) => {
          onFilterChange({
            key: "type",
            value: data
          });
        }}
        label="Select Product Type"
      />
      <div className="filter-list__search">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
      </div>

      <button
        type="button"
        className="clear-button btn btn-primary"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterList;
