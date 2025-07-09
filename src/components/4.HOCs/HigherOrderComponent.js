import React, { useState } from "react";

function HigherOrderComponent(DefualtComponent, courseTiTle, coursePrice) {
 function NewComponent() {
  const [title, setTiTle] = useState(courseTiTle)
  const [price, setPrice] = useState(coursePrice)

  const addPRice = () => setPrice(prevPrice => prevPrice * 2)
  const minusPRice = () => {
   if (price < 0.02){
    setPrice(1.5)
   }
   setPrice(prevPrice => prevPrice / 2)
  }

  return <DefualtComponent title={title} price={price} addPRice={addPRice} minusPRice={minusPRice} />
 }

 return NewComponent
}
export default HigherOrderComponent