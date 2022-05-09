import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import * as pages from "./pages";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<pages.IndexPage></pages.IndexPage>}></Route>
          <Route
            path="/introduction"
            element={<></>}
          ></Route>
          <Route
            path="/products"
            element={<pages.ProductsPage></pages.ProductsPage>}
          ></Route>
          <Route
            path="/find-order"
            element={<pages.FindOrderPage></pages.FindOrderPage>}
          ></Route>
          <Route
            path="/login-and-register"
            element={<pages.LoginAndRegisterPage></pages.LoginAndRegisterPage>}
          ></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
