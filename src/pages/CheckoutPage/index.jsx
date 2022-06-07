import FormInfoOrder from "./FormInfoOrder"
import './index.css'
import CheckoutRadio from "./CheckoutRadio"
import OrderListItem from "./OrderListItem"
import { useEffect, useState } from 'react'
function CheckoutPage() {
    const getInfoLegit = (allValues) => {
        let data = null
        if (Object.keys(allValues).length === 0) return data
        allValues.introduction = allValues.introduction ? allValues.introduction : 'default'
        const hasUndefined1 = Object.values(allValues).some(value => value === '' || value === undefined);
        if (!hasUndefined1) {
            allValues.city = allValues.city.split("_").pop()
            data = {
                accountId: allValues.accountId,
                deliveryAddress: `${allValues.street}, ${allValues.district}, ${allValues.city}`,
                deliveryTime: new Date(allValues.deliveryTime),
                receivePhone: allValues.phone,
                description: allValues.introduction === 'default' ? "" : allValues.introduction,
            }
        }
        return data
    }
    const [valueInfoOrder, setValueInfoOrder] = useState({})
    const [valuePayment, setValuePayment] = useState(null);
    const [checkedDelivery, setCheckedDelivery] = useState(false)
    const [bankCode, setBankCode] = useState("")
    useEffect(() => {
        if (getInfoLegit(valueInfoOrder)) { setValuePayment(1); setCheckedDelivery(true) }
        else { setValuePayment(); setCheckedDelivery(false) }
    }, [valueInfoOrder])

    let infoOrder = getInfoLegit(valueInfoOrder)
    if (valuePayment === 1) {
        infoOrder = { ...infoOrder, orderType: "COD" }
    } else if (valuePayment === 2) {
        infoOrder = { ...infoOrder, orderType: "PAYONL", bankCode:bankCode }
    }
    return (
        <div className="row">
            <div className="col-xs-12 col-md-8">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h5>Thông tin mua hàng</h5>
                        <FormInfoOrder
                            valueInfoOrder={valueInfoOrder}
                            setValueInfoOrder={setValueInfoOrder}
                        ></FormInfoOrder>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <CheckoutRadio
                            checkedDelivery={checkedDelivery}
                            setBankCode={setBankCode}
                            valuePayment={valuePayment}
                            setValuePayment={setValuePayment}
                        ></CheckoutRadio>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-4">
                <OrderListItem infoOrder={infoOrder}
                    checkedDelivery={checkedDelivery}></OrderListItem>
            </div>
        </div>
    )
}
export { CheckoutPage }