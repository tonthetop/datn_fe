import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber, Button, Select, DatePicker } from 'antd';
import { useSelector } from 'react-redux';
import { useForm } from 'antd/lib/form/Form';
import axios from "axios";
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    }
};
/* eslint-disable no-template-curly-in-string */


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!'
    },
};
/* eslint-enable no-template-curly-in-string */



const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select
            style={{
                width: 70,
            }}
            defaultValue="84"
        >
            <Option value="84">+84</Option>
            <Option value="86">+86</Option>
        </Select>
    </Form.Item>
);
const FormInfoOrder = ({ valueInfoOrder, setValueInfoOrder }) => {
    //
    const [provinces, setProvinces] = useState([])
    const [addressSelect, setAddressSelect] = useState({
        province: "",
        districts: []
    })
    //
    useEffect(() => {
        async function fetchData() {
            try {
                const provinces = await axios.get('https://vapi.vnappmob.com/api/province/')
                setProvinces(provinces.data.results)
            } catch (error) {

            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        async function fetchData() {
            try {
                const province_id = addressSelect.province.split('_')[0]
                const districts = await axios.get(`https://vapi.vnappmob.com/api/province/district/${province_id}`)
                setAddressSelect(prev => {
                    return { ...prev, districts: districts.data.results }
                })
            } catch (error) {

            }
        }
        fetchData()
    }, [addressSelect.province])


    const handleChangeProvince = (value) => {
        setAddressSelect(prev => {
            return { ...prev, province: value }
        })
    }
    //
    const [form] = useForm();
    const user = useSelector(state => state.user)
    const { _id, phone, name, email } = user

    useEffect(() => {
        form.setFieldsValue(
            {
                "name": valueInfoOrder.name ? valueInfoOrder.name : name,
                "phone": valueInfoOrder.phone ? valueInfoOrder.phone : phone,
                "email": valueInfoOrder.email ? valueInfoOrder.email : email,
                "prefix": "84",
            }
        );
    }, [])
    const handleValuesChange = (changedValues, allValues) => {
        setValueInfoOrder({ ...allValues, accountId: _id })
    }

    return (
        <Form form={form} {...layout} name="nest-messages" onValuesChange={handleValuesChange} validateMessages={validateMessages}>
            <Form.Item
                name={'name'}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'email'}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={"phone"}
                label="Receiver Phone"
                rules={[
                    {
                        required: true,
                    },
                    {
                        pattern: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        message: "Phone number does not match pattern"
                    }
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                />
            </Form.Item>
            <Form.Item
                label="Delivery Time"
                name={'deliveryTime'}
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <DatePicker style={{
                    width: '100%',
                }} />
            </Form.Item>
            <Form.Item
                label="Address">
                <Input.Group compact>
                    <Form.Item
                        name={'city'}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'City is required',
                            },
                        ]}
                    >
                        <Select onChange={handleChangeProvince} placeholder="Select city" style={{ width: "100%" }}>
                            {provinces.map((e, index) => {
                                return (
                                    <Option key={index} value={`${e.province_id}_${e.province_name}`}>{e.province_name}</Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={'district'}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'District is required',
                            },
                        ]}
                    >
                        <Select placeholder="Select district" style={{ width: "100%" }}>
                            {addressSelect.districts.map((e, index) => {
                                return (
                                    <Option key={index} value={e.district_name}>{e.district_name}</Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={'street'}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Street is required',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: '100%',
                            }}
                            placeholder="Input Street"
                        />
                    </Form.Item>
                </Input.Group>
            </Form.Item>
            <Form.Item name={'introduction'} label="Introduction">
                <Input.TextArea />
            </Form.Item>
        </Form>
    );
};

export default FormInfoOrder;