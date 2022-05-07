import './index.css'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import IncDecCounter from './IncDecCounter.jsx'
function DetailProduct() {
    return (
        <>
            <div class="">
                <div class="product-title p-title"><h3>[BQ6806-100] M NIKE BLAZER MID '77 VINTAGE</h3></div>
                <div class="product-price">
                    <h5 class="p-price ">2.990.000₫</h5>
                    <del></del>
                </div>
            </div>
            <span>Chưa có mô tả cho sản phẩm này!</span>
            <Form.Group className="my-2">
                <Form.Label >Size</Form.Label>
                <Form.Select aria-label="Mặc định">
                    <option>Mặc định</option>
                    <option value="1">41</option>
                    <option value="2">42</option>
                    <option value="3">43</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="my-2 ">
                <Form.Label>Số lượng</Form.Label>
                <div className="col-md-3">
                    <IncDecCounter></IncDecCounter>
                </div>
            </Form.Group>
            <Form.Group className="row mt-5">
                <Button variant="outline-dark col-md-4" >Thêm vào giỏ</Button>
                <div className="col-md-5 pt-2">
                    <span> hoặc </span><a class="read-more p-url" className="text-danger" href="/bq6806-100-m-nike-blazer-mid-77-vintage" role="button">Xem chi tiết</a>
                </div>
            </Form.Group>


        </>
    )
}
export default DetailProduct