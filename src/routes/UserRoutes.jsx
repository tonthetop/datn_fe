import {Route, Routes } from 'react-router-dom'
export const UserRoutes = () => {
    return (
        <div className="">
            <Routes>
                <Route path="order-history" element={<>order-history</>}></Route>
                <Route path="profile" element={<>profile</>}></Route>
            </Routes>
        </div>
    )
}