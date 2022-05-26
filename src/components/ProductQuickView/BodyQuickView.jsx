import ThumbsProduct from './ThumbsProduct.jsx'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';

function BodyQuickView({ product }) {
    const discount = product.discountIds[0]
    console.log("discount", product)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <ThumbsProduct imgList={product.imgList}></ThumbsProduct>
                </div>
                <div className="col-lg-7 col-md-6 pull-right">

                    <div className="">
                        <div className="product-title p-title"><h3>{product.name}</h3></div>
                        <div className="product-price">
                            {!!discount ?
                                <>
                                    <span style={{
                                        fontSize: "20px",
                                        fontWeight: "500"
                                    }} className="regular-price px-1">{(product.price * (1 - discount.value / 100)).toLocaleString()}₫</span>

                                    <span className="discount-price ">{product.price.toLocaleString()}₫</span></>
                                : <span style={{
                                    fontSize: "20px",
                                    fontWeight: "500"
                                }} className="regular-price px-1">{(product.price).toLocaleString()}₫</span>
                            }
                        </div>


                    </div>
                    <span>Chưa có mô tả cho sản phẩm này!</span>
                    <Form.Group className="my-2">
                        <Form.Label >Size</Form.Label>
                        <Form.Select aria-label="Mặc định" style={{ width: "120px" }}>
                            {product.productBySize.map(item => {
                                return (
                                    <option value={item.size}>{item.size}</option>
                                )
                            })
                            }
                        </Form.Select>

                    </Form.Group>
                    <Form.Group className="my-2 ">
                        <Form.Label>Số lượng</Form.Label>
                        <div className="col-md-3">
                            <InputNumber min={1} max={10} defaultValue={3} style={{ width: "120px" }}></InputNumber>
                        </div>
                    </Form.Group>
                    <Form.Group className="row mt-5">
                        <Button className="rounded-pill" variant="outline-dark col-md-4" >Thêm vào giỏ</Button>
                        <div className="col-md-5 pt-2">
                            <span> hoặc </span><Link className="text-danger" to={"/product-detail/" + product._id} role="button">Xem chi tiết</Link>
                        </div>
                    </Form.Group>
                </div>
            </div >
        </div >
    )
}
export default BodyQuickView