import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import '../html/test.css'

const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
});

function Test(props) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <span>SIGN IN NOW</span>
            </div>
            <div className='.form-group'>
                {/* <label>User name</label> */}
                <input {...register("username")} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className='.form-group'>
                {/* <label>Password</label> */}
                <input type="password" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <input type="submit" value='Sign In >' />
        </form>
    );
}

export default Test;