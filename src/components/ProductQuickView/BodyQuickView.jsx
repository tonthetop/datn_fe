import ThumbsProduct from './ThumbsProduct.jsx'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css';
import { InputNumber, Select } from 'antd';

function BodyQuickView({ product }) {
    product.productBySize.map((item) => {
        console.log(item.size)
    })
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
                            <h5 className="p-price ">{product.price}</h5>
                            <del></del>
                        </div>
                    </div>
                    <span>Chưa có mô tả cho sản phẩm này!</span>
                    <Form.Group className="my-2">
                        <Form.Label >Size</Form.Label>
                        <Form.Select aria-label="Mặc định" style={{ width:"120px"}}>
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
                            <InputNumber min={1} max={10} defaultValue={3} style={{ width:"120px"}}></InputNumber>
                        </div>
                    </Form.Group>
                    <Form.Group className="row mt-5">
                        <Button className="rounded-pill" variant="outline-dark col-md-4" >Thêm vào giỏ</Button>
                        <div className="col-md-5 pt-2">
                            <span> hoặc </span><Link className="text-danger" to="/bq6806-100-m-nike-blazer-mid-77-vintage" role="button">Xem chi tiết</Link>
                        </div>
                    </Form.Group>
                </div>
            </div>
        </div >
    )
}
export default BodyQuickView