import React from 'react';

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
                    <img src='../images/avatar.png' alt="" />
                    <div id="myDropdown" class="dropdown-content">
                        <a  href="/" onClick={() => localStorage.removeItem('accessToken')}>Logout</a >
                        {/* <a href="#about">About</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
