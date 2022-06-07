import { Radio, Input, Space } from 'antd';
import { useState } from 'react'

function CheckoutRadio({ checkedDelivery, setBankCode, valuePayment, setValuePayment }) {
    const onChange = (e) => {
        setValuePayment(e.target.value);
    };
    const handleChangeBankCode = (e) => {
        setBankCode(e.target.value)
    }
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
                            <Radio checked={valuePayment === 1} value={1} className="radio-button-custom align-items-center">
                                <div>
                                    Thanh toán khi giao hàng (COD)
                                </div>
                            </Radio>
                            <div className="fs-4 d-flex">
                                <i className="fa-solid fa-money-bill-transfer"></i>
                            </div>
                        </div>
                        {(valuePayment === 1) &&
                            <div className="mt-4 mb-2 form-control">
                                Bạn chỉ thanh toán khi nhận được hàng
                            </div>
                        }
                    </div>
                    <div className="payment-radio ">
                        <div className="d-flex justify-content-between">
                            <Radio checked={valuePayment === 2} value={2} className="align-items-center radio-button-custom-2">Thanh toán qua VN-Pay</Radio>
                            <div className="fs-4">
                                <i className="fa-solid fa-money-check"></i>
                            </div>
                        </div>
                        {(valuePayment === 2) &&
                            <div className="mt-4 mb-2">
                                <select name="bankcode" onChange={handleChangeBankCode} id="bankcode" class="form-control">
                                    <option value="">Chọn ngân hàng </option>
                                    <option value="MBAPP">Ung dung MobileBanking</option>
                                    <option value="VNPAYQR">VNPAYQR</option>
                                    <option value="VNBANK">LOCAL BANK</option>
                                    <option value="IB">INTERNET BANKING</option>
                                    <option value="ATM">ATM CARD</option>
                                    <option value="INTCARD">INTERNATIONAL CARD</option>
                                    <option value="VISA">VISA</option>
                                    <option value="MASTERCARD"> MASTERCARD</option>
                                    <option value="JCB">JCB</option>
                                    <option value="UPI">UPI</option>
                                    <option value="VIB">VIB</option>
                                    <option value="VIETCAPITALBANK">VIETCAPITALBANK</option>
                                    <option value="SCB">Ngan hang SCB</option>
                                    <option value="NCB">Ngan hang NCB</option>
                                    <option value="SACOMBANK">Ngan hang SacomBank  </option>
                                    <option value="EXIMBANK">Ngan hang EximBank </option>
                                    <option value="MSBANK">Ngan hang MSBANK </option>
                                    <option value="NAMABANK">Ngan hang NamABank </option>
                                    <option value="VNMART"> Vi dien tu VnMart</option>
                                    <option value="VIETINBANK">Ngan hang Vietinbank  </option>
                                    <option value="VIETCOMBANK">Ngan hang VCB </option>
                                    <option value="HDBANK">Ngan hang HDBank</option>
                                    <option value="DONGABANK">Ngan hang Dong A</option>
                                    <option value="TPBANK">Ngân hàng TPBank </option>
                                    <option value="OJB">Ngân hàng OceanBank</option>
                                    <option value="BIDV">Ngân hàng BIDV </option>
                                    <option value="TECHCOMBANK">Ngân hàng Techcombank </option>
                                    <option value="VPBANK">Ngan hang VPBank </option>
                                    <option value="AGRIBANK">Ngan hang Agribank </option>
                                    <option value="MBBANK">Ngan hang MBBank </option>
                                    <option value="ACB">Ngan hang ACB </option>
                                    <option value="OCB">Ngan hang OCB </option>
                                    <option value="IVB">Ngan hang IVB </option>
                                    <option value="SHB">Ngan hang SHB </option>
                                </select>
                            </div>
                        }
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