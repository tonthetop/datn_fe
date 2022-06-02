
//
import { useSelector } from 'react-redux'
//

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Carousel from './pages/IndexPage/Carousel.jsx'
import * as pages from "./pages";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FilterOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
const { Content } = Layout;


function App() {

  const arrayPath = useLocation().pathname.replace("/", "").split("/")
  const pathList = {
    introduction: "giới thiệu",
    products: "sản phẩm",
    contact: "liên hệ",
    "find-order": "tìm kiếm đơn hàng",
    "login-and-register": "đăng nhập",
    cart: "giỏ hàng",
    category: "danh mục",
    dep: "dép",
    giay: "giày",
    phukien: "phụ kiện"
  }

  const pathName = arrayPath.map(item => {
    return pathList[item]
  })

  return (
    <Layout>
      <Header></Header>
      {useLocation().pathname === "/" && <div className="carousel-slide" style={{ marginTop: "39px" }}>
        <Carousel></Carousel>
      </div>}

      <Content
        className="site-layout container"
        style={{
          marginTop: 50,
          marginBottom: 100
        }}
      >
        <Breadcrumb
          style={{
            marginTop: 20,
            marginBottom: 12,
          }}>
          {useLocation().pathname !== "/" &&
            <Breadcrumb.Item style={{ textTransform: 'uppercase', }} href="/">
              <span style={{ display: "inline" }}>Trang Chủ</span>
            </Breadcrumb.Item>
          }
          {pathName.map((item, index) => {
            return (
              <Breadcrumb.Item key={index} style={{
                textTransform: 'uppercase'
              }}>{item}</Breadcrumb.Item>
            )
          })}
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            paddingTop: 30,
            minHeight: 380,
          }}
        >
          <ToastContainer autoClose={1000} />
          <Routes>
            <Route
              path="/"
              element={<pages.IndexPage> </pages.IndexPage>}
            ></Route>
            <Route Route path="/introduction" element={<> </>}></Route>
            <Route
              path="/products"
              element={<pages.ProductMainPage> </pages.ProductMainPage>}>
            </Route>
            <Route path="/category/:categoryId" element={<pages.ProductCategoryPage />} />
            <Route
              path="/find-order"
              element={<pages.FindOrderPage> </pages.FindOrderPage>}
            ></Route>
            <Route
              path="/login-and-register"
              element={<pages.LoginAndRegisterPage> </pages.LoginAndRegisterPage>}
            ></Route>
            <Route
              path="/cart"
              element={<pages.CartPage> </pages.CartPage>}
            ></Route>
            <Route
              path="/thankyou/"
              element={<pages.ThankPage> </pages.ThankPage>}
            ></Route>
            <Route
              path="/product-detail/:productId"
              element={<pages.ProductDetailPage> </pages.ProductDetailPage>}
            ></Route>
            <Route
              path="/not-found"
              element={<div>NOTFOUNDAPI</div>}
            ></Route>
            <Route
              path="*"
              element={<div>NOTFOUNDROUTE</div>}
            ></Route>
          </Routes>
        </div>
      </Content>
      <Footer>
      </Footer>
    </Layout>
  );
}

export default App;
