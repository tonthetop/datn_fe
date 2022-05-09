import './index.css'
import {Link} from 'react-router-dom'
function BannerProduct() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <div className="xxx-banner">
                        <Link to="/products/giay" title="">
                            <img src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/xxx_4.jpg?1649394240577" alt="Banner" />
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="xxx-banner">
                        <Link to="/products/dep" title="">
                            <img src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/xxx_5.jpg?1649394240577" alt="Banner" />
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="xxx-banner">
                        <Link to="/products/phu-kien" title="">
                            <img src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/xxx_6.jpg?16493942405777" alt="Banner" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default BannerProduct