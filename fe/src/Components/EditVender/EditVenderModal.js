import { Form, Input, Modal } from 'antd';

const EditVendorModal = ({ open, onEdit, onCancel, vendor }) => {

    const [form] = Form.useForm();
    form.setFieldsValue({
        name: vendor.name,
        email: vendor.email,
        phone: vendor.phone,
        website: vendor.website,
    });
    return (
        <Modal
            open={open}
            title="Edit Vendor"
            okText="Edit"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onEdit(values);
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
export default EditVendorModal;