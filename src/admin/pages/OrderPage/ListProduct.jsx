import RowItemCheckout from "../../../pages/CheckoutPage/RowItemCheckout"
import { getTotalPrice } from "../../../utils/getTotalPrice"

function ListProduct({ order }) {
    const carts = order.productList ? order.productList.map(e => {
        return {
            ...e,
            _id: e.productId._id,
            name: e.productId.name,
            img: e.productId.imgList[0]
        }
    }) : []
    const amountTotal = carts.reduce((acc, item) => acc + item.amount, 0)
    return (
        <div className="checkout-radio-wrapper"
            style={{
                width: "55%",
                height: "70%",
                marginLeft:"10px"
            }}>
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
            </div>
        </div>
    )

}
export { ListProduct }