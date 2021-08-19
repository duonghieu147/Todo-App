import React from 'react';
import '../html/task-details.css';
import Back from '../svg';


function TaskDetails(props) {
    return (
        <div className="task">
            <div className="task-details">
                <button className="back">
                    <Back/>
                </button>
                <div className="task-details__title">
                    <p className="title">Task Details</p>
                    <p className="id_task">#0f417571-1fa9-468d-9c81-72fe465a5762</p>
                </div>
                <button className="task-details__edit"><i className="fas fa-edit" />Edit</button>
                <button className="task-details__delete"><i className="fas fa-trash-alt" />Delete</button>
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
                    <p className="title">Evaluate the addition and deletion of user IDs.</p>
                    <p className="status">Pending</p>
                    <p className="priority">Minor</p>
                    <p className="create-date">19-07-2021 at 10:24 AM</p>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>

    );
}

export default TaskDetails;