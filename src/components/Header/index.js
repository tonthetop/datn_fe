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
                                        <Link className="text-white text-decoration-none header-nav-link" to="/gioi-thieu" title="Trang chủ">
                                            Giới thiệu
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2">
                                        <Link className="text-white text-decoration-none header-nav-link" to="/san-pham" title="Trang chủ">
                                            Sản phẩm
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2">
                                        <Link className="text-white text-decoration-none header-nav-link" to="/" title="Trang chủ">
                                            Tin tức
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2">
                                        <Link className="text-white text-decoration-none header-nav-link" to="/tim-kiem-don-hang" title="Trang chủ">
                                            Tìm kiếm Đ/H
                                        </Link>
                                    </li>
                                    <li className="col-sm-4 col-lg-2 row">
                                        <div className="col-4  header-nav-icon">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <div className="col-4 header-nav-icon">
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <div className="col-4 header-nav-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
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
