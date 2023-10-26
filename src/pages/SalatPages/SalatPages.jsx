import React from "react";
import CardList from "../../components/ui/CardList/CardList";
import Imgs from "../../assets/salaty/Index";

import { Link } from "react-router-dom";
const salatsData = [
  {
    title: "Селедка под шубой (350г) ",
    img: Imgs.Shuba,
    price: "200",
    desc: "селедка, лук, майонез, картофель, свекла, яйца",
    portion: "от 5 порции",
  },
  {
    title: "Мимоза (350г)",
    img: Imgs.Mimoza,
    price: "190",
    desc: "скумбрия, лук, яйца, картофель, морковь, майонез",
    portion: "от 5 порции",
  },
  {
    title: "Оливье (350г)",
    img: Imgs.Olivie,
    price: "200",
    desc: `картофель, майонез, колбаса, яйца, горошек, 
    морковь, сол. огурцы
  `,
  },
  {
    title: "Польский (350г)",
    img: Imgs.Polski,
    price: "210",
    desc: "курица, сол.огурцы, грибы, яйца, картофель, майонез",
  },
  {
    title: "Греческий (350г)",
    img: Imgs.Grecheski,
    price: "250",
    desc: "огурцы, помидоры, маслины, сыр, масло, орегано",
    portion: "от 5 порции",
  },
  {
    title: "Гнездо глухаря (300г)",
    img: Imgs.Gnezdo,
    price: "240",
    desc: "коп.окороч., яйца, сол. огурцы, пай, грибы, майонез",
  },
  {
    title: "Турецкий (300г)",
    img: Imgs.ture,
    price: "210",
    desc: "яйцо, листья салата, курица, огурцы, бол.перец, масло",
  },
  {
    title: "Пекинский (300г)",
    img: Imgs.Pekinski,
    price: "200",
    desc: `курица, пекинская капуста, листья салата, бол.перец, масло, лимон`,
  },
  {
    title: "Свежий салат (300г)",
    img: Imgs.Svejii,
    price: "180",
    desc: "огурцы, помидоры, масло",
  },
];

const SalatPages = () => {
  return (
    <>
      <h3 className="glav">
        <Link to="/">Главная</Link>
      </h3>
      <div>
        <h3 className="textCenter">Салаты</h3>
        <CardList data={salatsData} />
      </div>
    </>
  );
};

export default SalatPages;
