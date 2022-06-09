import React, { useState } from 'react'
import { productApi } from '../../api/productApi'
import SideBarItemCategory from './SideBarItemCategory'
import SideBarItemCheckbox from './SideBarItemCheckbox'
import { getParamQueries } from '../../utils/getParamQueries'
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import { Buffer } from 'buffer';
import "./index.css"
import { useLoading } from '../../hooks/useLoading'

const SideBar = ({ setCurrentPage }) => {
    const [sizes, setSizes] = useState([])
    const [showLoading, hideLoading] = useLoading()
    useEffect(() => {
        async function fetchData() {
            try {
                showLoading()
                const sizes = await productApi.getSizes()
                hideLoading()
                setSizes(sizes.map((e, index) => {
                    return { key: index, content: e, value: e }
                }))
            } catch (error) {
                hideLoading()
                return
            }
        }
        fetchData()
    }, []);

    const props3 = {
        title: 'Size',
        content: sizes,
        queryKey: "size"

    }
    const props2 = {
        title: 'KHOẢNG GIÁ',
        content: [
            { key: 1, content: "Giá dưới 1.000.000₫", value: JSON.stringify({ min: 0, max: 1000000 }) },
            { key: 2, content: "1.000.000₫ - 2.000.000₫", value: JSON.stringify({ min: 1000000, max: 2000000 }) },
            { key: 3, content: "2.000.000₫ - 3.000.000₫", value: JSON.stringify({ min: 2000000, max: 3000000 }) },
            { key: 4, content: "3.000.000₫ - 4.000.000₫", value: JSON.stringify({ min: 3000000, max: 4000000 }) },
            { key: 5, content: "4.000.000₫ - 5.000.000₫", value: JSON.stringify({ min: 4000000, max: 5000000 }) },
            { key: 6, content: "Giá trên 5.000.000₫", value: JSON.stringify({ min: 5000000, max: 500000000 }) },

        ],
        queryKey: "priceRange"
    }
    const props1 = {
        title: 'THƯƠNG HIỆU',
        content: [
            { key: 1, content: "NIKE", value: "NIKE" },
            { key: 2, content: "ADIDAS", value: "ADIDAS" },
            { key: 3, content: "JORDAN", value: "JORDAN" },
        ],
        queryKey: "brand"
    }
    const navigate = useNavigate();
    const location = useLocation()


    const setSecondBinding = () => {
        let params = getParamQueries(location)
        if (params.hasOwnProperty('filter')) {
            let object = JSON.parse(Buffer(params.filter, 'base64').toString())
            object.priceRange = JSON.stringify(object.priceRange)
            console.log("object", object)
            return object
        }
        return {}
    }
    const { brand = '', priceRange = '', size = '' } = setSecondBinding()
    const handleQuery = (values) => {

        setCurrentPage(1)
        const valueTemp = JSON.parse(JSON.stringify(values));
        if (valueTemp.priceRange !== '') valueTemp.priceRange = JSON.parse(valueTemp.priceRange)
        let objJsonStr = JSON.stringify(valueTemp);
        let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
        let params = getParamQueries(location)
        if (params.hasOwnProperty('page')) delete params.page
        params = { ...params, filter: objJsonB64 }
        const search = decodeURIComponent(createSearchParams(params))
        navigate({
            search: `?${search}`
        })
    }
    return (
        <div className="side-bar">
            <SideBarItemCategory></SideBarItemCategory>
            <Formik
                initialValues={{
                    brand: brand,
                    priceRange: priceRange,
                    size: size,
                }}
                onSubmit={values => handleQuery(values)}
            >
                {
                    ({ values }) => (
                        <Form>
                            <SideBarItemCheckbox
                                props={props1}
                                secondBinding={brand}
                            ></SideBarItemCheckbox>
                            <SideBarItemCheckbox
                                props={props2}
                                secondBinding={priceRange}
                            ></SideBarItemCheckbox>
                            <SideBarItemCheckbox
                                props={props3}
                                secondBinding={size}
                            ></SideBarItemCheckbox>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default SideBar