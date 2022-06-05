import FormInfoOrder from "./FormInfoOrder"
import './index.css'
import CheckoutRadio from "./CheckoutRadio"
import OrderListItem from "./OrderListItem"
function CheckoutPage() {
    return (
        <div className="row">
            <div className="col-xs-12 col-md-8">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h5>Thông tin mua hàng</h5>
                        <FormInfoOrder></FormInfoOrder>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <CheckoutRadio></CheckoutRadio>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-4">
                <OrderListItem></OrderListItem>
            </div>
        </div>
    )
}
export { CheckoutPage }