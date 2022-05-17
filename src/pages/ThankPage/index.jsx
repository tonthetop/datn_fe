import './index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ThankPage() {
    return (
        <div className="thank-page-wrapper container py-5">
            <div className="row">
                <div className="col-xs-12 col-md-7">
                    <div className="row mb-4">
                        <div className="logo-tick col-2">
                            <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div className="col-10">
                            <h5 className="">Cảm ơn bạn đã đặt hàng</h5>
                            <p className="">
                                Một email xác nhận đã được gửi tới tuanak691@gmail.com.
                                <br />
                                Xin vui lòng kiểm tra email của bạn
                            </p>
                        </div>
                    </div>
                    <div className="row thong-tin-mua-hang ">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <h5>Thông tin mua hàng</h5>
                                <p>Lê Anh Tuấn</p>
                                <p>tuanak691@gmail.com</p>
                                <p>0905803676</p>
                            </div>
                            <div class="col-md-6">
                                <h5>Địa chỉ nhận hàng</h5>
                                <p>Lê Anh Tuấn</p>
                                <p>7</p>
                                <p>Thị trấn Đồi Ngô, Huyện Lục Nam, Bắc Giang</p>
                                <p>0905803676</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <h5>Phương thức thanh toán</h5>
                                <p>Thanh toán khi giao hàng (COD)</p>
                            </div>
                            <div class="col-md-6">
                                <h5>Phương thức vận chuyển</h5>
                                <p>Giao hàng tận nơi</p>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <Link to="/" className="">
                            <Button className="rounded-pill text-uppercase my-3 py-2" variant="outline-dark col-md-4" >
                                Tiêp tục mua sắm
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aliquam beatae maxime nostrum corrupti deleniti a labore dolorem consequuntur dolore magni tempora eius officiis ipsum, quidem repudiandae alias, fugiat at.
                </div>
            </div>
        </div>
    )
}
export { ThankPage }