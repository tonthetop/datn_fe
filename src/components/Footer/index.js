import './index.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className="site-footer ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>

                            <p className="text-justify">
                                Sneakers App
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptates vel itaque? Nobis incidunt id officia magnam nostrum alias tempora in quaerat eligendi, odit eveniet, cum deleniti reprehenderit dolorum temporibus.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><Link to="##">Shoes</Link></li>
                                <li><Link to="##">Sandals</Link></li>
                                <li><Link to="##">Accessorizes</Link></li>
                                <li><Link to="##">New Arrivals</Link></li>
                                <li><Link to="##">Best-selling goods</Link></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><Link to="##">About Us</Link></li>
                                <li><Link to="##">Contact Us</Link></li>
                                <li><Link to="##">Contribute</Link></li>
                                <li><Link to="##">Privacy Policy</Link></li>
                                <li><Link to="##">Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><Link className="facebook" to="##"><i className="fa-brands fa-facebook"></i></Link></li>
                                <li><Link className="twitter" to="##"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link className="linkedin" to="##"><i className="fa-brands fa-linkedin"></i></Link></li>
                                <li><Link className="dribbble" to="##"><i className="fa-brands fa-github"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default Footer