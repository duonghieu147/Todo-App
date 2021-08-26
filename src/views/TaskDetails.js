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
    console.log('todo.length' +todo);
    
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
                    <p className="status" >{todo.status}</p>
                    <p className="priority" >{todo.priority}</p>
                    <p className="create-date">{todo.create_date}</p>
                    <p className="description">{todo.description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;