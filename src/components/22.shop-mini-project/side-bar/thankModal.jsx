import React, { useContext, useEffect, useState } from "react";
import CloseSVG from "../SVGs/CloseSVG";
import productContext from "../contexts/productContext";

export default function Modal() {

  const contextData = useContext(productContext)
  
  return (
    <div className="djc">
      <div
        onClick={() => contextData.setShowAddModal(false)}
        className={`addModal ${
          contextData.showAddModal && "addModal_show"
        } bgblue djspac fdrr ptb-5 plr-7 br-2 bsbl g1 pf b1 tmedi`}
      >
        <CloseSVG />
        <p className="addModal_title cwhite fs-7 fwMedium">
          thank you for buying in my company
        </p>
      </div>
    </div>
  );
}
