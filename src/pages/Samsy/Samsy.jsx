import React from "react";
import Card from "../../components/ui/Card/Card";
import sams from "../../assets/samsy/samsy.jpeg";
import { Link } from "react-router-dom";

const samsy = [
  {
    title: "Самсы с мясом",
    img: sams,
    price: "55",
  },

  {
    title: "Самсы с курицей",
    img: sams,

    price: "50",
  },
];

const Samsy = () => {
  return (
    <>
      <h3 className="glav">
        <Link to="/">Главная</Link>
      </h3>
      <div style={{ paddingTop: "30px" }}>
        <div className="homeItemCardSamsy">
          {samsy.map((sam) => (
            <Card {...sam} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Samsy;
