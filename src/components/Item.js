import React, { useState } from 'react';


function Item(props) {
    const [action, setAction] = useState(props.action);
    const [bgc, setBgc] = useState(props.bgc);
    return (
        <div>
            <li>
                <p className="li__title">{props.title}</p>
                <p className="li__action" style={{ background: bgc }}>{action}</p>
                <div className="li__stt">
                    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={4} cy={4} r={3} stroke={props.id_action} strokeWidth={2} />
                    </svg>
                    <p className="li__stt_p">{props.id_action_title}</p>
                </div>
                <div className="dropdown">
                    <span>...</span>
                    <div className="dropdown__content" >
                        <div className="in-progress" id="in-progress" onClick={() => {
                            setAction('In Progress');
                            setBgc('rgba(86, 204, 242, 0.2)')
                        }}>
                            <i class="far fa-circle"></i>
                            <p>In Progress</p>
                        </div>
                        <div className="completed" id="completed" onClick={() => {
                            setAction('Completed');
                            setBgc('rgba(39, 174, 96, 0.2)')
                        }}>
                            <i class="far fa-check-circle" ></i>
                            <p>Completed</p>
                        </div>
                        <div className="canceled" id="canceled" onClick={() => {
                            setAction('Canceled');
                            setBgc('rgba(235, 87, 87, 0.2)')
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