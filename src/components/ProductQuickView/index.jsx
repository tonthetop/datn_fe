
import { Button, Modal,Container,Row,Col } from 'react-bootstrap';
import './index.css'
import BodyQuickView from './BodyQuickView.jsx'
function ProductQuickView(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter" className="w-100">
                    Thông tin sản phẩm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <BodyQuickView></BodyQuickView>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ProductQuickView