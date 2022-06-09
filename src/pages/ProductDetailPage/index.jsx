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
import { useDispatch } from 'react-redux'
import { cartsAction } from '../../redux/actions'
import { toast } from 'react-toastify'
import { useLoading } from '../../hooks/useLoading'
const { TabPane } = Tabs;
function ProductDetailPage() {
    const { productId } = useParams()
    const [product, setProduct] = useState({
        name: '',
        productType: '',
        imgList: [],
        discountIds: [],
        productBySize: [{}],
        price: ''
    })
    //Láy value của size và số item khách hàng chọn
    const [subInfo, setSubInfo] = useState(
        {
            size: "",
            amount: "",
            amountOfSize: ""
        }
    )
    const handleChangeSubInfoSize = ({ target: { value } }) => {
        const item = optionSize.find(e => e.value === value)
        setSubInfo(prev => {
            return { ...prev, size: value, amount: 0, amountOfSize: item.amount }
        })
    };
    const handleChangeSubInfoAmount = (value) => {
        setSubInfo(prev => {
            return { ...prev, amount: value }
        })
    }
    // fetch API va setProduct
    const [showLoading, hideLoading] = useLoading()
    useEffect(() => {
        async function fetchData() {
            try {
                showLoading()
                const product = await productApi.get(productId)
                hideLoading()
                setProduct(product)
                setSubInfo({
                    size: product.productBySize[0].size,
                    amount: 0,
                    amountOfSize: product.productBySize[0].amount
                })
            } catch (error) {
                hideLoading()
                return
            }
        }
        fetchData()
    }, [productId]);

    // Lấy các feild từ product
    const discount = product.discountIds[0]
    const optionSize = product.productBySize.map(item => {
        return (
            {
                label: item.size,
                value: item.size,
                amount: item.amount
            }
        )
    })

    //dispatch action
    const dispatch = useDispatch()
    const handleAddCart = () => {
        if (subInfo.amount === 0) return toast.warning("Bạn chưa nhập số lượng!")
        const cart = {
            _id: product._id,
            name: product.name,
            img: product.imgList[1],
            price: product.price,
            size: subInfo.size,
            amount: subInfo.amount,
            discountValue: discount ? discount.value : '',
            discountCode: discount ? discount.code : '',
            discountId: discount ? discount._id : ''
        }
        const action = cartsAction.saveCart(cart)
        dispatch(action)
    }
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
                            <span style={{ color: "red", fontWeight: "bold" }}> {subInfo.amountOfSize === 0 ? "Hết hàng" : subInfo.amountOfSize + " sản phẩm"}</span>
                        </span>
                        <span>Chưa có mô tả cho sản phẩm này</span>
                    </div>

                    <hr />
                    <Form.Group className="my-2">
                        <Form.Label className="me-5">Size</Form.Label>
                        <Radio.Group
                            options={optionSize.sort((a, b) => a.value - b.value)}
                            onChange={handleChangeSubInfoSize}
                            value={subInfo.size}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </Form.Group>
                    <Form.Group className="my-2" >
                        <Form.Label className="me-3">Số lượng</Form.Label>
                        <InputNumber min={0} max={subInfo.amountOfSize} value={subInfo.amount} onChange={handleChangeSubInfoAmount} style={{ width: "70px" }}></InputNumber>

                    </Form.Group>
                    <Form.Group className="row mt-5">
                        <Button className="rounded-pill" onClick={handleAddCart} variant="outline-dark col-md-4" >Thêm vào giỏ</Button>
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