import React, { useMemo } from 'react';
import { Form, Input, Select, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useLoading } from '../../../hooks/useLoading';
import { useUpdateAdminProduct } from '../../../hooks/useAdminProduct';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    }
};
/* eslint-disable no-template-curly-in-string */



const ProductPopup = ({ isModalVisible, setIsModalVisible, product }) => {

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
    },[product])

    //
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const { mutate: updateAdminProduct } = useUpdateAdminProduct()
    const handleSubmit = async (values) => {
        if (values) {
            updateAdminProduct({ product, values })
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