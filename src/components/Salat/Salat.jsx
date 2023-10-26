import React from "react";
import Card from "../ui/Card/Card";
import imgs from "../../assets/salaty/Index";
const salaty = [
  {
    title: "Селедка под шубой (350г) ",
    img: imgs.Shuba,
    price: "200",
    desc: `селедка, лук, майонез, картофель, свекла, яйца`,
  },
  {
    title: "Мимоза(350г)",
    img: imgs.Mimoza,
    price: "190",
    desc: `скумбрия, лук, яйца, картофель, морковь, майонез`,
  },
  {
    title: "Оливье(350г) ",
    img: imgs.Olivie,
    price: "200",
    desc: `картофель, майонез, колбаса, яйца, горошек, 
	морковь, сол. огурцы
`,
  },
  {
    title: "Польский (350г)",
    img: imgs.Polski,
    price: "210",
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
