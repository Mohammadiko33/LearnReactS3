import React, { useContext, useState } from "react";
import Close from "../SVGs/CloseSVG";
import Basket3 from "../SVGs/Basket3SVG";
import productContext from "../contexts/productContext";

export default function Basket() {
  const contextData = useContext(productContext);

  return (
    <aside
      className={`bag-sidebar bgblck cwhite pf t0 z100 h100 p1 ova bsdh ${
        contextData.showBasket && "bag-sidebar_active"
      } `}
    >
      <div className="bag-title fs-7 fwMedium mb2">
        <div
          className="dac fdrr g-5"
          onClick={() => contextData.setShowBasket(false)}
        >
          <Close />
          <span>Bag</span>
        </div>
        <div className="">
          <Basket3 />
        </div>
        <div className="w100 mc">
          <button
            className="b btn5 hop7 pf pulse basketProducts_finishBTN z100"
            // در کامپوننت Basket
            onClick={() => {
              if (contextData.userCart.length > 0) {
                contextData.setModalTiTle(
                  "thank you for buying from my company"
                );
                setTimeout(() => {
                  contextData.setModalTiTle("");
                }, 3000);
              }
              contextData.setUserCart([]);
            }}
          >
            finish buying
          </button>
        </div>
      </div>
      <div className="basketProducts">
        {contextData.userCart.map((product) => (
          <div className="basketProducts-card" key={product.id}>
            <div className="card ptb-2 plr-2 bsfl mb1-5">
              <div className="col-12 tc" style={{ height: "14rem" }}>
                <img
                  src={product.image || "/22/no-image.png"}
                  alt={product.title}
                  className="card-img-top w100 h100 of"
                />
              </div>
              <div className="card-body tc ptb-7 plr-7">
                <p className="card-text fwMedium mb05">{product.title}</p>
                <div className="counts djspac mb05">
                  <span className="priceTiTle">product count : </span>
                  <span className="count">
                    {product.count < 1 ? "not available" : product.count}
                  </span>
                </div>
                <div className="product_actions dfc">
                  <div className="prices djspac mb05">
                    <span className="priceTiTle">in basket count : </span>
                    <span className="price">{product.inUserBasketCount}</span>
                  </div>
                  <div className="prices djspac mb07">
                    <span className="priceTiTle">total price : </span>
                    <span className="price">
                      {product.totalPrice
                        ? `${product.totalPrice.toFixed(2)} $`
                        : "free"}
                    </span>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="tnone b btn1"
                    onClick={() => contextData.removeFromCart(product.id)}
                  >
                    remove from basket
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="bbl tnone b btn3 ptb-5 mt05 cblck hcblue"
                  >
                    more information
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
