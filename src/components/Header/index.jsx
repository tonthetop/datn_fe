import "./index.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header-wrapper fixed-top">
            <header className="header  h-100">
                <div className="container h-100">
                    <div className="row h-100  d-flex align-items-center">
                        <div className=" col-2 h-100">
                            <Link to="/" className="logo h-100" title="Trạm Tabo">
                                <img
                                    className="h-100"
                                    src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/logo.png?1649394240577"
                                    alt="logo Trạm Tabo"
                                />
                            </Link>
                        </div>
                        <div className="col-md-10">
                            <nav className="main-nav container">
                                <ul className="row list-unstyled m-0 text-white text-center">
                                    <li className="col-sm-4 col-lg-2 ">
                                        <Link className="text-white text-decoration-none header-nav-link" to="/" title="Trang chủ">
                                            Trang chủ
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2">
                                        <Link className="text-white text-decoration-none header-nav-link" to="/introduction" title="Introduction Page">
                                            Giới thiệu
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2">
                                        <Link className="text-white text-decoration-none header-nav-link" to="/products" title="Products Page">
                                            Sản phẩm
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2">
                                        <Link className="text-white text-decoration-none header-nav-link" to="#" title="News Page">
                                            Tin tức
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2">
                                        <Link className="text-white text-decoration-none header-nav-link" to="/find-order" title="FindOrder Page">
                                            Tìm kiếm Đ/H
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2 d-flex align-items-center">
                                        <div className="col-3  header-nav-icon">
                                            <Link to="#" className="text-light">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </Link>
                                        </div>
                                        <div className="col-3 header-nav-icon">
                                            <Link to="/login-and-register" className="text-light">
                                                <i className="fa-solid fa-user"></i>
                                            </Link>
                                        </div>
                                        <div className="col-3 header-nav-icon">
                                            <Link to="/cart" className="text-light">
                                                <i className="fa-solid fa-cart-shopping"></i>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;
