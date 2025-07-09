import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

function JavaScriptsCourse({ title, price, addPRice, minusPRice }) {
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

export default HigherOrderComponent(JavaScriptsCourse , "Java Scripts full course 70h" , 99.99)