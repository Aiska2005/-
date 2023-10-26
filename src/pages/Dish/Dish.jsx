import React from "react";
import CardList from "../../components/ui/CardList/CardList";
import { Link } from "react-router-dom";
import Imgs from "../../assets/dish";

const dish = [
  {
    title: "Курица в кляре  (с гарниром)",
    img: Imgs.ChikenKl,
    price: "220",
    desc: "Куриное филе, яйца, специи, мука",
  },
  {
    title: "Курица с овощами  (с гарниром) ",
    img: Imgs.ovosh,
    price: "230",
    desc: `Филе, лук, морковь, болгарский перец, капуста, цветная капуста, чеснок, огурцы, помидоры`,
  },
  {
    title: "Куриные котлеты  (с гарниром)",
    img: Imgs.kotlet,
    price: "220",
    desc: "Филе, лук, картошка, яйца, сыр",
  },
  {
    title: "Курица в кунжуте  (с гарниром)",
    img: Imgs.chikenKun,
    price: "240",
    desc: "Филе, горчица, специи, сухари, кунжут белый, яйца",
  },
  {
    title: "Курица в сырной корочке  (с гарниром) ",
    img: Imgs.korochka,
    price: "230",
    desc: "Филе, сыр, яйца, специи, мука",
  },
  {
    title: "Курица в майонезном соусе  (с гарниром)",
    img: Imgs.ChikenM,
    price: "220",
    desc: " Филе, лук, майонез, специи, петрушка",
  },

  {
    title: "Курица по-княжески  (с гарниром) ",
    img: Imgs.chikenKn,
    price: "250",
    desc: `Филе(отбивная), специи, сыр, шампиньоны, помидоры, майонез, лук`,
  },

  {
    title: "Голени запечённые в духовке(c гарниром) ",
    img: Imgs.golen,
    price: "230",
    desc: "Голени, специи, майонез",
    portion: "от 5 порции",
  },
  {
    title: "курица в кисло-сладком соусе (с гарниром)",
    img: Imgs.kisloSl,
    price: "250",
    desc: "Филе, чеснок, крахмал, томатный соус, специи",
  },

  {
    title: "фрикасе (с гарниром)",
    img: Imgs.frikase,
    price: "240",
    desc: "Филе, грибы, лук, сметана",
    portion: "от 5 порции",
  },
  {
    title: "Куурдак",
    img: Imgs.kuurdak,
    price: "270",
    desc: "Картошка, филе, лук, специи",
  },
];
//   говядина

const meels = [
  {
    title: "Мясо по – домашнему  (с гарниром)",
    img: Imgs.Meel,
    price: "240",
    desc: "Мясо, лук, болгарский перец, соевый соус",
  },
  {
    title: "Бризоли	классическая(начинка огурцы и помидоры) ",
    img: Imgs.brizol,
    price: "240",
    desc: "Мясо, лук, мука, огурцы, помидоры, майонез, яйца",
  },
  {
    title: "Бризоль с грибами(с гарниром) ",
    img: Imgs.brGrib,
    price: "260",
    desc: "Мясо, лук, грибы, майонез, мука, яйца",
  },
  {
    title: "Говядина с овощами(с гарниром)",
    img: Imgs.govOvosh,
    price: "250",
    desc: `Мясо, лук, морковь, болгарский перец, чеснок, капуста, цветная капуста, огурцы, помидоры`,
  },
  {
    title: "Бифштекс (с гарниром)",
    img: Imgs.bishf,
    price: "240",
    desc: "Мясо, лук, картошка, яйца",
  },
  {
    title: "Котлеты(с гарниром) ",
    img: Imgs.kotletMeal,
    price: "230",
    desc: "Мясо, хлеб, лук, картошка, яйца",
  },
  {
    title: "Голубцы",
    img: Imgs.golub,
    price: "220",
    desc: "Мясо, лук, рис, капуста, томат, морковь",
    portion: "от 5 порции",
  },
  {
    title: "Тефтели	на пару (с гарниром)",
    img: Imgs.tefteli,
    price: "220",
    desc: "Мясо, рис, лук, сухари",
  },
  {
    title: "Манты",
    img: Imgs.manty,
    price: "220",
    desc: "Мясо, тесто, лук, специи",
  },

  {
    title: "Пигодьи ",
    img: Imgs.pigodi,
    price: "230",
    desc: "Дрожжевое тесто, капуста, мясо, лук",
    portion: "от 5 порции",
  },
  {
    title: "Пельмени(можно с бульоном) ",
    img: Imgs.pelmen,
    price: "230",
    desc: "Мясо(фарш), лук, тестоы",
  },
  {
    title: "Мясо по-французски ",
    img: Imgs.Fran,
    price: "250",
    desc: "Мясо, лук, картошка, сыр, майонез",
    portion: "от 6 порции",
  },
  {
    title: "Плов",
    img: Imgs.plov,
    price: "230",
    desc: " Рис, лук, морковь, мясо, чеснок",
    portion: "от 10 порции",
  },
  {
    title: "Куурдак",
    img: Imgs.govK,
    price: "290",
    desc: "Картошка, лук, мясо, специи",
  },
  {
    title: "Тушеная картошка с мясом",
    img: Imgs.tushK,
    price: "230",
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
    title: "Рыба в кляре (с гарниром) ",
    img: Imgs.Fish,
    price: "300",
    desc: "Рыба( мор.окунь), кляр",
  },
  {
    title: "Минтай в томатном соусе",
    img: Imgs.mintai,
    price: "270",
    desc: " Рыба(минтай), томат, лук, мука",
    portion: "от 5 порции",
  },
  {
    title: "Рыба в кисло-сладком соусе с овощами(с гарниром)",
    img: Imgs.kisloSlR,
    price: "320",
    desc: `Рыба(мор.окунь), чеснок, крахмал, томатный соус, специи, лук, морковь, болгарский перец`,
  },
];

const sidedishes = [
  {
    title: "Рис",
    img: Imgs.ris,
    price: "90",
  },
  {
    title: "Гречка",
    img: Imgs.grechka,
    price: "80",
  },
  {
    title: "Пюре",
    img: Imgs.pure,
    price: "90",
  },
  {
    title: "Макароны",
    img: Imgs.makarony,
    price: "80",
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

        <hr />
        <h3 style={{ color: "#fff" }}>Гарниры</h3>
        <hr />
        <hr />
        <CardList data={sidedishes} />
      </div>
    </>
  );
};

export default Dish;
