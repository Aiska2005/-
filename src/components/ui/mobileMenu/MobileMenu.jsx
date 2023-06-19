import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";

import { ImportOutlined, MenuOutlined } from "@ant-design/icons";

import logo from "../../../assets/logo__1_-removebg-preview.png";
import imgs from "../../../assets/dish";
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
          <img width={30} src={imgs.soup} alt="" />
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
          <img width={30} src={imgs.blda} alt="" />
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
          <img width={30} src={imgs.pasty} alt="" />
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
          <img width={30} src={imgs.sams} alt="" />

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

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        icon={<MenuOutlined />}
        style={{ background: "brown", color: "#fff" }}
        onClick={showDrawer}
      ></Button>
      <br />
      <br />
      <Drawer
        bodyStyle={{ background: "#222" }}
        width={220}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"right"}
      >
        <div style={{ textAlign: "center" }}>
          <img width={180} alt="" src={logo} />
        </div>
        <Menu
          style={{
            backgroundColor: "#222",
            color: "#fff",
          }}
          defaultSelectedKeys={["13"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MobileMenu;
