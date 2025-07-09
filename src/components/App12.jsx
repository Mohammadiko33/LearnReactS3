import React, { useCallback, useEffect, useState } from "react";
import menu from "./12.coffeShop(MiniProject)/data";
import Food from "./12.coffeShop(MiniProject)/Food";
import "./12.coffeShop(MiniProject)/app.css";
import { Container } from "react-bootstrap";

export default function App12() {
  const [allFood, setAllFood] = useState(menu);
  const [categoryFood, setCategoryFood] = useState(menu);
  const [activeCategory, setActiveCategory] = useState("all");

  // استخراج دسته‌بندی‌ها از منو
  // const headerCategorys = [
  //   { id: 0, name: "all" },
  //   ...Array.from(
  //     new Set(menu.map((item) => item.category))
  //   ).map((category, index) => ({
  //     id: index + 1,
  //     name: category,
  //   })),
  // ];

  const headerCategorys = [
    "all" , ...new Set(menu.map(item => item.category))
  ]


  const putInClassActivate = useCallback(
    (name) => {
      setActiveCategory(name);
      setCategoryFood(
        name === "all"
          ? allFood
          : allFood.filter((food) => food.category === name)
      );
    },
    [allFood]
  );

  return (
    <Container>
      <header className="">
        <h1 className="header tc mt4">our menu</h1>
        <div className="header_line mc tmedi" />
      </header>

      <ul className="menu djac g-5 mt1 mb3">
        {headerCategorys.map((category) => (
          <li
            className={`menu_Item fwMedium cp lnone ${
              activeCategory === category ? "activate" : ""
            }`}
            key={category}
            onClick={() => putInClassActivate(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <main>
        {categoryFood.map((food) => (
          <Food {...food} key={food.id} />
        ))}
      </main>
    </Container>
  );
}
