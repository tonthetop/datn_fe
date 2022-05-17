import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import ProductQuickView from '../ProductQuickView'
const ProductCard = () => {
    // Modal product quickview
    const [modalShow, setModalShow] = React.useState(false);
    //
    const listSize = [41, 42, 43, 44, 45, 46]
    return (
        <div className="col-6 col-sm-6 col-md-4 mb-4">
            <div className="mb-20 mt-0 single-product d-flex flex-column ">
                <div className="product-img d-flex flex-column">
                    <Link className="position-relative h-100 mb-3" to="#">
                        <span className="onsale">- 10%</span>
                        <img alt="" className="position-absolute h-100 w-100 item-img-first " src="https://bizweb.dktcdn.net/100/377/398/products/women-s-air-force-1-white-pendant-dd1525-100-release-date.jpg?v=1646286178000" />
                        <img alt="" className="position-absolute h-100 w-100 item-img-second" src="https://bizweb.dktcdn.net/thumb/grande/100/377/398/products/women-s-air-force-1-white-pendant-dd1525-100-release-date-c630b781-6dba-4139-8a3f-d106bdafcedd.jpg?v=1646286268000" />
                        <div to="#" className="btn-quickview position-absolute" onClick={() => setModalShow(true)} >
                            XEM NHANH
                        </div>
                    </Link>
                    <ProductQuickView
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="product-content my-1">
                    <div className="product-list-size d-flex justify-content-evenly mb-2">
                        {
                            listSize.map(size => {
                                return (
                                    <div key={size}>
                                        <span className="size-item">
                                            {size}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h6 className="text-center mb-0">
                        <Link to="##" className="text-dark text-decoration-none">
                            [DD1525-100] W NIKE AIR FORCE 1 LOW "WHITE PENDANT"
                        </Link>
                    </h6>
                    <div className="product-price">
                        <div className="price-box text-center">
                            <span className="regular-price">3.825.000₫</span>
                            <span className="discount-price ml-1">4.250.000₫</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard