import { Link } from 'react-router-dom'
import './header.css'
import {useState} from 'react'
function Header() {
    const [showNavbar,setShowNavbar]=useState(false)
    return (
        <nav
            style={{
                backgroundColor: "#494a48!important",
            }}
            className="navbar navbar-expand-lg navbar-dark  fixed-top"
        >
            <div className="container">
                <Link to="/" className="logo h-100" title="Trạm Tabo">
                    <img
                        className=""
                        style={{ height: "45px" }}
                        src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/logo.png?1649394240577"
                        alt="logo Trạm Tabo"
                    />
                </Link>
                <button onClick={()=>setShowNavbar(prev=>!prev)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive" toggle="collapse" data-target="navbar-collapse">
                    <ul className="navbar-nav ms-auto text-uppercase" style={{fontSize:"17px"}}>
                        <li className="nav-item active  px-3">
                            <Link className="nav-link text-light header-nav-link" to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-light header-nav-link" to="/introduction">Giới thiệu</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-light header-nav-link" to="/products">Sản phẩm</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-light header-nav-link" to="/contact">Liên hệ</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-light header-nav-link" to="/find-order">Tìm kiếm đơn hàng</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center text-center px-3" style={{ columnGap: "25%", width: "70px",fontSize:"20px" }}>
                            <div className="header-nav-icon">
                                <Link to="#" className="text-light">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Link>
                            </div>
                            <div className="header-nav-icon">
                                <Link to="/login-and-register" className="text-light">
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                            </div>
                            <div className="header-nav-icon">
                                <Link to="/cart" className="text-light">
                                    <i className="fa-solid fa-cart-shopping" value="5"></i>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >


    )
}
export default Header