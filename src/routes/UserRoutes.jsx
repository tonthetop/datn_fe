import { Route, Routes } from 'react-router-dom'
import * as pages from '../pages'
export const UserRoutes = () => {
    return (
        <div className="">
            <Routes>
                <Route path="profile" element={<>profile</>}></Route>
                <Route path="order-history" element={<>order-history</>}></Route>
            </Routes>
        </div>
    )
}