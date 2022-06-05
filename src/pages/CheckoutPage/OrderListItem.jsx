import { useSelector } from "react-redux"
import RowItemCheckout from "./RowItemCheckout"
import { Input, Button } from 'antd'
import { Link } from "react-router-dom"
function OrderListItem() {
    const { carts } = useSelector(state => state)
    const amountTotal = carts.reduce((acc, item) => acc + item.amount, 0)
    return (
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
                    <div className="d-flex justify-content-between mb-3">
                        <Input className="w-auto" placeholder="Nhập mã giảm giá" />
                        <Button type="primary">Áp dụng</Button>
                    </div>
                    <div className="checkout-border-top py-2">
                        <div className="d-flex justify-content-between">
                            <span>
                                Tạm tính
                            </span>
                            <span>
                                5.374.920₫
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
                                5.374.920₫
                            </span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <Link to='/cart'>
                                <i class="fa-solid fa-angles-left me-2"></i>
                                Quay về giỏ hàng
                            </Link>
                            <Button type="primary">Đặt hàng</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default OrderListItem