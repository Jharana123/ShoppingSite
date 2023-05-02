import { Button } from "antd";
import {
  HeartFilled,
  ShoppingCartOutlined,
  PlusCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Container from "react-bootstrap/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Navbar from "react-bootstrap/Navbar";
// import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { cartProduct } from "../../actions";
import { WishList } from "../../actions";
import { useEffect } from "react";
import { Typography, Dropdown, Menu } from "antd";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
const ImageDetails = ({ ShowImageDetails }) => {
  const { productId } = useParams();
  const { Title } = Typography;
  console.log("productId", productId);
  const list = useSelector((state) => state.addTheProduct.list);
  const exist = list.filter((x) => x.id === productId);
  console.log("exist123", exist.data);
  useEffect(() => {
    console.log("productId", productId);
    console.log("exist", exist);
  }, [ShowImageDetails]);
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log('e', e)
    dispatch(cartProduct(e));
  };
  // const getData=useSelector((state)=>state.cartProduct);
  // console.log('getData', getData);
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a>
              Your cart is Empty
              <ShoppingCartOutlined
                className={styles.header3}
              ></ShoppingCartOutlined>
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <>
      <div>
        <Layout>
          <Header className={styles.header}>
            Shopping App
            {/* <Dropdown overlay={menu} placement="bottomLeft" arrow> */}
            {/* <Button>bottomLeft</Button> */}
            {/* <ShoppingCartOutlined className={styles.header2}  content={7}></ShoppingCartOutlined> */}
            {/* </Dropdown> */}
           
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
                {exist.map((elem) => {
                  return (
                    <div className={styles.container}>
                      <div>
                        {
                          <img
                            src={elem.data.file}
                            alt=""
                            className={styles.img}
                          />
                        }
                        <HeartFilled
                          className={styles.icon}
                          onClick={() =>
                            dispatch(
                              WishList({
                                isFavourite: true,
                                isColor: "red",
                                id: elem.id,
                                name: elem.data.name,
                                description: elem.data.description,
                                file: elem.data.file,
                              })
                            )
                          }
                        ></HeartFilled>

                        <br />
                        <Link to="/cart">
                          <Button
                            type="primary"
                            className={styles.botton}
                            // onClick={() =>
                            //   dispatch(
                            //     cartProduct({
                            //       name: elem.data.name,
                            //       id: elem.data.id,
                            //       description: elem.data.description,
                            //       file: elem.data.file,
                            //       price:elem.data.price,
                            //     })
                            //   )
                            // }
                            onClick={() => send(elem)}
                          >
                            <ShoppingCartOutlined className={styles.cart} />
                            Add To Cart
                          </Button>
                        </Link>

                        <br />
                      </div>
                      <br />
                      <div className={styles.div3}>
                        <h2>Name: {elem.data.name}</h2>
                        <h2> ₹:657</h2>
                        {elem.data.description}
                        <br />
                        <div className={styles.footer}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default ImageDetails;
