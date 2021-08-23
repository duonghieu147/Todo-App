import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../styles/test.css'
import {InProgress,Completed,Canceled,Priority} from '../svg';

const SignupSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required()
});

function Login(props) {
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
                <span>Add New</span>
            </div>
            <div className='.form-group'>
                {/* <label>Title</label> */}
                <input placeholder="Title" type="text" {...register("title")} />
                {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div className='.form-group'>
                {/* <label>Description</label> */}
                <textarea placeholder="Description" type="text" {...register("description")} />
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div className='.form-group'>
                {/* <label for=""></label> */}
                <select name="status"  {...register("status")}>
                    <option value="Pedding" selected disabled hidden>Status</option>
                    <option value="In Progress"><InProgress />In Progress</option>
                    <option value="Completed"><Completed />Completed</option>
                    <option value="Canceled"><Canceled />Canceled</option>
                </select>
            </div>
            <div className='.form-group'>
                {/* <label for="">Priority</label> */}
                <select name="priority"  {...register("priority")}>
                    <option value="Minor" selected disabled hidden>Priority</option>
                    <option value="Minor"><Priority />Minor</option>
                    <option value="Normal"><Canceled />Normal</option>
                    <option value="Critical"><Canceled />Critical</option>
                </select>
            </div>
            <input type="submit" value='Create'/>
        </form>
    );
}

export default Login;
