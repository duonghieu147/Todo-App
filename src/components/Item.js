import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { PreToDo, Priority } from '../svg';
import { Menu, Dropdown, Button } from 'antd';
import axios from "axios";
import DropdownStt from './DropdownStt';



function Item(props) {
    const id = props.id;
    const [status, setStatus] = useState(props.status);
    const urlTask = "/taskdetails/" + id

    let styles;
    const stt_pending = {
        background: 'rgba(242, 153, 74, 0.2)',
        color: ' #F2994A'
    }
    const stt_progress = {
        background: 'rgba(86, 204, 242, 0.2)',
        color: '#56CCF2'
    }
    const stt_completed = {
        background: 'rgba(39, 174, 96, 0.2)',
        color: '#219653'
    }
    const stt_canceled = {
        background: 'rgba(235, 87, 87, 0.2)',
        color: '#EB5757'
    }
    if (props.status == "Pending") {
        styles = stt_pending
    }
    else if (props.status == "In Progress") {
        styles = stt_progress
    }
    else if (props.status == "Completed") {
        styles = stt_completed
    }
    else if (props.status == "Canceled") {
        styles = stt_canceled
    }
    
    const menu = (
        <Menu>
            <Menu.Item key="0" >
                <div style={{ 'display': 'flex', color: '#56CCF2'}} >
                    <i class="far fa-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>In Progress</p>
                </div>
            </Menu.Item>
            <Menu.Item key="1" >
                <div style={{ 'display': 'flex', color: '#219653'}} >
                    <i class="far fa-check-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>Completed</p>
                </div>
            </Menu.Item>
            <Menu.Item key="2">
            {/* onClick={putStt(id,"Canceled")} */}
                <div style={{ 'display': 'flex', color: "#EB5757"}} >
                    <i class="far fa-times-circle" style={{ 'line-height': '24px' }}></i><p style={{ 'margin-left': '10px' }}>Canceled</p>
                </div>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <li>
                <div className="li__title">
                    <div style={{ 'line-height': '34px' }}><PreToDo /></div>
                    <Link to={urlTask}><p  >{props.title}</p></Link>
                </div>
                <div>
                    <p className="li__action" style={styles}>
                        {status}
                    </p>
                </div>
                <div className="li__stt">
                    <div className="li__stt__svg">
                        <Priority id_priority={props.id_priority} />
                    </div>
                    <p className="li__stt_p">{props.priority}</p>
                </div>
                {/* <div className="dropdown">
                    <DropdownStt />
                 </div> */}
                <div className="dropdown">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => {
                            e.preventDefault()
                        }}>
                            <Button shape="circle" size="small">...</Button>
                        </a>
                    </Dropdown>
                </div>
            </li>
        </div>
    );
}

export default Item;

// function putStt(id_todo,stt){
//     const todo = {
//         status:stt,
//         create_date:getDate()
//       };
//       const urlToDoStt='https://60faace37ae59c0017166267.mockapi.io/api/v1/todolist/'+id_todo;
//       console.log(urlToDoStt)
//     axios.put(urlToDoStt,todo)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
// }

// function getDate(){
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); 
//     var yyyy = today.getFullYear();
//     today = mm + '/' + dd + '/' + yyyy;
//     return today
// }