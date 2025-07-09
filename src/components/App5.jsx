import React from "react";
import HigherOrderComponent from "./5.HOCs/HigherOrderComponent";

function App5({ isShow , toggleHandler }) {
  return (
    <div className="h100vh dfcjac g1">
      <button className="btn btn-primary" onClick={toggleHandler}>{isShow ? "-" : "+"}</button>
      {isShow && (
        <form onSubmit={(e) => e.preventDefault()} className="dfc g1">
          <input type="text" className="bnone bb-gy" />
          <button className="addTodo btn btn-success bggreen ffsansI fwMedium">
            add Todo
          </button>
        </form>
      )}
    </div>
  );
}

export default HigherOrderComponent(App5);
