import { Table, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RowItem() {
    return (
        <tr>
            <td className="product align-middle">
                <div className="thumb-cart d-flex">
                    <Link to="/575441-161-k-nike-jordan-1-retro-high-og-heritage?variantid=64976772" title="[575441-161] K NIKE JORDAN 1 RETRO HIGH OG 'HERITAGE'">
                        <img className="w-75" src="//bizweb.dktcdn.net/thumb/medium/100/377/398/products/air-jordan-1-retro-high-og-herit-1-7868da7b023a45f6837ea7c2e1326152-1024x1024.png?v=1652338449123" alt="[575441-161] K NIKE JORDAN 1 RETRO HIGH OG 'HERITAGE'" />
                    </Link>
                    <div className="">
                        <Link to="/575441-161-k-nike-jordan-1-retro-high-og-heritage?variantid=64976772" title="[575441-161] K NIKE JORDAN 1 RETRO HIGH OG 'HERITAGE'" className="text-decoration-none text-dark">

                            <h6>[575441-161] K NIKE JORDAN 1 RETRO HIGH OG 'HERITAGE'</h6>
                        </Link>
                        <div className="">36</div>
                        <div>4.850.000₫</div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <ButtonGroup aria-label="Basic example" className="">
                    <Button variant="white">
                        <i class="fa-solid fa-minus"></i>
                    </Button>
                    <span className="py-2">36</span>
                    <Button variant="white">
                        <i class="fa-solid fa-plus"></i>
                    </Button>
                </ButtonGroup>
            </td>
            <td className="align-middle">
                <span>9.700.000₫</span>
            </td>
            <td className="align-middle">
                <Button variant="light">
                    <i class="fa-solid fa-trash-can"></i>
                </Button>
            </td>
        </tr>
    )
}
export default RowItem