import { useDispatch, useSelector } from "react-redux";
import styles from './style.module.css'
import { Link } from "react-router-dom";
import {Layout,Button} from 'antd';
import { WishList } from "../../actions";

import { ShoppingCartOutlined,HeartFilled,PlusCircleOutlined ,SlackOutlined} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
const WishingList = () => {
 
  
  const list = useSelector((state) => state.WishList.list);
  console.log('list', list);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Header className={styles.header}>
        <SlackOutlined />
        Shopping App
        {/* <ShoppingCartOutlined className={styles.header2} /> */}
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
                <div key={elem.data.id}>
                  <div>
                    {<img src={elem.data.file} alt="" className={styles.img} />}

                    <br />
                    <h3> {elem.data.name}</h3>
                    <br />
                
                    <HeartFilled
                      className={styles.icon4}
                      onClick={() =>
                        dispatch(
                          WishList({
                            isFavourite: true,
                            id: elem.id,
                            name: elem.data.name,
                            description: elem.data.description,
                            file: elem.data.file,
                          })
                        )
                      }
                    ></HeartFilled>
                  </div>
                </div>
              );
            })}
            {/* <HeartFilled
              className={styles.icon5}
              
            /> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default WishingList;
