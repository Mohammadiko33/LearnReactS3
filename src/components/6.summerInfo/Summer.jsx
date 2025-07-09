import React, { useState } from "react";
import "./app.css";
import withToggle from "./HigherOrderComponent";

 function Summer({title , answer , isOpen , toggle}) {

  return (
    <div className="infoBox bgwhite bsfl" onClick={toggle}>
      <div className="info djspac">
        <span className="info_title">{title}</span>
        <button className="showInfo br10">{isOpen ? "-" : "+"}</button>
      </div>
        <p className={`infoSummer ${isOpen ? "show" : "hide"}`}>
        {answer}
      </p>
    </div> 
  );
}

export default withToggle(Summer)