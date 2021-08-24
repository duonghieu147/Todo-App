import React from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/" onClick={() => localStorage.removeItem('accessToken')}>Logout</a >
        </Menu.Item>
    </Menu>
);

function Nav(props) {

    return (
        <div className="topbar">
            <div className="topbar__search">
                <i className="far fa-search" />
                <p>Search for any training you want</p>
            </div>
            <div className="topbar__right">
                <div className="topbar__right__notifications"><i className="fal fa-bell" /></div>
                <div className="topbar__right__avatar">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Avatar src="../images/avatar.png" />
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

export default Nav;
