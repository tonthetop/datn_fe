import React from 'react'
import './index.css'
import SideBarItemCategory from './SideBarItemCategory'
import SideBarItemCheckbox from './SideBarItemCheckbox'
import { getParamQueries } from '../../utils/getParamQueries'
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import { Buffer } from 'buffer';
const SideBar = () => {
    const props2 = {
        title: 'KHOẢNG GIÁ',
        content: [
            { key: 1, content: "Giá dưới 1.000.000₫", value: JSON.stringify({ min: 0, max: 1000000 }) },
            { key: 2, content: "1.000.000₫ - 2.000.000₫", value: JSON.stringify({ min: 1000000, max: 2000000 }) },
            { key: 3, content: "2.000.000₫ - 3.000.000₫", value: JSON.stringify({ min: 2000000, max: 3000000 }) },
            { key: 4, content: "3.000.000₫ - 4.000.000₫", value: JSON.stringify({ min: 3000000, max: 4000000 }) }
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
            return object
        }
        return {}
    }
    const { brand='', priceRange='' } = setSecondBinding()
    const handleQuery = (values) => {
        const valueTemp = JSON.parse(JSON.stringify(values));
        if (valueTemp.priceRange!=='') valueTemp.priceRange = JSON.parse(valueTemp.priceRange)
        let objJsonStr = JSON.stringify(valueTemp);

        console.log(objJsonStr)

        let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
        let params = getParamQueries(location)
        if (params.hasOwnProperty('page')) delete params.page
        params = { ...params, filter: objJsonB64 }
        console.log(params)
        const search = decodeURIComponent(createSearchParams(params))
        navigate({
            search: `?${search}`
        })
    }
    return (
        <div className="side-bar mt-5">
            <SideBarItemCategory></SideBarItemCategory>
            <Formik
                initialValues={{
                    brand: brand,
                    priceRange: priceRange,
                }}
                onSubmit={values => handleQuery(values)}
            >
                {
                    ({ values }) => (
                        <Form>
                            <SideBarItemCheckbox
                                {...props1}
                            ></SideBarItemCheckbox>

                            <SideBarItemCheckbox
                                {...props2}
                            ></SideBarItemCheckbox>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default SideBar