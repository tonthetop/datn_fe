import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Form, Input, InputNumber, Button, Select, DatePicker, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from "axios";
import { useLoading } from '../../../hooks/useLoading';
import { orderApi } from '../../../api';
import moment from 'moment';
import { useUpdateAdminOrder } from '../../../hooks/useAdminOrder';
import { toast } from 'react-toastify';
import { ListProduct } from './ListProduct';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    }
};
/* eslint-disable no-template-curly-in-string */


const statusDescription = [
    { key: "PENDING", value: "Đơn hàng đang chờ xác nhận" },
    { key: "ACCEPTED", value: "Đơn hàng đã được chấp nhận" },
    { key: "SUCCESS", value: "Đơn hàng đã giao thành công" },
    { key: "CANCEL", value: "Đơn hàng đã hủy" },
]
const OrderPopup = ({ isModalVisible, setIsModalVisible, order }) => {    //
    console.log({ order })
    const validateMessages = {
        required: '${label} is required!'
    };
    const [form] = useForm();
    form.setFieldsValue(
        {
            "deliveryAddress": order.deliveryAddress,
            "currentStatus": order.currentStatus,
            "description": order.description,
            "receivePhone": order.receivePhone,
            "currentStatusDescription": order.currentStatusDescription

        }
    );

    //
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //
    const getValueCurrentOrderStatus = (status) => {
        switch (status) {
            case "PENDING":
                return 1
            case "ACCEPTED":
                return 2
            case "SUCCESS":
                return 3
            case "CANCEL":
                return 4
            default:
                return;
        }
    }
    //
    const { mutate: updateAdminOrder } = useUpdateAdminOrder()
    const handleSubmit = async (values) => {
        if (values) {
            const indexStatus = order.orderStatus.findIndex(e => e.status === values.currentStatus)
            if (indexStatus === -1) {
                if (getValueCurrentOrderStatus(values.currentStatus) >
                    getValueCurrentOrderStatus([...order.orderStatus].pop().status)
                    && getValueCurrentOrderStatus([...order.orderStatus].pop().status) !== 3) {
                    const orderStatus = [...order.orderStatus]
                    orderStatus.push({ status: values.currentStatus, description: values.currentStatusDescription })
                    values.orderStatus = orderStatus;
                    delete values.currentStatus
                    delete values.currentStatusDescription
                    values.deliveryTime = values.deliveryTime ? new Date(values.deliveryTime) : new Date(order.deliveryTime)
                    console.log("values affter:", values)
                    updateAdminOrder({ order, values })
                    setIsModalVisible(false)
                }
                else toast.warning("Order Status not permission")
            }
            else if (indexStatus === order.orderStatus.length - 1) {
                const orderStatus = [...order.orderStatus]
                const x = orderStatus.find(e => e.status === values.currentStatus)
                x.description = values.currentStatusDescription
                values.orderStatus = orderStatus;
                delete values.currentStatus
                delete values.currentStatusDescription
                values.deliveryTime = values.deliveryTime ? new Date(values.deliveryTime) : new Date(order.deliveryTime)
                console.log("values affter:", values)
                updateAdminOrder({ order, values })
                setIsModalVisible(false)
            }
            else toast.warning("Order Status not permission")
        };
    };
    //
    const handleChangeOrderStatus = (key) => {
        form.setFieldsValue({
            "currentStatusDescription": statusDescription.find(e => e.key === key).value
        })
    }
    return (
        <>
            <Modal className='order-modal' title={`Cập nhật order: ${order._id}`} visible={isModalVisible} onOk={() => form.submit()} onCancel={handleCancel}
            >

                <Form
                    style={{
                        width: "70%"
                    }}
                    form={form} {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>
                    <Form.Item
                        label="Client Name"
                    >
                        <span
                        >{order.clientName}</span>
                    </Form.Item>
                    <Form.Item
                        label="Client Email"
                    >
                        <span
                        >{order.clientEmail}</span>
                    </Form.Item>
                    <Form.Item
                        label="Total Price"
                    >
                        <span
                        >{order.totalPrice?.toLocaleString() + " đ"}</span>
                    </Form.Item>
                    <Form.Item
                        name={'deliveryAddress'}
                        label="Delivery Address"
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        name={'deliveryTime'}
                        label="Delivery Time"
                        className='order-required-label'
                    >
                        <DatePicker defaultValue={moment(new Date(order.deliveryTime))} style={{
                            width: '100%',
                        }} />
                    </Form.Item>
                    <Form.Item
                        name={'receivePhone'}
                        label="Receiver Phone"
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
                        <Input></Input>
                    </Form.Item>
                    <Form.Item
                        label="Order Status"
                        className='order-status-label order-required-label'
                    >
                        <Input.Group compact>
                            <Form.Item
                                name={'currentStatus'}>
                                <Select onChange={handleChangeOrderStatus} style={{ width: 105 }}>
                                    <Option key={1} value="PENDING"> PENDING</Option>
                                    <Option key={2} value="ACCEPTED"> ACCEPTED</Option>
                                    <Option key={3} value="SUCCESS"> SUCCESS</Option>
                                    <Option key={4} value="CANCEL"> CANCEL</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={'currentStatusDescription'}
                                style={{ width: 125 }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.TextArea placeholder='Status Description'></Input.TextArea>
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                    <Form.Item
                        name={'description'}
                        label="Description"
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                </Form>
                <ListProduct order={order}> </ListProduct>
            </Modal>
        </>
    );
};

export { OrderPopup };