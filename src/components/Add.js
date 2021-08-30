import React, { useState } from 'react';
import { Form, Input, Modal, Button,Select,message} from 'antd';
import 'antd/dist/antd.css';
import { PlusSquareOutlined } from '@ant-design/icons';
import axios from "axios";
// import { message } from 'antd';



function postToDoList(todo){
    axios.post('https://60faace37ae59c0017166267.mockapi.io/api/v1/todolist/',todo)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}
function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}
function getIdPriority(priority){
    var idPriority='#219653'
    if(priority=='Minor'){
        idPriority='#219653'
    }else 
    if(priority=='Critical'){
        idPriority="#EB5757"
    }else 
    if(priority=='Normal'){
        idPriority="#F2994A"
    }
    return idPriority
}

const success = () => {
    message.success('Add New Success',3);
  };
  

function Add(props) {
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
        if (!values.status){
            values.status="Pending"
        }
        const todo = {
            title: values.title,
            status:values.status,
            priority:values.priority,
            id_priority:getIdPriority(values.priority),
            description:values.description,
            create_date:getDate()
          };
          postToDoList(todo)
          handleOk()
          success()
        //   window.location.replace('/')
          
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
            <Button style={{background: "#884CB2", color:"white", 'border-radius': '10px'}} icon={<PlusSquareOutlined/>} block onClick={showModal}>
                Add New
            </Button>
            <Modal  visible={isModalVisible} onOk={form.submit} onCancel={handleCancel} okText="Create" >
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
                    <Form.Item >
                        <h1 style={{ 'font-weight': 'bold','font-size': '36px',color:"#F3477A"}}>Add New</h1>
                    </Form.Item>
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

export default Add;