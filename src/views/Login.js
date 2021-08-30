import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../styles/login.css'
import { message } from 'antd';

const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
});

const success = () => {
    message.success('Login success');
  };
  
  const error = () => {
    message.error('Login error ');
  };

function Login(props) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        checkUser(data.username, data.password)
    };
    return (
        <div className="login">
            <div className="login__left">
                <h1>Organize
                    it all
                    with Todo</h1>
            </div>
            <div className="login__right">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <span>SIGN IN NOW</span>
                    </div>
                    <div className='.form-group'>
                        {/* <label>User name</label> */}
                        <input placeholder="User name"{...register("username")} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div className='.form-group'>
                        {/* <label>Password</label> */}
                        <input placeholder="Password" type="password" {...register("password")} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <input type="submit" value='Sign In >' />
                </form>
            </div>
        </div>
    );
}

export default Login;


function checkUser(username, password) {
    fetch('https://60faace37ae59c0017166267.mockapi.io/api/v1/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var tb = false
            data.forEach(element => {
                if (username == element.username && password == element.password) {
                    success()
                    localStorage.setItem('accessToken', true);
                    window.location.replace('/')
                    tb = true
                }
            }
            );
            if (!tb) {
                // alert('Login Failure')
                error()
            }
        })
        .catch(error => console.log("Loading data user error"));
}