import React from 'react'
import './index.css'
import SideBarItemCategory  from './SideBarItemCategory/index.jsx'
const SideBar = () => {
    return (
        <div className="side-bar">
            <SideBarItemCategory></SideBarItemCategory>
            <SideBarItemCategory></SideBarItemCategory>
            <SideBarItemCategory></SideBarItemCategory>

        </div>
    )
}

export default SideBar