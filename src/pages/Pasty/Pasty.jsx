import React from "react";
import CardList from "../../components/ui/CardList/CardList";
import { Link } from "react-router-dom";
import Imgs from "../../assets/pasty/index";

const pasty = [
  {
    title: "Макароны по флотский ",
    img: Imgs.makaronFl,
    price: "220",
    desc: "Мясо(фарш), лук, морковь, макароны",
    portion: "от 5 порции",
  },
  {
    title: "Спагетти с курицей и грибами",
    img: Imgs.chikenGr,
    price: "250",
    desc: `Кур,филе, лук, грибы, сметана, спагетти, петрушка, сыр`,
  },

  {
    title: "Спагетти Болоньезе",
    img: Imgs.spagety,
    price: "250",
    desc: `Мясо(фарш), лук, морковь, сельдерей, сыр, томат, спагетти, петрушка`,
  },
  {
    title: "Спагетти Арабьято.(острое)",
    img: Imgs.arab,
    price: "250",
    desc: ` Мясо, лук, острый перец, чеснок, сыр, томат, спагетти, петрушка`,
  },
];

const Pasty = () => {
  return (
    <>
      <h3 className="glav">
        <Link to="/">Главная</Link>
      </h3>

      <div>
        <h3 className="textCenter">Пасты</h3>

        <CardList data={pasty} />
      </div>
    </>
  );
};

export default Pasty;
