import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { Button, message } from 'antd';
import 'antd/dist/antd.css';
import '../styles/task-details.css';
import { Back } from '../svg';
import data from '../data.json';
import Edit from '../components/Edit';
import Delete from '../components/Delete';

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    message.error('Click on No');
}

function TaskDetails(props) {
    let { id } = useParams()
    if (!data[id - 1]) {
        window.location.replace('/page404')
    }
    const [detail, setDetail] = useState(data[id - 1]);

    
    return (
        <div className="task">
            <div className="task-details">
                <button className="back">
                    <Link to="/"><Back /></Link>
                </button>
                <div className="task-details__title">
                    <p className="title">Task Details</p>
                    <p className="id_task">#0f417571-1fa9-468d-9c81-72fe465a5762</p>
                </div>
                <div className="task-details__edit">
                    <Edit/>
                </div>
                <div className="task-details__delete">
                    <Delete />
                </div>
            </div>
            <div className="task-content">
                <div className="task-content__left">
                    <p>Title</p>
                    <p>Status</p>
                    <p>Priority</p>
                    <p>Create Date</p>
                    <p>Description</p>
                </div>
                <div className="task-content__right">
                    <p className="title">{detail.title}</p>
                    <p className="status" >{detail.action}</p>
                    <p className="priority" >{detail.id_action_title}</p>
                    <p className="create-date">19-07-2021 at 10:24 AM</p>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>

    );
}

export default TaskDetails;