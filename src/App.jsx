import Header from "./components/Header/header";
import Footer from "./components/Footer";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import * as pages from "./pages";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
const { Content } = Layout;
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function App() {
  const arrayPath = useLocation().pathname.replace("/", "").split("/")
  const pathList = {
    introduction: "giới thiệu",
    products: "sản phẩm",
    contact: "liên hệ",
    "find-order": "tìm kiếm đơn hàng",
    "login-and-register": "đăng nhập",
    cart: "giỏ hàng",
    category: "Category",
    dep: "dép",
    giay: "giày",
    phukien: "phụ kiện"
  }

  const pathName = arrayPath.map(item => {
    return pathList[item]
  })

  console.log(pathName)

  return (
    <Layout>
      <Header></Header>
      <Content
        className="site-layout container"
        style={{
          marginTop: 30,
          marginBottom: 100
        }}
      >
        <Breadcrumb
          style={{
            marginTop: 20,
            marginBottom: 12,
          }}
        >
          <StyledBreadcrumb
            component="a"
            href="#"
            label="TRANG CHỦ"
            icon={<HomeIcon fontSize="small" />}
          />

          {pathName.map(item => {
            return (
              <Breadcrumb.Item style={{
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
              path="/thankyou/:id"
              element={<pages.ThankPage> </pages.ThankPage>}
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
