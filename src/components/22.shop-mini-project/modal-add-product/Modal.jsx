import React, { useContext, useEffect, useState } from "react";
import CloseSVG from "../SVGs/CloseSVG";
import productContext from "../contexts/productContext";

export default function Modal() {

  const contextData = useContext(productContext)
  
// در کامپوننت Modal
useEffect(() => {
  let timer;
  if (contextData.modalTiTle) {
    timer = setTimeout(() => {
      contextData.setModalTiTle("");
    }, 3000);
  }
  return () => clearTimeout(timer);
}, [contextData.modalTiTle]);

  return (
    <div className="djc">
      <div
        onClick={() => contextData.setModalTiTle("")}
        className={`addModal ${
          contextData.modalTiTle && "addModal_show"
        } bgblue djspac fdrr ptb-5 plr-7 br-2 bsbl g1 pf b1 tmedi`}
      >
        <CloseSVG />
        <p className="addModal_title cwhite fs-7 fwMedium">
          {contextData.modalTiTle}
        </p>
      </div>
    </div>
  );
}
