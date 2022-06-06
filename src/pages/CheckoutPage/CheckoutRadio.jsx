import { Radio, Input, Space } from 'antd';
import { useState } from 'react'

function CheckoutRadio({checkedDelivery,valuePayment,setValuePayment}) {
    const onChange = (e) => {
        setValuePayment(e.target.value);
    };
    return (
        <>
            <div>
                <h5>Vận chuyển</h5>
                <div className="checkout-radio-wrapper">
                    <div className="payment-radio d-flex justify-content-between">
                        <Radio checked={checkedDelivery}>Giao hàng tận nơi</Radio>
                        <span> Miễn phí</span>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <h5>Thanh toán</h5>

                <Radio.Group className="checkout-radio-wrapper checkout-radio-wrapper-last" onChange={onChange} value={valuePayment}>
                    <div className="payment-radio position-relative">
                        <div className="d-flex justify-content-between ">
                            <Radio value={1} className="radio-button-custom align-items-center">
                                <div>
                                    Thanh toán khi giao hàng (COD)
                                </div>
                                <div className='mt-2'>
                                    Bạn chỉ thanh toán khi nhận được hàng
                                </div>
                            </Radio>
                            <div className="fs-4 d-flex">
                                <i className="fa-solid fa-money-bill-transfer"></i>
                            </div>
                        </div>
                    </div>
                    <div className="payment-radio ">
                        <div className="d-flex justify-content-between">
                            <Radio value={2} className="align-items-center radio-button-custom-2">Thanh toán qua VN-Pay (NCB)</Radio>
                            <div className="fs-4">
                                <i className="fa-solid fa-money-check"></i>
                            </div>
                        </div>
                        <div className="mt-4 mb-2">
                            <span>
                                Bạn chỉ thanh toán khi nhận được hàng
                            </span>
                        </div>
                    </div>
                    {/* <Radio value={4}>
                                More...
                                {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                            </Radio> */}
                </Radio.Group>
            </div></>
    )
}
export default CheckoutRadio