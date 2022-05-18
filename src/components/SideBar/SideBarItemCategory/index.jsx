import React from "react";
import { useRef, useState, useEffect } from "react"
import CategorySubItem from './CategorySubItem.jsx'
import {Link} from 'react-router-dom'
import './index.css'
const SideBarItemCategory = () => {
    const [iconState, setIconState] = useState(true)
    const dropDownItem = useRef()
    let originHeight = useRef();
    useEffect(() => {
        originHeight.current = dropDownItem.current.clientHeight
        dropDownItem.current.style.height = originHeight.current + "px";
    }, [])
    const handleChangeIcon = () => {
        setIconState(prev => !prev)
        if (!iconState) { dropDownItem.current.style.height = originHeight.current + "px"; }
        else dropDownItem.current.style.height = "0px";
    }
    return (
        <div className="side-bar-item">
            <div className="aside-title d-flex justify-content-between align-items-center">
                <h5 className="title-head margin-top-0 ">
                    <span>DANH MỤC SẢN PHẨM</span>
                </h5>
                <i className={`fa fa-angle-${iconState ? 'up' : 'down'}`} onClick={handleChangeIcon}></i>
            </div>
            <div className="aside-content overflow-hidden" ref={dropDownItem} style={{ display: "block" }}>
                <nav className="">
                    <div className>
                        <CategorySubItem title="DÉP" name="dep"></CategorySubItem>
                        <CategorySubItem title="GIÀY" name="giay"></CategorySubItem>
                        <li className="d-flex align-items-center justify-content-between">
                            <Link className="nav-link link-dark" title="Phụ kiện" to="/category/phukien">
                                Phụ kiện
                            </Link>
                        </li>
                    </div>
                </nav>
            </div>
        </div >
    );
};
export default SideBarItemCategory;
