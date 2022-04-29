import './index.css'
function OrderInfo(props) {
    return (
        <div className="order-info row">
            <div className="col-md-7">
                <h4><span className="thong-tin-ma-don-hang">Mã đơn hàng</span>: #{props.id}  </h4> <br />
                <span className="thong-tin-ho-va-ten-khach-hang">Họ và tên khách hàng</span>: {props.name}<br />
                <span className="thong-tin-so-dien-thoai">Số điện thoại</span>: <span className="order-phone ng-binding">0905803676</span><br />
                <span className="thong-tin-email">Email</span>: <span className="order-email ng-binding">{props.email}</span><br />
                <span className="thong-tin-ngay-mua">Ngày mua</span>:  <span className="ng-binding">{props.orderDate}</span><br />
                <span className="thong-tin-dia-chi-giao">Địa chỉ giao hàng</span>: {props.orderAdress}
                <br />
                <br />
                <br />
                <span style={{ color: 'red' }}>
                    <span className="thong-tin-trang-thai-thanh-toan">Trạng thái thanh toán</span>: {props.paymentStatus}<br />
                </span>
                <span style={{ color: 'red' }}>
                    <span className="thong-tin-trang-thai-giao-hang">Trạng thái giao hàng</span>:   {props.deliveryStatus}<br />
                </span>
                <p></p>
            </div >
            <div className="col-md-5">
                <h4>Giá trị đơn hàng</h4>
                <p style={{fontSize:"28px"}} className>
                    <span style={{ fontSize: "28px", color: "#FF0000" }} >{props.totalPrice}</span>
                    <span style={{ fontSize: "18px", color: "#000000" }} ><span className="thong-tin-don-vi-tien-te">VNĐ</span></span>
                </p>
                <br />
                <p style={{fontSize:"28px"}}>
                    <span style={{ fontSize: "18px", color: "#333333" }} className="thong-tin-so-luong-san-pham">Số lượng sản phẩm</span>
                    <span style={{ fontSize: "28px", color: "#FF0000" }} > {props.totalAmount}</span>
                </p>
            </div >
        </ div >
    )
}
export default OrderInfo;