import { Link, Route, Routes } from 'react-router-dom'
export const AdminRoutes = () => {
    return (
        <div className="">
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/product">product</Link>
                    </li>
                    <li>
                        <Link to="/admin/order">order</Link>
                    </li>
                    <li>
                        <Link to="/admin/discount">discount</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="product" element={<>product</>}></Route>
                <Route path="order" element={<>order</>}></Route>
                <Route path="discount" element={<>discount</>}></Route>
            </Routes>
        </div>
    )
}