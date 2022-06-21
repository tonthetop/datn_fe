import React, { useMemo, useState } from 'react';
import { Form, Input, Select, Modal, Divider, Space, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useLoading } from '../../../hooks/useLoading';
import { useUpdateAdminProduct } from '../../../hooks/useAdminProduct';
import { PlusOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import { discountApi } from '../../../api/discountApi';
import { productApi } from '../../../api/productApi';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    }
};
/* eslint-disable no-template-curly-in-string */


const ProductPopupCreate = ({ isModalVisible, setIsModalVisible }) => {
    //    console.log(product)

    const validateMessages = {
        required: '${label} is required!'
    };
    const [form] = useForm();
    //
    const [discounts, setDiscounts] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                let result = await discountApi.getDiscounts()
                result = result.map(e => {
                    return {
                        ...e,
                        discountItem: `${e.code}--${e.value}%--${moment(e.timeBegin).format('YYYY/MM/DD')}-${moment(e.timeEnd).format('YYYY/MM/DD')}`
                    }
                })
                setDiscounts(result)
            } catch (error) {

            }
        }
        fetchData()
    }, [])
    //
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const { mutate: updateAdminProduct } = useUpdateAdminProduct()
    const handleSubmit = async (values) => {
        if (values) {
            console.log(values)
        };
    };

    //
    const [itemsSize, setItemsSize] = useState([]);
    const [sizeName, setSizeName] = useState('');
    const onSizeNameChange = (event) => {
        setSizeName(event.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        if (sizeName !== '') {
            setItemsSize([...itemsSize, sizeName]);
            setSizeName('');
        }
        else toast.warning("Size name is required!")

    };
    const [showLoading, hideLoading] = useLoading()
    const handleFileUpload = async (e) => {
        console.log(Array.from(e.target.files))
        const promiseUpload = Array.from(e.target.files).map(async (file) => {
            const uploadData = new FormData();
            uploadData.append("file", file, "file");
            return productApi.cloudinaryUpload(uploadData)
        })
        try {
            showLoading()
            const result = await Promise.all(promiseUpload)
            hideLoading()
            console.log(result)
        } catch (error) {
            hideLoading()
        }
    }
    return (
        <>
            <Modal title="Thêm mới sản phẩm" visible={isModalVisible} onOk={() => form.submit()} onCancel={handleCancel}>
                <Form form={form} {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>
                    {/* <Form.Item
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
                    <Form.Item
                        name={'brand'}
                        label="Brand"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select style={{ width: 105 }}>
                            <Option key={1} value="ADIDAS"> ADIDAS</Option>
                            <Option key={2} value="NIKE"> NIKE</Option>
                            <Option key={3} value="JORDAN"> JORDAN</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={'productType'}
                        label="Type"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select style={{ width: 105 }}>
                            <Option key={1} value="GIAY"> GIAY</Option>
                            <Option key={2} value="DEP"> DEP</Option>
                            <Option key={3} value="PHUKIEN"> PHUKIEN</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Product By Size"
                        className='order-status-label order-required-label'
                    >
                        <Input.Group compact
                            className='d-flex'
                        >
                            <Form.Item
                                name={'currentSize'}>
                                <Select
                                    autoClearSearchValue
                                    style={{
                                        width: 150,
                                    }}
                                    placeholder="Size"
                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            <Divider
                                                style={{
                                                    margin: '8px 0',
                                                }}
                                            />
                                            <Space
                                                align="center"
                                                style={{
                                                    padding: '0 8px 4px',
                                                }}
                                            >
                                                <Input
                                                    placeholder="Enter size" value={sizeName} onChange={onSizeNameChange} />
                                                <Typography.Link
                                                    onClick={addItem}
                                                    style={{
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                >
                                                    <PlusOutlined /> Add item
                                                </Typography.Link>
                                            </Space>
                                        </>
                                    )}
                                >
                                    {itemsSize.map((e, index) => (
                                        <Option key={index} value={e}>{e}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name={'currentAmount'}
                                label="Amount"
                                className='ms-3 d-flex w-50'
                                style={{ width: 100 }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='Amount'></Input>
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                    <Form.Item
                        name={'currentDiscount'}
                        label="Discount"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select >
                            {discounts.map((e, index) => {
                                return (
                                    <Option key={index} value={e.discountItem}>{e.discountItem}</Option>
                                )
                            })}

                        </Select>
                    </Form.Item> */}
                    <Form.Item
                        name={'imgList'}
                        label="Image List"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input multiple="multiple" type={"file"} onChange={(e) => handleFileUpload(e)} />
                    </Form.Item>
                    {/* <Form.Item
                        name={'description'}
                        label="Description"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item> */}
                </Form>
            </Modal>
        </>
    );
};

export { ProductPopupCreate };