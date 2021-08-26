import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { PreToDo, Priority } from '../svg';


function Item(props) {
    const id = props.id;
    const [status, setStatus] = useState(props.status);
    const urlTask = "/taskdetails/" + id

    useEffect(() => {
        // do your side effect here ...

        return () => {
            // Clean up here ...
            // Executed before the next render or unmount
        };
    }, []);

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

    // function setIconPriority(props){
    //     const priority= props.priority;
    //     if(priority =='Minor'){
    //         return <Minor/>
    //     }else
    //     if(priority =='Normal'){
    //         return <Normal/>
    //     }else
    //     if(priority =='Critical'){
    //         return <Critical/>
    //     }
    // }
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
                <div className="dropdown">
                    <span>...</span>
                    <div className="dropdown__content" >
                        <div className="in-progress" id="in-progress" onClick={() => {
                            setStatus('In-progress');
                            styles = stt_progress
                        }}>
                            <i class="far fa-circle"></i>
                            <p>In Progress</p>
                        </div>
                        <div className="completed" id="completed" onClick={() => {
                            setStatus('Completed');
                            styles = stt_completed
                        }}>
                            <i class="far fa-check-circle" ></i>
                            <p>Completed</p>
                        </div>
                        <div className="canceled" id="canceled" onClick={() => {
                            setStatus('Canceled');
                            styles = stt_canceled
                        }}>
                            <i class="far fa-times-circle" ></i>
                            <p>Canceled</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default Item;