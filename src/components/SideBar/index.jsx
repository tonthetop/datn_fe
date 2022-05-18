import React from 'react'
import './index.css'
import SideBarItemCategory from './SideBarItemCategory'
import SideBarItemCheckbox from './SideBarItemCheckbox'
import { useLocation, useNavigate, } from "react-router-dom";
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
    const handleQuery = (values) => {
        const valueTemp = JSON.parse(JSON.stringify(values));
        if (valueTemp.priceRange!=='') valueTemp.priceRange=JSON.parse(valueTemp.priceRange)
        let objJsonStr = JSON.stringify(valueTemp);
        let objJsonB64 = Buffer.from(objJsonStr).toString("base64");

        navigate(`?filter=${objJsonB64}`)
    }
    return (
        <div className="side-bar mt-5">
            <SideBarItemCategory></SideBarItemCategory>
            <Formik
                initialValues={{
                    brand: '',
                    priceRange: ''
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