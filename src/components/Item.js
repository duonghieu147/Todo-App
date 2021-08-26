import React, { useState,useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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

    let styles ;
    const stt_pending = {
        background: 'rgba(242, 153, 74, 0.2)',
        color:' #F2994A'
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

    return (
        <div>
            <li>
                <Link to={urlTask}><p className="li__title" >{props.title}</p></Link>
                <div>
                    <p className="li__action" style={styles}>
                        {status}
                    </p>
                </div>
                <div className="li__stt">
                    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={4} cy={4} r={3} stroke={props.id_priority} strokeWidth={2} />
                    </svg>
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