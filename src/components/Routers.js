import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import ToDo from '../views//ToDo';
import Login from '../views/Login';
import TaskDetails from '../views/TaskDetails';
import Page404 from '../views/Page404';
import Test from './Test';


function Routers(props) {

    return (
        <Router>
            <Switch>
                <Route exact path="/login" render={() => {
                    return (localStorage.getItem("accessToken")==null) ? <Login /> : <Redirect to="/" />
                    }}>
                </Route>
                {/* <Route exact path="/todo">
                    <ToDo />
                </Route>
                <Route exact path="/taskdetails">
                    <TaskDetails />
                </Route> */}
                <Route exact path="/" render={() => {
                    return localStorage.getItem("accessToken") ? <ToDo /> : <Redirect to="/login" />
                    }}>
                </Route>
                <Route exact path="/taskdetails/:id" render={() => {
                    return localStorage.getItem("accessToken") ? <TaskDetails /> : <Redirect to="/login" />
                    }}>
                </Route>
                <Route exact path="/test">
                    <Test />
                </Route>
                {/* <Route exact path="/">
                    <Login />
                </Route> */}
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routers;