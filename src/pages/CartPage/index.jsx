import "./index.css";
import { Table, ButtonGroup, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RowItem from './RowItem'
function CartPage() {
    const showEmptyCard = true;

    return (
        <div className="cart-page-wrapper py-5">
            <div className="container">
                <div className="row pb-3">
                    <h2>
                        Giỏ hàng
                    </h2>
                </div>
                {showEmptyCard ?
                    <div className="text-center">
                        <div class="img text-center">
                            <img src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/empty_cart.png?1649394240577" alt="Không có sản phẩm nào trong giỏ hàng của bạn" />
                        </div>
                        <p>
                            Không có sản phẩm nào trong giỏ hàng của bạn
                        </p>
                        <Link to="/" className="">
                            <Button className="rounded-pill text-uppercase my-3 py-2" variant="outline-dark col-md-4" >
                                Tiêp tục mua sắm
                            </Button>
                        </Link>
                    </div>

                    :

                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12 listItem">
                            <Table striped bordered hover>
                                <thead>
                                    <tr className="text-center">
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá thành</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody className="border-top-0">
                                    <RowItem></RowItem>
                                    <RowItem></RowItem>
                                </tbody>
                            </Table>
                            <Link to="/" className="">
                                <Button className="rounded-pill text-uppercase my-3 py-2" variant="outline-dark col-md-4" >
                                    Tiêp tục mua sắm
                                </Button>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12 listInfo">
                            <Table bordered>
                                <thead>
                                    <tr className="text-center">
                                        <th>Tổng tiền</th>
                                        <th>35.740.000₫</th>
                                    </tr>
                                </thead>
                                <tbody className="border-top-0">
                                    <tr className="text-center">
                                        <td colSpan={2}>
                                            <Link to="/checkout" className="">
                                                <Button className="rounded-pill text-uppercase w-75 my-3 py-2" variant="outline-dark col-md-4" >
                                                    Thanh toán
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                }


            </div>
        </div>
    );
}
export { CartPage };
