import React, { useEffect, useState } from "react";
import "./app.css";

export default function Food(props) {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    // وقتی bgImage تغییر می‌کند، کلاس bgBlack را به body اضافه/حذف کن
    if (bgImage) {
      document.body.classList.add("bgBlack");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("bgBlack");
      document.body.style.overflow = "";
    }

    // تمیزکاری هنگام آنمونت
    return () => {
      document.body.classList.remove("bgBlack");
      document.body.style.overflow = "";
    };
  }, [bgImage]);

  let { title, price, image, caption } = props;

  return (
    <div className="food df g1 mb2">
      <div className="food_left">
        <img
          src={image || "/12/noImage.png"}
          alt={title}
          className="food_left__image of"
          onClick={() => setBgImage(image || "")}
        />
        {bgImage && (
          <div
            className="bgImage_section bgblack pf w100vw h100vh t0 l0 djac"
            onClick={() => setBgImage("")}
          >
            <div className="bgImage_container mc">
              <img src={bgImage} alt="" className="bgImage w100 h100 ofc" />
            </div>
          </div>
        )}
      </div>
      <div className="food_right w100">
        <div className="food_header djsb">
          <h3 className="food_right__title fs1-2 fwMedium">{title}</h3>
          <h3 className="food_right__price fs1-2">
            {price && "$"}
            {price || " Free"}
          </h3>
        </div>
        <div className="captionContainer">
          <p className="caprion fwMedium">{caption}</p>
        </div>
      </div>
    </div>
  );
}
