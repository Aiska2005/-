import React from "react";
import "../../../styles/Card.css";

import { Card as AntCArd } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
const { Meta } = AntCArd;

const Card = (props) => {
  return (
    <div>
      <AntCArd
        hoverable
        style={{
          width: 240,
          background: "#222",
        }}
        cover={
          <>
            <LazyLoadImage
              className="imgFood"
              alt="example"
              style={{
                objectFit: "cover",
                // padding: "20px",
              }}
              src={props.img}
            />
            <p className="price">{props.price} сом</p>
          </>
        }
      >
        <div className="textCard">
          <Meta
            className="metaColor"
            title={props.title}
            description={props.desc}
          />
        </div>
      </AntCArd>
    </div>
  );
};

export default Card;
