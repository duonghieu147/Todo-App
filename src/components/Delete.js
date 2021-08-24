import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined } from '@ant-design/icons';


function Delete(props) {
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
    return (
        <>
            <Button type="danger" style={{'border-radius': '10px'}} icon={<DeleteOutlined />} block onClick={showModal}>
                Delete
            </Button>
            <Modal visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button onClick={handleOk}>Cancel</Button>,
                    <Button type="danger" onClick={handleCancel}>
                        Delete
                    </Button>
                ]}
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