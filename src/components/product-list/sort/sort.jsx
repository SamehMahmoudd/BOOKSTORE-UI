import React from "react";

const Sort = () => {
  return (
    <>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected hidden>Sort By</option>
        <option value="1">Price,high to low</option>
        <option value="2">Price,low to high</option>
        <option value="3">Name,high to low</option>
        <option value="4">Name,low to high</option>
      </select>

    </>
  );
};

export default Sort;
