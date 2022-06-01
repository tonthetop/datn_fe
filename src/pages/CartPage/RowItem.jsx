import { Table, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { InputNumber } from 'antd'
import { useDispatch } from 'react-redux'
import { cartsAction } from '../../redux/actions'
function RowItem({ product }) {
    const dispatch = useDispatch();
    const priceOrigin = product.discountValue !== "" ? product.price * (1 - product.discountValue / 100) : product.price;
    const [priceTotal, setPriceTotal] = useState(priceOrigin * product.amount)
    const onChangeAmount = (value) => {
        setPriceTotal(priceOrigin * value)
        const action = cartsAction.changeAmountCart({ _id: product._id, size: product.size, amount: value });
        dispatch(action)
    };
    const handleClickDelete = () => {
        const action = cartsAction.deleteCart(product);
        dispatch(action)

    }
    return (
        <>
            <td className="product align-middle " style={{width:"65%"}}>
                <div className="thumb-cart d-flex">
                    <Link to={`/product-detail/${product._id}`} title={product.name}>
                        <img style={{
                            height: "100px",
                            width: "100px"
                        }} src={product.img} alt={product.name} />
                    </Link>
                    <div className="ps-4">
                        <Link to={`/product-detail/${product._id}`} title={product.name} className="text-decoration-none text-dark">
                            <h6>{product.name}</h6>
                        </Link>
                        <div className="">{product.size}</div>
                        <div className="product-price">
                            {product.discountValue !== "" ?
                                <>
                                    <span style={{
                                        fontSize: "16px",
                                        fontWeight: "500"
                                    }} className="">{(product.price * (1 - product.discountValue / 100)).toLocaleString()}₫</span>

                                    <span className="discount-price ">{product.price.toLocaleString()}₫</span></>
                                : <span style={{
                                    fontSize: "16px",
                                    fontWeight: "500"
                                }} className="">{(product.price).toLocaleString()}₫</span>
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <InputNumber min={1} max={10} size="middle" defaultValue={product.amount} onChange={onChangeAmount} />
            </td>
            <td className="align-middle">
                <span>{priceTotal.toLocaleString()}₫</span>
            </td>
            <td className="align-middle">
                <Button onClick={handleClickDelete} variant="light">
                    <i className="fa-solid fa-trash-can"></i>
                </Button>
            </td>
        </>
    )
}
export default RowItem