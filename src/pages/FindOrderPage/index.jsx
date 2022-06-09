import "./index.css";
import FormSearchOrder from "./FornSearchOrder";
import OrderInfo from "./OrderInfo";
import { useState } from "react";
import { orderApi } from '../../api'
import { useLoading } from "../../hooks/useLoading";
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
    const [showLoading, hideLoading] = useLoading();
    async function fetchData(data) {
        try {
            showLoading()
            const results = await orderApi.getOrderByEmailOrPhone(data)
            hideLoading()
            const orderInfos = results.map(e => {
                const status = e.orderStatus[e.orderStatus.length - 1].status;
                let deliveryStatus
                if (status === "SUCCESS") deliveryStatus = "ĐÃ VẬN CHUYỂN"
                else if (status === "ACCEPTED") deliveryStatus = "ĐANG VẬN CHUYỂN"
                else if (status === "PENDING") deliveryStatus = "CHƯA VẬN CHUYỂN"
                else deliveryStatus = "ĐÃ HỦY"
                const price = e.productList.reduce((acc, item) => {
                    const discountValue = item.discountValue ? item.discountValue : 0
                    return acc + item.price * (1 - discountValue / 100) * item.amount;
                }, 0).toLocaleString()
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
        } catch (error) {
            hideLoading()
            return
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let data
        if (showInput === "phone") data = { phone: phoneOrEmail.phone }
        else if (showInput === "email") data = { email: phoneOrEmail.email }
        else data = phoneOrEmail
        const orderInfos = await fetchData(data)
        if (orderInfos) setOrderInfos(orderInfos)
        else setOrderInfos([])
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
