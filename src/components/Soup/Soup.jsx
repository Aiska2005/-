import React from "react";
import Card from "../ui/Card/Card";
import imgs from "../../assets/soup/index";
import "../../styles/Soup.css";

const soup = [
  {
    title: "Солянка",
    img: imgs.Solaynka,
    price: "200",
    desc: `Картошка, лук, морковь, соленые огурцы, мясо...`,
  },
  {
    title: "Борщ ",
    img: imgs.Borsh,
    price: "190",
    desc: `Картошка, лук, морковь, свёкла, капуста, томат, мясо`,
  },
  {
    title: "Фрикадельки  ",
    img: imgs.Frikadelka,
    price: "190",
    desc: `Картошка, лук, морковь, рис, мясо (фрикадельки)
    `,
  },
  {
    title: "Суп лапша",
    img: imgs.Chiken,
    price: "190",
    desc: `курица, лапша
    `,
  },
];

const Soup = () => {
  return (
    <div className="homeCard">
      <h3>Супы</h3>
      <div className="homeItemCard">
        {soup.map((soup, i) => (
          <Card {...soup} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Soup;
