import React, { useState, useEffect, useCallback,useMemo } from 'react';
import { Form, Input, InputNumber, Button, Select, DatePicker, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from "axios";
import { useLoading } from '../../../hooks/useLoading';
import { productApi } from '../../../api';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    }
};
/* eslint-disable no-template-curly-in-string */



const ProductPopup = ({ setDataSource, isModalVisible, setIsModalVisible, product }) => {

    //
    const validateMessages = {
        required: '${label} is required!'
    };
    const [form] = useForm();
    useMemo(() => {
        form.setFieldsValue(
            {
                "name": product.name,
                "price": product.price
            }
        );
    }, [product])

    //
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //
    const [showLoading, hideLoading] = useLoading()
    const handleSubmit = async (values) => {
        if (values) {
            try {
                console.log({values})
                //
                const { name, brand, productType, price, imgList, description, discountIds, productBySize } = values
                setDataSource(prev => {
                    let index = prev.findIndex(
                        (e) => e._id === product._id
                    );
                    prev[index] = {
                        ...prev[index],
                        price: price,
                        name: name
                    };
                    return [...prev]
                })
                // call api
                showLoading()
                await productApi.update(product._id, { name, price })
                hideLoading()
                //
            } catch (error) {
                hideLoading()
            }

            setIsModalVisible(false)
        };
    };
    return (
        <>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={() => form.submit()} onCancel={handleCancel}>
                <Form form={form} {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>
                    <Form.Item
                        name={'name'}
                        label="ProductName"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'price'}
                        label="Price"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                pattern: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                                message: "Price must be a positive number"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};

export { ProductPopup };