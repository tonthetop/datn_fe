import ThumbsProduct from '../../components/ProductQuickView/ThumbsProduct'
import { CommentPlugin, LikeButton } from './FacebookItems'
import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useLocation, useParams } from 'react-router-dom'
import { productApi } from '../../api'
import './index.css'
import 'antd/dist/antd.css';
import { InputNumber, Radio, Button as ButtonAnt, Tabs } from 'antd';
import { ReconciliationOutlined, FormOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
function ProductDetailPage() {


    // fetch API va setProduct
    const { productId } = useParams()
    const [product, setProduct] = useState({
        name: '',
        productType: '',
        imgList: [],
        discountIds: [],
        productBySize: [],
        price: ''
    })
    useEffect(() => {
        async function fetchData() {
            const product = await productApi.get(productId)
            setProduct(product)
        }
        fetchData()
    }, [productId]);

    // Lấy các feild từ product
    const discount = product.discountIds[0]
    const [amountOfSize, setAmountOfSize] = useState()
    const optionSize = product.productBySize.map(item => {
        return (
            {
                label: item.size,
                value: item.size,
                amount: item.amount
            }
        )
    })
    //Láy value của size và số item khách hàng chọn
    const [valueSize, setValueSize] = useState();
    const [amountChoice, setAmountChoice] = useState()
    const onChangeSize = ({ target: { value } }) => {
        setValueSize(value);
        const item = optionSize.find(e => e.value === value)
        setAmountOfSize(item.amount)
        setAmountChoice(1)
    };

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
                        <div className="product-price d-flex align-items-center">
                            {!!discount ?
                                <div>
                                    <span style={{
                                        fontSize: "20px",
                                        fontWeight: "500"
                                    }} className="regular-price pe-2">{(product.price * (1 - discount.value / 100)).toLocaleString()}₫</span>

                                    <span className="discount-price ">{product.price.toLocaleString()}₫</span></div>
                                : <span style={{
                                    fontSize: "20px",
                                    fontWeight: "500"
                                }} className="regular-price px-1">{(product.price).toLocaleString()}₫</span>
                            }
                            <div className="ms-5">
                                <LikeButton></LikeButton>

                            </div>
                        </div>
                    </div>

                    <div className="product-detail-mid py-2 d-flex justify-content-between flex-column gap-2">
                        <span>Loại: {product.productType}</span>
                        <span>
                            Trạng thái:
                            <span style={{ color: "red", fontWeight: "bold" }}> {product.productBySize[0]?.size === "sold_out" ? "Hết hàng" : amountOfSize ? (amountOfSize + " sản phẩm") : "Còn hàng"}</span>
                        </span>
                        <span>Chưa có mô tả cho sản phẩm này</span>
                    </div>

                    <hr />
                    <Form.Group className="my-2">
                        <Form.Label className="me-5">Size</Form.Label>
                        <Radio.Group
                            options={optionSize.sort((a, b) => a.value - b.value)}
                            onChange={onChangeSize}
                            value={valueSize}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </Form.Group>
                    <Form.Group className="my-2" >
                        <Form.Label className="me-3">Số lượng</Form.Label>
                        <InputNumber min={1} max={amountOfSize} value={amountChoice} onChange={setAmountChoice} style={{ width: "70px" }}></InputNumber>

                    </Form.Group>
                    <Form.Group className="row mt-5">
                        <Button className="rounded-pill" variant="outline-dark col-md-4" >Thêm vào giỏ</Button>
                    </Form.Group>
                </div>
            </div>
            <div className="row product-detail-options my-4 p-3">
                <Tabs defaultActiveKey="3" size='large' type='line' className="">
                    <TabPane
                        tab={
                            <span >
                                <ReconciliationOutlined />
                                Mô tả sản phẩm
                            </span>
                        }
                        key="1"
                    >
                        <div className='tab-danhgia'>
                            <span>
                                {product.description ? product.description : "Chưa có mô tả cho sản phẩm này"}
                            </span>
                        </div>

                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <SettingOutlined />
                                Tab tùy chỉnh
                            </span>
                        }
                        key="2"
                    >
                        <div className='tab-danhgia'>
                            <span>
                                Chưa có nội dung
                            </span>
                        </div>
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <FormOutlined />
                                Bình luận
                            </span>
                        }
                        key="3"
                    >
                        <div className="tab-danhgia">
                            <CommentPlugin
                            ></CommentPlugin>
                        </div>
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <StarOutlined />
                                Đánh giá sản phẩm
                            </span>
                        }
                        key="4"
                    >
                        <div className="tab-danhgia">
                            <p>Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</p>
                            <ButtonAnt className="d-block" type="primary">Gửi đánh giả của bạn</ButtonAnt>
                        </div>
                    </TabPane>
                </Tabs>
            </div>

            <div className="row products-neighbor mb-3">
                <h1 className="text-uppercase text-center ">
                    <span className="title-banner border-dark ">
                        Sản phẩm liên quan
                    </span>
                </h1>
            </div>
        </>
    )
}
export { ProductDetailPage }