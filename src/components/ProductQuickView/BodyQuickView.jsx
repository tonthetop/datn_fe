import ThumbsProduct from './ThumbsProduct.jsx'
import DetailProduct from './DetailProduct.jsx'
function BodyQuickView() {
    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col-lg-5 col-md-6">
                    <ThumbsProduct></ThumbsProduct>
                    </div>
                    <div className="col-lg-7 col-md-6 pull-right">
                    <DetailProduct></DetailProduct>
                    </div>
            </div>
        </div>
    )
}
export default BodyQuickView