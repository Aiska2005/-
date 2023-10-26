import React from "react";
import CardList from "../../components/ui/CardList/CardList";
import Imgs from "../../assets/drinks";
import { Link } from "react-router-dom";

const drinks = [
  { title: "Coca-Cola", img: Imgs.cola, price: "90" },
  { title: "Fanta", img: Imgs.fanta, price: "90" },
  { title: "Pepsi", img: Imgs.pepsi, price: "90" },
  { title: "Sprite", img: Imgs.sprite, price: "90" },
  { title: "0.5", img: Imgs.little, price: "60" },

  { title: "Чай, Кофе", img: Imgs.chai, price: "15, 40" },
];
// kelemda men )))
const Drinks = () => {
  return (
    <>
      <h3 className="glav">
        <Link to="/">Главная</Link>
      </h3>
      <CardList type="contain" data={drinks} />
    </>
  );
};

export default Drinks;
