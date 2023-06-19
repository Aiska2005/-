import { Menu } from "antd";
import React from "react";
import Imgs from "../../assets/dish/index";
import img from "../../assets/logo__1_-removebg-preview.png";

import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    <h3 style={{ color: "#fff" }}>Наше меню:</h3>,
    "grp",
    null,
    [
      getItem(
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <img
            width={30}
            src="https://defood.crapps.ru/admin/images/maxi/goods10/1800882865ecbc6f29cbbe5.72127451.png"
            alt=""
          />
          <h4>
            <Link to="/salat"> Салаты</Link>
          </h4>
        </div>,
        "1"
      ),
      getItem(
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <img
            width={30}
            src="https://defood.crapps.ru/admin/images/categories/goods12.png?20210310110320"
            alt=""
          />

          <h4>
            <Link to="/drinks"> Напитки</Link>
          </h4>
        </div>,
        "2"
      ),
      getItem(
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <img width={30} src={Imgs.soup} alt="" />
          <h4>
            <Link to="/soup"> Супы</Link>
          </h4>
        </div>,
        "3"
      ),
      getItem(
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <img width={30} src={Imgs.bishf} alt="" />
          <h4>
            <Link to="/meels"> Блюда</Link>
          </h4>
        </div>,
        "4"
      ),
      getItem(
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <img width={30} src={Imgs.pasty} alt="" />
          <h4>
            <Link to="/pasty"> Пасты</Link>
          </h4>
        </div>,
        "5"
      ),

      getItem(
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <img
            width={30}
            style={{ borderRadius: "50%" }}
            src={Imgs.sams}
            alt=""
          />

          <h4>
            <Link to="/samsy">Самсы</Link>
          </h4>
        </div>,
        "6"
      ),
    ],
    "group"
  ),
];

const SideBar = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <img width={300} src={img} />
      </div>
      <Menu
        style={{
          backgroundColor: "#222",
          color: "#fff",
        }}
        // defaultSelectedKeys={[]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default SideBar;
