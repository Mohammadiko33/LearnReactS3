import React, { useState } from "react";
import Navbar from "./22.shop-mini-project/navbar/Navbar";
import Shop from "./22.shop-mini-project/Shop";
import "./22.shop-mini-project/shop.css";
import allProductsData from "./22.shop-mini-project/datas";
import Modal from "./22.shop-mini-project/modal-add-product/Modal";
import Basket from "./22.shop-mini-project/side-bar/Basket";
import productContext from "./22.shop-mini-project/contexts/productContext";



export default function App22() {
  const [allProducts, setAllProducts] = useState(allProductsData);
  const [userCart, setUserCart] = useState([]);
  // const [showAddModal, setShowAddModal] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [modalTiTle, setModalTiTle] = useState("");

  const removeFromCart = (productId) => {
    setUserCart(prev => prev.filter(item => item.id !== productId));
  }

  return (
    <productContext.Provider
      value={{
        allProducts,
        userCart,
        setUserCart,
////    showAddModal,
////    setShowAddModal,
        showBasket,
        setShowBasket,
        modalTiTle,
        setModalTiTle,
        removeFromCart,
      }}
    >
      <Navbar />
      <div className="mb6" />
      <Shop />
      <Modal />
      <Basket />
    </productContext.Provider>
  );
}
