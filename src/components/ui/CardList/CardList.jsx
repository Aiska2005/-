import { List, Card } from "antd";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardList = (props) => {
  const { type = "cover" } = props;
  console.log(type, "----type");
  return (
    <div style={{ paddingTop: "20px" }}>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{
                background: "#222",
                color: "#fff",
              }}
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    color: "#fff",
                  }}
                >
                  <h5> {item.title}</h5>
                  <h5> {item.price} сом</h5>
                </div>
              }
            >
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  width={"100%"}
                  style={{
                    objectFit: { type },
                    height: "200px",
                  }}
                  src={item.img}
                />
              </div>
              <div style={{ height: "110px" }}>
                <div>{item.desc}</div>
                <h3 style={{ color: "red" }}> {item.portion}</h3>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CardList;
