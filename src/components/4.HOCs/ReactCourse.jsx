import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

function ReactCourse({ title, price, addPRice, minusPRice }) {
  return (
    <>
      <h3>
        course name : {title} | course price : {price.toLocaleString()} $
      </h3>
      <button className="mr2" onClick={addPRice}>
        incress Price
      </button>
      <button onClick={minusPRice}>unincress Price</button>
    </>
  );
}

export default HigherOrderComponent(ReactCourse, "React full course 90h", 150);
