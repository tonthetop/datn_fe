import ThumbsProduct from '../../components/ProductQuickView/ThumbsProduct'
import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css';
import { InputNumber, Radio } from 'antd';

function ProductDetailPage() {
    const product = {
        "_id": "62862d42efdd1afa73b3e054",
        "name": "[CN9677-102] W NIKE VICTORI ONE SLIDE 'WHITE SUNSET/PULSE BLACK'",
        "brand": "NIKE",
        "productType": "DEP",
        "imgList": [
            "https://bizweb.dktcdn.net/thumb/grande/100/377/398/products/latest-nike-wmns-benassi-jdi-pink-white.jpg?v=1649818593000",
            "https://bizweb.dktcdn.net/thumb/grande/100/377/398/products/sh1293-1.jpg?v=1649818576000"
        ],
        "price": 1050000,
        "discountIds": [
            {
                "_id": "627dce1c67a9e6cf06861a99",
                "code": "A60L33VEFBE",
                "value": 20,
                "timeBegin": "2022-05-21T00:00:00.000Z",
                "timeEnd": "2022-05-28T00:00:00.000Z",
                "createdAt": "2022-05-13T03:18:52.689Z",
                "__v": 0,
                "deleted": false,
                "updatedAt": "2022-05-26T07:52:06.671Z"
            }
        ],
        "productBySize": [
            {
                "size": "38",
                "amount": 2,
                "_id": "62873da83e8fc6ec2fb01800"
            }
            , {
                "size": "39",
                "amount": 2,
                "_id": "62873da83e8fc6ec2fb01800"
            }, {
                "size": "36",
                "amount": 2,
                "_id": "62873da83e8fc6ec2fb01800"
            }
        ],
        "__v": 2,
        "createdAt": "2022-05-20T07:05:12.239Z",
        "deleted": false,
        "updatedAt": "2022-05-25T08:23:50.254Z"
    }
    const discount = product.discountIds[0]


    const [valueSize, setvalueSize] = useState();
    const onChangeSize = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setvalueSize(value);
    };
    const optionSize = product.productBySize.map(item => {
        return (
            {
                label: item.size,
                value: item.size,
            }
        )
    })

    return (
        <>
            <div className="row product-detail-main">
                <div className="col-xs-12 col-md-6">
                    <ThumbsProduct imgList={product.imgList}></ThumbsProduct>

                </div>
                <div className="col-xs-12 col-md-6 px-4">
                    <div className="product-detail-top">
                        <div className="product-title p-title"><h3
                            style={{ fontWeight: "normal" }}
                        >{product.name}</h3>
                        </div>
                        <div className="product-price">
                            {!!discount ?
                                <>
                                    <span style={{
                                        fontSize: "20px",
                                        fontWeight: "500"
                                    }} className="regular-price pe-2">{(product.price * (1 - discount.value / 100)).toLocaleString()}₫</span>

                                    <span className="discount-price ">{product.price.toLocaleString()}₫</span></>
                                : <span style={{
                                    fontSize: "20px",
                                    fontWeight: "500"
                                }} className="regular-price px-1">{(product.price).toLocaleString()}₫</span>
                            }
                        </div>
                    </div>

                    <div className="product-detail-mid py-2 d-flex justify-content-between flex-column gap-2">
                        <span>Loại: {product.productType}</span>
                        <span>Trạng thái: {product.productBySize[0].size === "sold_out" ? "Hết hàng" : "Còn hàng"}</span>
                        <span>Chưa có mô tả cho sản phẩm này</span>
                    </div>

                    <hr />
                    <Form.Group className="my-2">
                        <Form.Label className="me-3">Size</Form.Label>
                        {/* <Form.Select aria-label="Mặc định" style={{ width: "120px" }}>
                            {product.productBySize.map(item => {
                                return (
                                    <option value={item.size}>{item.size}</option>
                                )
                            })
                            }
                        </Form.Select> */}
                        <Radio.Group
                            options={optionSize}
                            onChange={onChangeSize}
                            value={valueSize}
                            optionType="button"
                            buttonStyle="solid"
                        />
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
            </div>
            <div className="row product-detail-options"></div>
            <div className="row products-neighbor"></div>

        </>
    )
}
export { ProductDetailPage }