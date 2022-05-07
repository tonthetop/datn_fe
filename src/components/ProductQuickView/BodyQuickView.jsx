import ThumbsProduct from './ThumbsProduct.jsx'
import DetailProduct from './DetailProduct.jsx'
function BodyQuickView() {
    return (
        <div class="container-fluid">
            <div class="row">
                    <div class="col-lg-5 col-md-6">
                    <ThumbsProduct></ThumbsProduct>
                    </div>
                    <div class="col-lg-7 col-md-6 pull-right">
                    <DetailProduct></DetailProduct>
                    </div>
            </div>
        </div>
    )
}
export default BodyQuickView