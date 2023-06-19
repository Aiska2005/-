import React from "react";
import Card from "../ui/Card/Card";
import imgs from "../../assets/salaty/Index";
const salaty = [
  {
    title: "Селедка под шубой ",
    img: imgs.Shuba,
    price: "160",
    desc: `селедка, лук, майонез, картофель, свекла, яйца`,
  },
  {
    title: "Мимоза",
    img: imgs.Mimoza,
    price: "160",
    desc: `скумбрия, лук, яйца, картофель, морковь, майонез`,
  },
  {
    title: "Оливье ",
    img: imgs.Olivie,
    price: "150",
    desc: `картофель, майонез, колбаса, яйца, горошек, 
	морковь, сол. огурцы
`,
  },
  {
    title: "Польский",
    img: imgs.Polski,
    price: "160",
    desc: `курица, сол. огурцы, грибы, яйца, картофель, 
	майонез
`,
  },
];

const Salat = () => {
  return (
    <div className="homeCard">
      <h3>Салаты</h3>
      <div className="homeItemCard">
        {salaty.map((sal, i) => (
          <Card {...sal} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Salat;
