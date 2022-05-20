import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import ProductQuickView from '../ProductQuickView'
const ProductCard = ({ product }) => {
    // Modal product quickview
    const [modalShow, setModalShow] = React.useState(false);
    //
    const discound =product.discountIds[0]
    return (
        <div className="col-6 col-sm-6 col-md-4 mb-4">
            <div className="mb-20 mt-0 single-product d-flex flex-column ">
                <div className="product-img d-flex flex-column position-relative">
                    <Link className="position-relative h-100" to="#">
                        { !!discound && <span className="onsale">- {discound.value}%</span>}
                        <img alt="" className="position-absolute h-100 w-100 item-img-first " src={product.imgList[0]} />
                        <img alt="" className="position-absolute h-100 w-100 item-img-second" src={product.imgList[1]} />
                    </Link>
                    <div className="btn-quickview position-absolute" onClick={() => setModalShow(true)} >
                        XEM NHANH
                    </div>
                    <ProductQuickView
                        product={product}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="product-content mt-2">
                    <div className="product-list-size d-flex flex-wrap justify-content-center mb-2">
                        {
                            product.productBySize.map((item, index) => {
                                return (
                                    <div key={index} className="mx-2">
                                        <span className="size-item">
                                            {item.size}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h6 className="text-center mb-0">
                        <Link to="##" className="text-dark text-decoration-none">
                            {product.name}
                        </Link>
                    </h6>
                    <div className="product-price">
                        <div className="price-box text-center">
                            <span className="regular-price">{product.price}</span>
                            <span className="discount-price ml-1">{product.price * 0.9}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard