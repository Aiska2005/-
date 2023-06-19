import React from "react";
import imgs from "../../assets/dish/index";
import Card from "../ui/Card/Card";

const dish = [
  {
    title: "Курица в кляре ",
    img: imgs.ChikenKl,
    price: "180",
    desc: `Куриное филе, яйца, специи, мука`,
  },
  {
    title: "Курица в майонезе ",
    img: imgs.ChikenM,
    price: "190",
    desc: `Филе, лук, майонез, специи, петрушка`,
  },
  {
    title: "Мясо по – домашнему ",
    img: imgs.Meel,
    price: "200",
    desc: `Мясо, лук, болгарский перец, соевый соус
    `,
  },
  {
    title: "Рыба в кляре",
    img: imgs.Fish,
    price: "250",
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
