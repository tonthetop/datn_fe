import React from 'react'
import './index.css'
import SideBarItemCategory from './SideBarItemCategory'
import SideBarItemCheckbox from './SideBarItemCheckbox'
import { useLocation, useNavigate, } from "react-router-dom";
import { useEffect } from 'react';
import { Formik, Field, Form, useFormik } from 'formik';

const SideBar = () => {
    const props2 = {
        title: 'KHOẢNG GIÁ',
        content: [
            { key: 1, content: "Giá dưới 1.000.000₫", value: "1000000" },
            { key: 2, content: "Giá dưới 2.000.000₫", value: "2000000" },

            { key: 3, content: "Giá dưới 3.000.000₫", value: "3000000" },

            { key: 4, content: "Giá dưới 4.000.000₫", value: "4000000" }

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
    const location = useLocation();
    const navigate = useNavigate();
    const handleQuery =  (values) => {
        console.log(values);
        const paramBrand = values.brand ? `${props2.queryKey}:(${values.brand})` : "";
        const paramPriceRange = values.priceRange ? `${props1.queryKey}:(${values.priceRange})` : "";
        const paramMain = `q=${paramBrand}&${paramPriceRange}`
        //console.log(paramMain)
         navigate(`?${paramMain}`)
    }

    console.log('render')
    // useEffect(() => {
    //     // goiAPI theo location /list/dep/size20
    // }, [])
    return (
        <div className="side-bar mt-5">
            <SideBarItemCategory></SideBarItemCategory>
            <Formik
                initialValues={{
                    brand: [],
                    priceRange: [],
                }}
                onSubmit={values=>handleQuery(values)}
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