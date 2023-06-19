import React from "react";
import { Link } from "react-router-dom";
import CardList from "../../components/ui/CardList/CardList";
import Imgs from "../../assets/soup/index";

const soup = [
  {
    title: "Солянка",
    img: Imgs.Solaynka,
    price: "170",
    desc: `картошка, лук, морковь, соленые огурцы, мясо, копчёная колбаса(халал), томат`,
  },

  {
    title: "Борщ",
    img: Imgs.Borsh,
    price: "160",
    desc: `Картошка, лук, морковь, свёкла, капуста, томат, мясо`,
  },
  {
    title: "Фрикадельки",
    img: Imgs.Frikadelka,
    price: "160",
    desc: `Картошка, лук, морковь, рис, мясо (фрикадельки)`,
  },
  {
    title: "Суп лапша",
    img: Imgs.Chiken,
    price: "160",
    desc: `Курица, лапша`,
  },
  {
    title: "Грибной",
    img: Imgs.Gribnoi,
    price: "170",
    desc: `Картошка, лук, морковь, грибы, мясо, яйца`,
  },
  {
    title: "Рассольник",
    img: Imgs.Rasolnik,
    price: "160",
    desc: `Картошка, лук, морковь, перловка, соленые огурцы, мясо, томат`,
    portion: "от 5 порции",
  },
  {
    title: "Чечевичный с овощами",
    img: Imgs.checi,
    price: "170",
    desc: `Картошка, лук, морковь, цветная капуста, брокколи, сельдерей, болгарский перец, мясо, чечевица`,
    portion: "от 5 порции",
  },

  {
    title: "Гороховый с копчёным окорочком",
    img: Imgs.Goroh,
    price: "160",
    desc: `Копчёные окорочка, горох, картошкой, лук, морковь, мясо`,
    portion: "от 5 порции",
  },
];

const Soup = () => {
  return (
    <>
      <h3 className="glav">
        <Link to="/">Главная</Link>
      </h3>
      <div>
        <h3 className="textCenter">Супы</h3>

        <CardList data={soup} />
      </div>
    </>
  );
};

export default Soup;
