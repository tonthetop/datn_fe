import './index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { orderApi } from '../../api'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import RowItemCheckout from '../CheckoutPage/RowItemCheckout'
import { Input } from 'antd'
import { useLoading } from '../../hooks/useLoading'
function ThankPage() {
    const [order, setOrder] = useState({ accountId: {} })
    const orderId = useParams().orderId
    console.log(orderId)
    const [showLoading, hideLoading] = useLoading()
    useEffect(() => {
        async function fetchData() {
            try {
                showLoading()
                const result = await orderApi.get(orderId)
                hideLoading()
                console.log(result)
                setOrder(result)
            } catch (error) {
                hideLoading()
                return
            }
        }
        fetchData()
    }, [])



    const carts = order.productList ? order.productList.map(e => {
        return {
            ...e,
            _id: e.productId._id,
            name: e.productId.name,
            img: e.productId.imgList[1]
        }
    }) : []
    const amountTotal = carts.reduce((acc, item) => acc + item.amount, 0)
    const priceTotal = carts.reduce((acc, item) => {
        const discountValue = item.discountValue ? item.discountValue : 0
        const priceOrigin = item.price * (1 - discountValue / 100) * item.amount;
        return acc + priceOrigin
    }, 0).toLocaleString()


    return (
        <div className="thank-page-wrapper container py-5">
            <div className="row">
                <div className="col-xs-12 col-md-7">
                    <div className="row mb-4">
                        <div className="logo-tick col-2">
                            <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div className="col-10">
                            <h5 className="">Cảm ơn bạn đã đặt hàng</h5>
                            <p className="">
                                Một email xác nhận đã được gửi tới  <u className="fw-bold fs-6">{order.accountId.email}</u>
                                <br />
                                Xin vui lòng kiểm tra email của bạn!
                            </p>
                        </div>
                    </div>
                    <div className="row thong-tin-mua-hang ">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <h5>Thông tin mua hàng</h5>
                                <p>Người mua: {order.accountId.name}</p>
                                <p>Email: {order.accountId.email}</p>
                                <p>SDT: {order.accountId.phone}</p>
                            </div>
                            <div class="col-md-6">
                                <h5>Địa chỉ nhận hàng</h5>
                                <p>Người nhận: {order.accountId.name}</p>
                                <p>Địa Chỉ: {order.deliveryAddress}</p>
                                <p>SDT người nhận: {order.receivePhone}</p>
                                <p>Ngày giao hàng: {order.deliveryTime?.split("T")[0]}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <h5>Phương thức thanh toán</h5>
                                {order.orderType === "COD" ? <p>Thanh toán khi giao hàng (COD)</p> :
                                    <p>Thanh toán online qua VNPAY</p>}

                            </div>
                            <div class="col-md-6">
                                <h5>Phương thức vận chuyển</h5>
                                <p>Giao hàng tận nơi</p>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <Link to="/" className="">
                            <Button className="rounded-pill text-uppercase my-3 py-2" variant="outline-dark col-md-4" >
                                Tiêp tục mua sắm
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-5">
                    <div className="checkout-radio-wrapper">
                        <div className="checkout-list-top">
                            <div className="px-3 pt-2">
                                <h5>{`Đơn hàng (${amountTotal} Sản phẩm)`}</h5>
                            </div>
                            <div className="checkout-list-item checkout-border-top p-3">
                                {carts.map((e, index) => {
                                    return (
                                        <div key={index}>
                                            <RowItemCheckout product={e}></RowItemCheckout>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="checkout-border-top p-3 ">
                                <div className="">
                                    <div className="d-flex justify-content-between">
                                        <span>
                                            Tạm tính
                                        </span>
                                        <span>
                                            {priceTotal} ₫
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <span>
                                            Phí vận chuyển
                                        </span>
                                        <span>
                                            Miễn phí
                                        </span>
                                    </div>
                                </div>
                                <div className="checkout-border-top py-2">
                                    <div className="d-flex justify-content-between">
                                        <span className="fs-5">
                                            Tổng cộng
                                        </span>
                                        <span className="fs-5 text-primary">
                                            {priceTotal} ₫
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { ThankPage }