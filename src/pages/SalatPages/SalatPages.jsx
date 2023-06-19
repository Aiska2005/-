import React from "react";
import CardList from "../../components/ui/CardList/CardList";
import Imgs from "../../assets/salaty/Index";

import { Link } from "react-router-dom";
const salatsData = [
  {
    title: "Селедка под шубой ",
    img: Imgs.Shuba,
    price: "160",
    desc: "селедка, лук, майонез, картофель, свекла, яйца",
    portion: "от 5 порции",
  },
  {
    title: "Мимоза",
    img: Imgs.Mimoza,
    price: "160",
    desc: "скумбрия, лук, яйца, картофель, морковь, майонез",
    portion: "от 5 порции",
  },
  {
    title: "Оливье",
    img: Imgs.Olivie,
    price: "150",
    desc: `картофель, майонез, колбаса, яйца, горошек, 
    морковь, сол. огурцы
  `,
  },
  {
    title: "Польский",
    img: Imgs.Polski,
    price: "160",
    desc: "курица, сол.огурцы, грибы, яйца, картофель, майонез",
  },
  {
    title: "Греческий",
    img: Imgs.Grecheski,
    price: "180",
    desc: "огурцы, помидоры, маслины, сыр, масло, орегано",
    portion: "от 5 порции",
  },
  {
    title: "Гнездо глухаря",
    img: Imgs.Gnezdo,
    price: "190",
    desc: "коп.окороч., яйца, сол. огурцы, пай, грибы, майонез",
  },
  {
    title: "Турецкий",
    img: Imgs.ture,
    price: "170",
    desc: "яйцо, листья салата, курица, огурцы, бол.перец, масло",
  },
  {
    title: "Пекинский",
    img: Imgs.Pekinski,
    price: "160",
    desc: `курица, пекинская капуста, листья салата, бол.перец, масло, лимон`,
  },
  {
    title: "Свежий салат",
    img: Imgs.Svejii,
    price: "150",
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
