import React, { memo } from "react";
import { useRef, useState, useEffect } from "react"
import { useLocation, useParams } from 'react-router-dom'
import { Field, useFormikContext } from 'formik'
const SideBarItemCheckbox = ({props,secondBinding}) => {
    const formik = useFormikContext()
    const [hideIconDrop, setHideIconDrop] = useState(true)
    const dropDownItem = useRef()
    let originHeight = useRef();

    const newLocation = useLocation()
    const { categoryId } = useParams()
    const currentLocation = useRef({
        location: newLocation,
        categoryId: categoryId
    })
    const [valueRadio, setValueRadio] = useState('')
    useEffect(() => {
        if (categoryId !== currentLocation.current.categoryId) {
            currentLocation.current.location = newLocation
            currentLocation.current.categoryId = categoryId
            setValueRadio('')
        }
    }, [newLocation])
    useEffect(() => {
        originHeight.current = dropDownItem.current.clientHeight
        dropDownItem.current.style.height = originHeight.current + "px";
    }, [])
    const handleChangeIcon = () => {
        //hideIconDrop la false
        if (!hideIconDrop) { dropDownItem.current.style.height = originHeight.current + "px"; }
        //hideIconDrop la true
        else dropDownItem.current.style.height = "0px";
        setHideIconDrop(prev => !prev)
    }
    const handleRadioChange = (e) => {
        setValueRadio(e.target.value)
        formik.handleChange(e)
        formik.submitForm()
    }

    return (
        <div className="side-bar-item">
            <div className="aside-title d-flex justify-content-between align-items-center">
                <h5 className="title-head margin-top-0 ">
                    <span>{props.title}</span>
                </h5>
                <i className={`fa fa-angle-${hideIconDrop ? 'up' : 'down'}`} onClick={handleChangeIcon}></i>
            </div>
            <div className="aside-content overflow-hidden" ref={dropDownItem} >
                {props.content.map(item => (

                    <div key={item.key} className="d-flex align-items-center">
                        <label htmlFor={item.value} title={item.content} className="nav-link link-dark">
                            <Field type="radio" style={{ cursor: "pointer" }} checked={valueRadio === item.value || secondBinding===item.value } onChange={handleRadioChange} id={item.value} value={item.value} name={props.queryKey} className="form-check-input me-2"></Field>
                            {item.content}
                        </label>
                    </div>
                ))
                }
            </div >
        </div >
    );
};
export default memo(SideBarItemCheckbox); //
