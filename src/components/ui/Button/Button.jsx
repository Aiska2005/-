import React from "react";
import { Button as AntButton } from "antd";

const Button = (props) => {
  const { children } = props;
  return (
    <>
      <br />
      <br />
      <hr />
      <br />
      <AntButton
        type="primary"
        onClick={props.onClick}
        size="large"
        style={{ background: "brown" }}
      >
        {children}
      </AntButton>
      <br />
      <br />
      <hr />
    </>
  );
};

export default Button;
