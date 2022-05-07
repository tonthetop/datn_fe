import React from "react";
import { useRef, useState, useEffect } from "react"
import './index.css'
import {Field} from 'formik'
const SideBarItemCheckbox = (props) => {

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
                    <span>{props.title}</span>
                </h5>
                <i className={`fa fa-angle-${iconState ? 'up' : 'down'}`} onClick={handleChangeIcon}></i>
            </div>
            <div className="aside-content overflow-hidden" ref={dropDownItem} style={{ display: "block" }}>
                <nav className="">
                    {props.content.map(item => (
                        <div key={item.key} className="d-flex align-items-center gap-3">
                            <Field type="radio"  title=""  value={item.value} name={props.queryKey} className="form-check-input"></Field>
                            <label htmlFor={props.queryKey} className="nav-link link-dark">
                                {item.content}
                            </label>
                        </div>
                    ))
                    }

                </nav>
            </div>
        </div >
    );
};
export default SideBarItemCheckbox; //
