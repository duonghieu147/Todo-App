import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import axios from "axios";


const menu = (
    <Menu>
        <Menu.Item key="0" >
            <div style={{ 'display': 'flex', color: '#56CCF2' }}>
                <i class="far fa-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>In Progress</p>
            </div>
        </Menu.Item>
        <Menu.Item key="1" >
            <div style={{ 'display': 'flex', color: '#219653', }}>
                <i class="far fa-check-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>Completed</p>
            </div>
        </Menu.Item>
        <Menu.Item key="2">
            <div style={{ 'display': 'flex', color: "#EB5757" }}>
                <i class="far fa-times-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>Canceled</p>
            </div>
        </Menu.Item>
    </Menu>
);

function DropdownStt(props) {
    const id = props.id;
    console.log("ID",id);
    function putToDoList(urlToDo,todo){
        axios.put(urlToDo,todo)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => {e.preventDefault()
                console.log(e)
            }}>
                <Button shape="circle" size="small">...</Button>
            </a>
        </Dropdown>
    );
}

export default DropdownStt;