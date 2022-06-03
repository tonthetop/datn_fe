import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../../redux/actions'
import { authApi } from '../../api'
function Header() {
    const [showNavbar, setShowNavbar] = useState(false)
    const carts = useSelector(state => state.carts)
    const totalAmount = carts.reduce((acc, item) => acc + item.amount, 0)

    //
    const user = useSelector(state => state.user)
    let isLogin = !!user.tokenAccess
    //
    const [displayDropdown, setDisplayDropdown] = useState(false);
    // Logout
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = async () => {
        //call api logout
        await authApi.logout()
        // xoa user trong redux
        const action = userAction.deleteUser()
        dispatch(action)
        // direct homepage
        navigate('/')
    }
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
                <button onClick={() => setShowNavbar(prev => !prev)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive" toggle="collapse" data-target="navbar-collapse">
                    <ul className="navbar-nav ms-auto text-uppercase" style={{ fontSize: "17px" }}>
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
                        <li className="nav-item d-flex align-items-center px-2" style={{ columnGap: "30%", width: "70px", fontSize: "20px" }}>
                            <div className="header-nav-icon">
                                <Link to="#" className="text-light">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Link>
                            </div>
                            <div className="header-nav-icon text-center">
                                <Link to="/cart" className="text-light">
                                    <i className="fa-solid fa-cart-shopping" value={totalAmount}></i>
                                </Link>
                            </div>
                            {!isLogin && <div className="header-nav-icon">
                                <Link to="/login-and-register" className="text-light">
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                            </div>}
                            {isLogin && <div className="position-relative ">
                                <div onClick={() => setDisplayDropdown(prev => !prev)} className="text-light icon-ava">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                {displayDropdown && <div id="drop-dowm-menu-user" className="z-dropdown position-absolute fs-6 mt-2 w-40 bg-white rounded flex flex-col gap-2">
                                    <Link className='drop-dowm-item-user' to="/admin">
                                        <div className="">Order History</div>
                                    </Link>

                                    <Link className='drop-dowm-item-user' to="/profile">
                                        <div className="">Profile</div>
                                    </Link>
                                    <div style={{ cursor: "pointer" }} className='drop-dowm-item-user' onClick={handleLogout}>
                                        <div className="">Log out</div>
                                    </div>
                                </div>}
                            </div>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav >


    )
}
export default Header