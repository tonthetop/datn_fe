import FormInfoOrder from "./FormInfoOrder"
import './index.css'
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
                        <h5>Vận chuyển</h5>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-4">
                form 3
            </div>
        </div>
    )
}
export { CheckoutPage }