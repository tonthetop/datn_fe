import "./index.css";
import FormSearchOrder from "./FornSearchOrder";
import OrderInfo from "./OrderInfo";
import { useState } from "react";
import { orderApi } from '../../api'
function FindOrderPage() {
    const [orderInfos, setOrderInfos] = useState([])
    const [showInput, setShowInput] = useState("phone");

    const handleClick = (e) => {
        console.log("ahndleClick", e.target.value)
        setShowInput(e.target.value);
    };

    const [phoneOrEmail, setPhoneOrEmail] = useState({
        phone: '',
        email: ''
    })
    async function fetchData(data) {
        const results = await orderApi.getOrderByEmailOrPhone(data)
        const orderInfos = results.map(e => {
            const status = e.orderStatus[e.orderStatus.length - 1].status;
            let deliveryStatus
            if (status === "SUCCESS") deliveryStatus = "ĐÃ VẬN CHUYỂN"
            else if (status === "ACCEPTED") deliveryStatus = "ĐANG VẬN CHUYỂN"
            else if (status === "PENDING") deliveryStatus = "CHƯA VẬN CHUYỂN"
            else deliveryStatus = "ĐÃ HỦY"
            const price = e.productList.reduce((acc, item) => {
                return acc + item.price * (1 - item.discountValue / 100) * item.amount;
            }, 0)
            const amount = e.productList.reduce((acc, item) => {
                return acc + item.amount;
            }, 0)
            return {
                id: e._id,
                name: e.accountId.name,
                phone: e.accountId.phone,
                email: e.accountId.email,
                orderDate: e.createdAt,
                orderAdress: e.deliveryAddress,
                paymentStatus: e.orderStatus[e.orderStatus.length - 1].description,
                deliveryStatus: deliveryStatus,
                totalPrice: price,
                totalAmount: amount,
            }
        })
        return orderInfos
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let data
        if (showInput === "phone") data = { phone: phoneOrEmail.phone }
        else if (showInput === "email") data = { email: phoneOrEmail.email }
        else data = phoneOrEmail
        console.log("data", data)
        try {
            const orderInfos = await fetchData(data)
            setOrderInfos(orderInfos)
        } catch (error) {
            setOrderInfos([])
            console.log(error)
        }
    }
    return (
        <div className="tim-kiem-wrapper">
            <div className="row">
                <div className="col-md-5">
                    <div className="container">
                        <FormSearchOrder
                            showInput={showInput}
                            handleClick={handleClick}
                            phoneOrEmail={phoneOrEmail}
                            setPhoneOrEmail={setPhoneOrEmail}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
                <div className="col-md-7 ">
                    <div className="container">
                        {
                            orderInfos.map(e => {
                                return (
                                    <OrderInfo {...e}></OrderInfo>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export { FindOrderPage };
