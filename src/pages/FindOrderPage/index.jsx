import "./index.css";
import FormSearchOrder from "./FornSearchOrder";
import OrderInfo from "./OrderInfo";
import { useState } from "react";
import { orderApi } from '../../api'
function FindOrderPage() {
    const [orderInfos, setOrderInfos] = useState([])
    const [showInput, setShowInput] = useState("phone");

    const handleClick = (e) => {
        setShowInput(e.target.value);
    };

    const [phoneOrEmail, setPhoneOrEmail] = useState({
        phone: '',
        email: ''
    })
    async function fetchData() {
        let data = phoneOrEmail
        if (phoneOrEmail.email == "") data = { phone: phoneOrEmail.phone }
        if (phoneOrEmail.phone == "") data = { email: phoneOrEmail.email }
        console.log(data)
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
                name: e.accountId,
                phone: "kkk",
                email: "kkk",
                orderDate: e.createdAt,
                orderAdress: e.deliveryAddress,
                paymentStatus: e.orderStatus[e.orderStatus.length - 1].description,
                deliveryStatus: deliveryStatus,
                totalPrice: price,
                totalAmount: amount,
            }
        })
        setOrderInfos(orderInfos)
        console.log("orderInfos: ", orderInfos)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("phoneOrEmail", phoneOrEmail)
        try {
            await fetchData()
        } catch (error) {
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
