import React, { useState ,useEffect } from 'react';
import Item from '../components/Item';
import Nav from '../components/Nav';
// import data from '../data.json';
import Add from '../components/Add';
import axios from "axios";

function ToDo(props) {
    const [todos, setTodos] = useState([]);
    useEffect(async () => {
        const result = await axios(
          'https://60faace37ae59c0017166267.mockapi.io/api/v1/todolist/',
        );
        setTodos(result.data);
      },[]);
    console.log(todos);
    return (
        <div>
            <Nav />
            <div className="todo__body">
                <div className="title">
                    <div className="title__text">You’ve got <span> {todos.length}  Task</span>today </div>
                    <div className="title__btn-add">
                        <Add />
                    </div>
                </div>
                <div className="onhold">
                    <div className="onhold__title">On Hold</div>
                    <div className="onhold__list">
                        <ul>
                            {
                                todos.map((item, key) => {
                                    if (item.status == "Pending" || item.status == "In Progress") {
                                        return (
                                            <Item
                                                key={key} id={item.id} title={item.title} status={item.status} id_priority={item.id_priority} priority={item.priority}>
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
                                todos.map((item, key) => {
                                    if (item.status == "Completed" || item.status == "Canceled") {
                                        return (
                                            <Item
                                                key={key} id={item.id} title={item.title} status={item.status} id_priority={item.id_priority} priority={item.priority}>
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