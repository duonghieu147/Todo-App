import React from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/" onClick={() => localStorage.removeItem('accessToken')}>Logout</a >
        </Menu.Item>
    </Menu>
);
function Test(props) {
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar src="../images/avatar.png" />
            </a>
        </Dropdown>
    );
}

export default Test;