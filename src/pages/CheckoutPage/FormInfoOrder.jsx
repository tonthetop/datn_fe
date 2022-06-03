import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Select, DatePicker } from 'antd';
import { useSelector } from 'react-redux';
import { useForm } from 'antd/lib/form/Form';
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
            initialvalue="84"
        >
            <Option value="84">+84</Option>
            <Option value="86">+86</Option>
        </Select>
    </Form.Item>
);
const FormInfoOrder = () => {

    const [form] = useForm();

    const user = useSelector(state => state.user)
    const { phone, name, email } = user
    const handleValuesChange = (changedValues, allValues) => {
        console.log("allvalues", allValues);
    }
    form.setFieldsValue(
        {
            "name": name,
            "phone": phone,
            "email": email
        }
    );
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
                        message:"Phone number does not match pattern"
                    }
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                />
            </Form.Item>
            <Form.Item
                label="Delivery Time"
                name={'birth'}
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
                label="Address"
            >
                <Input.Group compact>
                    <Form.Item
                        name={['address', 'city']}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'City is required',
                            },
                        ]}
                    >
                        <Select placeholder="Select city" style={{ width: "100%" }}>
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['address', 'district']}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'District is required',
                            },
                        ]}
                    >
                        <Select placeholder="Select district" style={{ width: "100%" }}>
                            <Option value="Zhejiang1">Zhejiang1</Option>
                            <Option value="Jiangsu1">Jiangsu1</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['address', 'street']}
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