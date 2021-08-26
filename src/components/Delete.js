import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined } from '@ant-design/icons';
import axios from "axios";
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
function Delete(props) {
    let { id } = useParams();
    const urltodo='https://60faace37ae59c0017166267.mockapi.io/api/v1/todolist/' +id;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);

    };

    const handleOk = () => {
        axios.delete(urltodo)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
        setIsModalVisible(false);
        // window.location.replace('/');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Button type="danger" style={{'border-radius': '10px'}} icon={<DeleteOutlined />} block onClick={showModal}>
                Delete
            </Button>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Delete" okType='primary'
                width={400}
                >
                <div style={{'text-align':'center'}}>
                    <p>Are you sure?</p>
                </div>
            </Modal>
        </>
    );
}

export default Delete;