import React, { useState,useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { message } from 'antd';
import 'antd/dist/antd.css';
import '../styles/task-details.css';
import { Back } from '../svg';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import axios from "axios";


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
    const urlToDo= 'https://60faace37ae59c0017166267.mockapi.io/api/v1/todolist/' + id
    const [todo, setTodo] = useState([]);
    useEffect(async () => {
        const result = await axios(
            urlToDo,
        );
        setTodo(result.data);
      },[]);

    let styles_stt;
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
    if (todo.status == "Pending") {
        styles_stt = stt_pending
    }
    else if (todo.status == "In Progress") {
        styles_stt = stt_progress
    }
    else if (todo.status == "Completed") {
        styles_stt = stt_completed
    }
    else if (todo.status == "Canceled") {
        styles_stt = stt_canceled
    }

    let styles_priority;
    const priority_Minor = {
        background: 'rgba(39, 174, 96, 0.2)',
        color: ' #219653'
    }
    const priority_Normal = {
        background: 'rgba(39, 174, 96, 0.2)',
        color: '#F2994A'
    }
    const priority_Critical = {
        background: 'rgba(39, 174, 96, 0.2)',
        color: '#EB5757'
    }
    if (todo.priority == "Minor") {
        styles_priority = priority_Minor
    }
    else if (todo.priority == "Normal") {
        styles_priority = priority_Normal
    }
    else if (todo.priority == "Critical") {
        styles_priority = priority_Critical
    }
    
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
                    <Delete></Delete>
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
                    <p className="title">{todo.title}</p>
                    <p style={styles_stt} className="status" >{todo.status}</p>
                    <p className="priority" style={styles_priority}>{todo.priority}</p>
                    <p className="create-date">{todo.create_date}</p>
                    <p className="description">{todo.description}</p>
                </div>
            </div>
        </div>
    );
}



export default TaskDetails;



