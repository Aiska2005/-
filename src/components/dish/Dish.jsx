import React from "react";
import imgs from "../../assets/dish/index";
import Card from "../ui/Card/Card";

const dish = [
  {
    title: "Курица в кляре (с гарниром) ",
    img: imgs.ChikenKl,
    price: "220",
    desc: `Куриное филе, яйца, специи, мука`,
  },
  {
    title: "Курица в майонезе (с гарниром) ",
    img: imgs.ChikenM,
    price: "220",
    desc: `Филе, лук, майонез, специи, петрушка`,
  },
  {
    title: "Мясо по – домашнему  (с гарниром) ",
    img: imgs.Meel,
    price: "240",
    desc: `Мясо, лук, болгарский перец, соевый соус
    `,
  },
  {
    title: "Рыба в кляре(с гарниром)",
    img: imgs.Fish,
    price: "300",
    desc: `Рыба( мор.окунь), кляр
    `,
  },
];

const Dish = () => {
  return (
    <div className="homeCard">
      <h3>Горячие Блюда</h3>
      <div className="homeItemCard">
        {dish.map((dish, i) => (
          <Card {...dish} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dish;
