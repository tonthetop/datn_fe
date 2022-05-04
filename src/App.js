import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import TimKiemDonHang from './pages/TimkiemDonHang';
import TrangChu from './pages/TrangChu';
import ProductsPage from './pages/Products';
function App() {
  return (

    <div className="App">

      {/* Header */}
      <Header></Header>
      <div style={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={
            <TrangChu></TrangChu>
          }></Route>
          <Route path="/gioi-thieu" element={
            <ProductsPage></ProductsPage>

          }></Route>
          <Route path="/san-pham" element={
            <ProductsPage></ProductsPage>
          }></Route>
          <Route path='/tim-kiem-don-hang' element={
            <TimKiemDonHang></TimKiemDonHang>
          }></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
