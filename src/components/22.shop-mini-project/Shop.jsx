import React, { useState, useEffect, useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import productContext from "./contexts/productContext";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Shop() {
  const [bgImage, setBgImage] = useState("");

  const contextData = useContext(productContext);

  const putingCard = (product) => {

    console.log(product)

    contextData.setModalTiTle("add to your basket is successfulled");
    let isProductInBasketBefore = contextData.userCart.some(
      (bagProduct) => bagProduct.title === product.title
    );

    if (!isProductInBasketBefore) {
      let newUserProduct = {
        id: product.id,
        title: product.title,
        image: product.image,
        count: product.count,
        unitPrice: product.price, // ذخیره قیمت واحد
        inUserBasketCount: 1,
        totalPrice: product.price, // محاسبه قیمت کل
      };

      contextData.setUserCart((prev) => [...prev, newUserProduct]);
    } else {
      let userCard = [...contextData.userCart];

      // wave 1

      // let NewUserCard = userCard.map(bagProduct => {
      //   if (bagProduct.title === product.title){
      //     bagProduct.count += 1
      //   }
      // })

      // contextData.setUserCart(NewUserCard)

      // wave 2

      // userCard.some(bagProduct => {
      //   if (bagProduct.title === product.title){
      //     bagProduct.count += 1
      //     return true
      //   }
      // })

      // contextData.setUserCart(userCard)

      // wave 3

      // در بخش else هنگام افزایش تعداد محصول
      userCard = contextData.userCart.map((bagProduct) => {
        if (bagProduct.title === product.title) {
          const newCount = bagProduct.inUserBasketCount + 1;
          const updatedCount =
            newCount > bagProduct.count ? bagProduct.count : newCount;

          return {
            ...bagProduct,
            inUserBasketCount: updatedCount,
            totalPrice: updatedCount * bagProduct.unitPrice,
          };
        }
        return bagProduct;
      });
      contextData.setUserCart(userCard);
      setTimeout(() => {
        contextData.setModalTiTle("");
      }, 3000);
    }
  };

  return (
    <Container className="mt1-5">
      {/* {contextData.allProducts.map((allProduct) => (
        <div key={allProduct.id}>
          <h3 className="tc tshl fwMedium ">{allProduct.title}</h3>

          <div className={`products-container `}>
            {allProduct.products &&
              allProduct.products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="card ptb-2 plr-2 bsfl">
                    <div className="col-12 tc" style={{ height: "12rem" }}>
                      <img
                        src={product.image || "/22/no-image.png"}
                        alt={product.title}
                        className="card-img-top w100 h100 of"
                        onClick={() => setBgImage(product.image)}
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
                        <div className="prices djspac mb07">
                          <span className="priceTiTle">product price : </span>
                          <span className="price">
                            {product.price ? `${product.price} $` : "free"}
                          </span>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="tnone b btn1"
                          onClick={() => putingCard(product)}
                        >
                          add to cart
                        </a>
                        <a
                          href="javascript:void(0)"
                          // onClick={}
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

          {bgImage && (
            <div
              className="bgImage_section z100 bgblack pf w100vw h100vh t0 l0 djac"
              onClick={() => setBgImage("")}
            >
              <div className="bgImage_container mc">
                <img src={bgImage} alt="" className="bgImage w100 h100 ofc" />
              </div>
            </div>
          )}
        </div>
      ))} */}
      {contextData.allProducts.map((allProduct) => (
        <Swiper key={allProduct.id}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
          <h3 className="tc tshl fwMedium ">{allProduct.title}</h3>

          <div className={`products-container `}>
            {allProduct.products &&
              allProduct.products.map((product) => (
                <SwiperSlide key={product.id} className="product-card">
                  <div className="card ptb-2 plr-2 bsfl">
                    <div className="col-12 tc" style={{ height: "12rem" }}>
                      <img
                        src={product.image || "/22/no-image.png"}
                        alt={product.title}
                        className="card-img-top w100 h100 of"
                        onClick={() => setBgImage(product.image)}
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
                        <div className="prices djspac mb07">
                          <span className="priceTiTle">product price : </span>
                          <span className="price">
                            {product.price ? `${product.price} $` : "free"}
                          </span>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="tnone b btn1"
                          onClick={() => putingCard(product)}
                        >
                          add to cart
                        </a>
                        <a
                          href="javascript:void(0)"
                          // onClick={}
                          className="bbl tnone b btn3 ptb-5 mt05 cblck hcblue"
                        >
                          more information
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>

          {bgImage && (
            <div
              className="bgImage_section z100 bgblack pf w100vw h100vh t0 l0 djac"
              onClick={() => setBgImage("")}
            >
              <div className="bgImage_container mc">
                <img src={bgImage} alt="" className="bgImage w100 h100 ofc" />
              </div>
            </div>
          )}
        </Swiper>
      ))}
    </Container>
  );
}
