import Header from "./components/Header/header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import * as pages from "./pages";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Content } = Layout;
function App() {
  return (
    <Layout>
      <Header></Header>
      <Content
        className="site-layout container"
        style={{
          marginTop: 30,
        }}
      >
        <Breadcrumb
          style={{
            marginTop:20,
            marginBottom:12
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            paddingTop:0,
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
