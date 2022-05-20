import "./index.css";
import FormSearchOrder from "./FornSearchOrder";
import OrderInfo from "./OrderInfo";
import { useState } from "react";

function FindOrderPage() {
    const fakeInfo = {
        id: 2255,
        name: "Lê Anh Tuấn",
        phone: "0905803676",
        email: "tuanak691@gmail.com",
        orderDate: "21/04/2022",
        orderAdress: "Quận Sơn Trà , Đà Nẵng",
        paymentStatus: "Chờ thanh toán",
        deliveryStatus: "Chưa vận chuyển",
        totalPrice: "12.270.000",
        totalAmount: "5",
    };
    const [showInput, setShowInput] = useState("phone");

    const handleClick = (e) => {
        setShowInput(e.target.value);
    };

    return (
        <div className="tim-kiem-wrapper">
            <div className="row">
                <div className="col-md-5">
                    <div className="container">
                        <FormSearchOrder
                            showInput={showInput}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
                <div className="col-md-7 ">
                    <div className="container">
                        <OrderInfo {...fakeInfo}></OrderInfo>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { FindOrderPage };
