import React from "react";
import CardList from "../../components/ui/CardList/CardList";
import { Link } from "react-router-dom";
import Imgs from "../../assets/dish";

const dish = [
  {
    title: "Курица в кляре ",
    img: Imgs.ChikenKl,
    price: "180",
    desc: "Куриное филе, яйца, специи, мука",
  },
  {
    title: "Курица с овощами ",
    img: Imgs.ovosh,
    price: "190",
    desc: `Филе, лук, морковь, болгарский перец, капуста, цветная капуста, чеснок, огурцы, помидоры`,
  },
  {
    title: "Куриные котлеты",
    img: Imgs.kotlet,
    price: "180",
    desc: "Филе, лук, картошка, яйца, сыр",
  },
  {
    title: "Курица в кунжуте",
    img: Imgs.chikenKun,
    price: "190",
    desc: "Филе, горчица, специи, сухари, кунжут белый, яйца",
  },
  {
    title: "Курица в сырной корочке ",
    img: Imgs.korochka,
    price: "190",
    desc: "Филе, сыр, яйца, специи, мука",
  },
  {
    title: "Курица в майонезном соусе",
    img: Imgs.ChikenM,
    price: "180",
    desc: " Филе, лук, майонез, специи, петрушка",
  },

  {
    title: "Курица по-княжески",
    img: Imgs.chikenKn,
    price: "190",
    desc: `Филе(отбивная), специи, сыр, шампиньоны, помидоры, майонез, лук`,
  },

  {
    title: "Голени запечённые в духовке ",
    img: Imgs.golen,
    price: "190",
    desc: "Голени, специи, майонез",
    portion: "от 5 порции",
  },
  {
    title: "курица в кисло-сладком соусе ",
    img: Imgs.kisloSl,
    price: "180",
    desc: "Филе, чеснок, крахмал, томатный соус, специи",
  },

  {
    title: "фрикасе",
    img: Imgs.frikase,
    price: "190",
    desc: "Филе, грибы, лук, сметана",
  },
  {
    title: "Куурдак",
    img: Imgs.kuurdak,
    price: "220",
    desc: "Картошка, филе, лук, специи",
  },
];
//   говядина

const meels = [
  {
    title: "Мясо по – домашнему",
    img: Imgs.Meel,
    price: "200",
    desc: "Мясо, лук, болгарский перец, соевый соус",
  },
  {
    title: "Бризоль	классическая ",
    img: Imgs.brizol,
    price: "190",
    desc: "Мясо, лук, мука, огурцы, помидоры, майонез, яйца",
  },
  {
    title: "Бризоль с грибами",
    img: Imgs.brGrib,
    price: "220",
    desc: "Мясо, лук, грибы, майонез, мука, яйца",
  },
  {
    title: "Говядина с овощами",
    img: Imgs.govOvosh,
    price: "200",
    desc: `Мясо, лук, морковь, болгарский перец, чеснок, капуста, цветная капуста, огурцы, помидоры`,
  },
  {
    title: "Бифштекс",
    img: Imgs.bishf,
    price: "180",
    desc: "Мясо, лук, картошка, яйца",
  },
  {
    title: "Котлеты ",
    img: Imgs.kotletMeal,
    price: "180",
    desc: "Мясо, хлеб, лук, картошка, яйца",
  },
  {
    title: "Голубцы",
    img: Imgs.golub,
    price: "180",
    desc: "Мясо, лук, рис, капуста, томат, морковь",
    portion: "от 5 порции",
  },
  {
    title: "Тефтели	на пару",
    img: Imgs.tefteli,
    price: "180",
    desc: "Мясо, рис, лук, сухари",
  },
  {
    title: "Манты",
    img: Imgs.manty,
    price: "180",
    desc: "Мясо, тесто, лук, специи",
  },

  {
    title: "Пигоди ",
    img: Imgs.pigodi,
    price: "180",
    desc: "Дрожжевое тесто, капуста, мясо, лук",
    portion: "от 5 порции",
  },
  {
    title: "Пельмени ",
    img: Imgs.pelmen,
    price: "180",
    desc: "Мясо(фарш), лук, тестоы",
  },
  {
    title: "Мясо по-французски ",
    img: Imgs.Fran,
    price: "190",
    desc: "Мясо, лук, картошка, сыр, майонез",
    portion: "от 6 порции",
  },
  {
    title: "Плов",
    img: Imgs.plov,
    price: "200",
    desc: " Рис, лук, морковь, мясо, чеснок",
    portion: "от 10 порции",
  },
  {
    title: "Куурдак",
    img: Imgs.govK,
    price: "240",
    desc: "Картошка, лук, мясо, специи",
  },
  {
    title: "Тушеная картошка с мясом",
    img: Imgs.tushK,
    price: "190",
    rotate: "90",
    desc: "Картошка, лук, морковь, мясо",
    portion: "от 5 порции",
  },
  {
    title: "Жареная картошка",
    img: Imgs.jarK,
    price: "190",
    desc: "Картошка, лук",
  },
];
const fish = [
  //  рыба

  {
    title: "Рыба в кляре",
    img: Imgs.Fish,
    price: "250",
    desc: "Рыба( мор.окунь), кляр",
  },
  {
    title: "Минтай в томатном соусе",
    img: Imgs.mintai,
    price: "220",
    desc: " Рыба(минтай), томат, лук, мука",
    portion: "от 5 порции",
  },
  {
    title: "Рыба в кисло-сладком соусе с овощами",
    img: Imgs.kisloSlR,
    price: "250",
    desc: `Рыба(мор.окунь), чеснок, крахмал, томатный соус, специи, лук, морковь, болгарский перец`,
  },
];

const Dish = () => {
  return (
    <>
      <h3 className="glav">
        <Link to="/">Главная</Link>
      </h3>
      <div>
        <br />
        <hr />
        <h3 style={{ color: "#fff" }}>Блюда с курицей</h3>
        <hr />
        <br />
        <CardList data={dish} />
        <br />
        <hr />
        <h3 style={{ color: "#fff" }}>Блюда с говядиной</h3>

        <hr />
        <br />
        <CardList data={meels} />
        <br />

        <hr />
        <h3 style={{ color: "#fff" }}>Блюда с рыбой</h3>
        <hr />
        <br />
        <CardList data={fish} />
      </div>
    </>
  );
};

export default Dish;
