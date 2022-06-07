import { Table, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { InputNumber } from 'antd'
import { useDispatch } from 'react-redux'
import { cartsAction } from '../../redux/actions'
function RowItemCheckout({ product }) {
    console.log(product)
    return (
        <>
            <div className="product align-middle mb-3">
                <div className="thumb-cart d-flex ">
                    <Link to={`/product-detail/${product._id}`} title={product.name}>
                        <i  className="checkout-img-item position-relative" value={product.amount}>
                            <img style={{
                                height: "60px",
                                width: "60px"
                            }} src={product.img} alt={product.name}  />
                        </i>
                    </Link>
                    <div className="ps-1">
                        <Link to={`/product-detail/${product._id}`} title={product.name} className="text-decoration-none text-dark">
                            <span className='fs-7 fw-400'>{product.name}</span>
                        </Link>
                        <div className="d-flex justify-content-between">
                            <div className=""
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "500"
                                }}>
                                <span>Size: {product.size}</span>
                            </div>
                            <div className="product-price">
                                {product.discountValue && product.discountValue !== "" ?
                                    <>
                                        <span style={{
                                            fontSize: "16px",
                                            fontWeight: "500"
                                        }} className="">{(product.price * (1 - product.discountValue / 100)).toLocaleString()}₫</span>

                                        <span className="discount-price ">{product.price.toLocaleString()}₫</span></>
                                    : <span style={{
                                        fontSize: "16px",
                                        fontWeight: "500"
                                    }} className="">{(product.price).toLocaleString()}₫</span>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default RowItemCheckout