import { Form, Input, Modal } from 'antd';
import { useState } from 'react';

const VendorModal = ({ open, onCreate, onCancel }) => {
    const [imageLink, setImageLink] = useState([5, 6, 7, 8, 9, 10, 11, 12])
    const randomImage = (imageLink) => {
        var random = Math.floor(Math.random() * imageLink.length);
        imageLink.splice(random, 1)
        setImageLink(imageLink)
        return imageLink[random - 1]
    }

    const [form] = Form.useForm();

    return (
        <Modal
            open={open}
            title="Create Vendor"
            okText="OK"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        values.linkImage = "/images/" + randomImage(imageLink) + ".png";
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="horizontal"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    label="Name:"
                    name="name"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 15,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email:"
                    name="email"

                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 15,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone:"
                    name="phone"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 15,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Website:"
                    name="website"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 15,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default VendorModal;