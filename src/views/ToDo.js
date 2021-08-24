import React, { useState } from 'react';
import Item from '../components/Item';
import Nav from '../components/Nav';
import data from '../data.json';
import Add from '../components/Add';

function ToDo(props) {
    const [todo, setTodo] = useState(data);
    return (
        <div>
            <Nav />
            <div className="todo__body">
                <div className="title">
                    <div className="title__text">You’ve got <span>{data.length} Task</span>today </div>
                    <div className="title__btn-add">
                        <Add/>
                    </div>
                </div>
                    <div className="onhold">
                        <div className="onhold__title">On Hold</div>
                        <div className="onhold__list">
                            <ul>
                                {
                                    todo.map((item, key) => {
                                        if (item.action == "Pending" || item.action == "In Progress") {
                                            return (
                                                <Item
                                                    key={key} id={item.id} title={item.title} action={item.action} id_action={item.id_action} id_action_title={item.id_action_title} bgc={item.bgc}>
                                                </Item>)
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="complete">
                        <div className="onhold__title">Complete</div>
                        <div className="onhold__list">
                            <ul>
                                {
                                    todo.map((item, key) => {
                                        if (item.action == "Completed" || item.action == "Canceled") {
                                            return (
                                                <Item
                                                    key={key} id={item.id} title={item.title} action={item.action} id_action={item.id_action} id_action_title={item.id_action_title} bgc={item.bgc}>
                                                </Item>)
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            );
}

            export default ToDo;