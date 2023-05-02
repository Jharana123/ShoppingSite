import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Layout, Button, Dropdown} from "antd";
import { Link } from "react-router-dom";
// import {DeleteOutlined } from 'antd-icons';
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  HeartFilled,
  SlackOutlined,
} from "@ant-design/icons";
import Table from "react-bootstrap/esm/Table";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Navbar from "react-bootstrap/Navbar";
import Menu from "@mui/material/Menu";
import {removeCartProduct} from '../../actions';
const { Header, Sider, Content } = Layout;
const CartProduct = () => {
  const list = useSelector((state) => state.cartTheProduct.list);
  const dispatch = useDispatch();
  console.log("list", list);
  const [anchorEl, setAnchorEl] = useState(null);
  const[price,setPrice]=useState(0);
  console.log("total", price);
  const open = Boolean(anchorEl);


   const total = () => {
     let  price = 0;
     list.map((ele,k) => {
       price = ele.price + price;
     });
     setPrice(price);
   };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt=(data)=>{
    dispatch(removeCartProduct(data))
  }
 

  useEffect(()=>{
    total();
  },[total])
  


  return (
    <Layout>
      <Header className={styles.header}>
        <SlackOutlined />
        Shopping App
        <Navbar variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home">Add to Cart</Navbar.Brand> */}

            <Badge
              badgeContent={list.length}
              color="primary"
              className={styles.header2}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                class="fa-solid fa-cart-shopping text-light"
                style={{ fontSize: 25, cursor: "pointer" }}
              ></i>

              {/* <ShoppingCartIcon className={styles.cart} /> */}
            </Badge>
          </Container>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {list.length ? (
              <div
                className={styles.card_details}
                style={{ width: "24rem", padding: "10px" }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>brand</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      list.map((e)=>{
                        return (
                          <>
                            <tr>
                              <td>
                                <img
                                  src={e.data.data.file}
                                  style={{ width: "8rem", height: "8rem" }}
                                  alt=""
                                  className={styles.img}
                                />
                              </td>
                              <td>
                                <p>Name:{e.data.data.name}</p>
                                <p>Price:{e.data.data.price}</p>
                                <p>Brand:Sonata</p>
                                <p>
                                  <strong>Total:</strong> ₹500
                                </p>
                                <p>
                                  <strong>Ratings:</strong>
                                  <span
                                    style={{
                                      background: "teal",
                                      color: "white",
                                      padding: "5px",
                                    }}
                                  >
                                    3.4★
                                  </span>
                                </p>
                                <p>
                                  <strong>Oder Review:</strong> 4567
                                </p>
                                
                              </td>
                              <i
                                className="fas fa-trash"
                                onClick={()=>dlt(e.data)}
                                style={{ color: "red" }}
                              ></i>
                            </tr>
                          </>
                        );
                      })
                    }
                    <p className="text-center">Total:{price}</p>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className={styles.card_details}
                style={{ width: "24rem", padding: 10 }}
              >
                <i class="fas fa-close" onClick={handleClose}></i>
                <p>Your Cart is empty</p>
                <ShoppingCartOutlined className={styles.cart2} />
              </div>
            )}
          </Menu>
        </Navbar>
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
          <div>
            <h2>Items Details page</h2>

            {list.map((elem) => {
              return (
                <section className="container mt-3">
                  <div className={styles.iteamsdetails}>
                    <div className={styles.items_img}>
                      {
                        <img
                          src={elem.data.data.file}
                          alt=""
                          className={styles.img}
                        />
                      }
                    </div>
                    <div className={styles.details}>
                      <Table>
                        <tr>
                          <td>
                            <p>
                              <strong>Name:</strong> {elem.data.data.name}
                            </p>

                            <p>
                              <strong>Price:</strong> {elem.data.data.price}
                            </p>
                            <p>
                              <strong>Total:</strong> ₹{price}
                            </p>
                            <div
                              className="mt-5 d-flex justify-content-between align-items-center "
                              style={{
                                width: "100px",
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span style={{ fontsize: 24 }}>-</span>
                              <span style={{ fontsize: 24 }}>{elem.data.data.qnty}</span>
                              <span style={{ fontsize: 24 }}>+</span>
                            </div>
                          </td>
                          <td>
                            <p>
                              <strong>Brand:</strong> Sonata
                            </p>
                            <p>
                              <strong>Ratings:</strong>
                              <span
                                style={{
                                  background: "teal",
                                  color: "white",
                                  padding: "5px",
                                }}
                              >
                                3.4★
                              </span>
                            </p>
                            <p>
                              <strong>Oder Review:</strong> 4567
                            </p>
                            <p>
                              <strong>Remove:</strong>
                              <i
                                className="fas fa-trash"
                                style={{ color: "red" }}
                                onClick={() => dlt(elem.data)}
                              ></i>
                            </p>
                          </td>
                        </tr>
                        <tr></tr>
                      </Table>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default CartProduct;
