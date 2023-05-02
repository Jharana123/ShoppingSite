import { Layout } from "antd";
import { Button } from "antd";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

import {
  ShoppingCartOutlined,
  HeartFilled,
  PlusCircleOutlined,
  SlackOutlined
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const ShoppingDetails = () => {
  const [selected, setSelected] = useState("");
  const list = useSelector((state) => state.addTheProduct.list);

  const ShowImageDetails = (elem) => {
    setSelected(elem);
  };
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <SlackOutlined />
          Shopping App <ShoppingCartOutlined className={styles.header2} />
        </Header>
        <Layout>
          <Sider className={styles.nav}>
            <Link to="/all">
              <Button type="primary" className={styles.btn}>
                <PlusCircleOutlined className={styles.icon3} />
                All Item
              </Button>
            </Link>
            <br />
            <br />
            <Link to="/add">
              <Button type="primary" className={styles.btn}>
                <PlusCircleOutlined className={styles.icon3} />
                Add Item
              </Button>
            </Link>
            <br />
            <br />

            <Link to="/cart">
              <Button type="primary" className={styles.btn}>
                <ShoppingCartOutlined className={styles.cart} />
                Cart Item
              </Button>
            </Link>
            <br />
            <br />
            <Link to="/wish">
              <Button type="primary" className={styles.btn}>
                <HeartFilled className={styles.icon2} />
                Wish List
              </Button>
            </Link>
          </Sider>
          <Content>
            <div className={styles.div2}>
              {list.map((elem) => {
                return (
                  <div key={elem.id}>
                    <div>
                      <Link to={`/product/${elem.id}`}>
                        {
                          <img
                            src={elem.data.file}
                            alt=""
                            className={styles.img}
                            onClick={() => ShowImageDetails(elem)}
                          />
                        }
                      </Link>
                      <br />
                      <h3> {elem.data.name}</h3>
                      <br />
                    </div>
                  </div>
                );
              })}
            </div>
            <div></div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default ShoppingDetails;
