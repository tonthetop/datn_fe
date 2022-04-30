import React from "react";
import { useRef, useState, useEffect } from "react"
import CategorySubItem from './CategorySubItem.jsx'
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
                <h4 className="title-head margin-top-0 ">
                    <span>Danh mục sản phẩm</span>
                </h4>
                <i className={`fa fa-angle-${iconState ? 'up' : 'down'}`} onClick={handleChangeIcon}></i>
            </div>
            <div className="aside-content overflow-hidden" ref={dropDownItem} style={{ display: "block" }}>
                <nav className="">
                    <div className>
                        <CategorySubItem></CategorySubItem>
                        <CategorySubItem></CategorySubItem>
                        <li className="d-flex align-items-center justify-content-between">
                            <a className="nav-link" title="Phụ kiện" href="/phu-kien-1">
                                Phụ kiện
                            </a>
                        </li>
                    </div>
                </nav>
            </div>
        </div >
    );
};
export default SideBarItemCategory; //
