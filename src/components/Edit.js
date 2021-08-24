import React, { useState } from 'react';
import { Form, Input, Modal, Button,Select} from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined,PlusSquareOutlined } from '@ant-design/icons';

function Edit(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //Custom form
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const { TextArea } = Input;
    //Select
    const { Option } = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }
    function onBlur() {
        console.log('blur');
    }
    function onFocus() {
        console.log('focus');
    }
    function onSearch(val) {
        console.log('search:', val);
    }
    return (
        <>
            <Button style={{background: "#884CB2", color:"white", 'border-radius': '10px'}}  icon={<EditOutlined/>} block onClick={showModal}>
                Edit
            </Button>
            <Modal title= "Edit" visible={isModalVisible} onOk={form.submit} onCancel={handleCancel} >
                <Form
                    name="edit"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input title!',
                            },
                        ]}
                    >
                        <Input placeholder="Title"></Input>
                    </Form.Item>
                    <Form.Item 
                    name="status">
                        <Select
                            showSearch
                            placeholder="Status"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                        >
                            <Option value="In Progress">In Progress</Option>
                            <Option value="Completed">Completed</Option>
                            <Option value="Canceled">Canceled</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                    name="priority"
                    rules={[
                        {
                            required: true,
                            message: 'Choice priority!',
                        },
                    ]}>
                        <Select
                            showSearch
                            placeholder="Priority"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}               
                        >
                            <Option value="Minor">Minor</Option>
                            <Option value="Normal">Normal</Option>
                            <Option value="Critical">Critical</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                    name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input description!',
                            },
                        ]}>
                        <TextArea rows={4} placeholder="Description"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default Edit;