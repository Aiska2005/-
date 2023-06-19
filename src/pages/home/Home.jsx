import React from "react";
import { useNavigate } from "react-router-dom";
import Salat from "../../components/Salat/Salat";
import Soup from "../../components/Soup/Soup";
import Dish from "../../components/dish/Dish";
import Button from "../../components/ui/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <HomeBanner /> */}
      <Salat />
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => navigate("/salat")}>Подробнее</Button>
      </div>

      <Soup />
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => navigate("/soup")}>Подробнее</Button>
      </div>
      <Dish />
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => navigate("/meels")}>Подробнее</Button>
      </div>
    </>
  );
};

export default Home;
