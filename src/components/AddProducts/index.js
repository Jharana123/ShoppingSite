import { Button, Input, Image } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import { addProduct } from "../../actions";
import {
  HeartFilled,
  PlusCircleOutlined,
  ShoppingCartOutlined,
  SlackOutlined
} from "@ant-design/icons";
import { Typography } from "antd";
const AddProduct = () => {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const[price,setPrice]=useState('');

  const { Title } = Typography;
  const dispatch = useDispatch();
  const { Header, Sider, Content } = Layout;
  const list = useSelector((state) => state.addTheProduct.list);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
   const onPriceChange = (e) => {
     setPrice(e.target.value);
   };

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <SlackOutlined />
          Shopping App
        
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
            <div className={styles.div}>
              <h1 className={styles.title}> Add New Product</h1> <br />
              <h2>Image:</h2>
              <input
                type="file"
                onChange={handleChange}
                className={styles.input2}
              />
              <img src={file} alt="" />
              <div className={styles.div4}>
                <h2> Product Name:</h2>
                <Input
                  type="text"
                  placeholder="Enter Product Name"
                  className={styles.input}
                  value={name}
                  onChange={onNameChange}
                ></Input>
              </div>
              <h2>Price:</h2>
              <Input
                type="number"
                placeholder="Enter Price"
                className={styles.input}
                value={price}
                onChange={onPriceChange}
              ></Input>
              <br />
              <br />
              <h2> Description:</h2>
              <TextArea
                rows={4}
                onChange={onDescriptionChange}
                value={description}
                className={styles.input}
              >
                Description
              </TextArea>
              <br />
              <br />
              <Link to="/all">
                <Button
                  type="primary"
                  onClick={() =>
                    dispatch(
                      addProduct({
                        name: name,
                        description: description,
                        file: file,
                        price: price,
                        qnty:0,
                      }),
                      setName(""),
                      setDescription(""),
                      setFile(""),
                      setPrice("")
                    )
                  }
                >
                  <PlusCircleOutlined className={styles.icon3} />
                  Add New Product
                </Button>
              </Link>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default AddProduct;
