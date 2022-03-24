import React, {Component, useState, useEffect} from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";


export default function CreateExercise() {

    const [state, setState] = useState({
        username: 'test',
        description:'test',
        duration:0,
        date: new Date(),
        users:['test user']
    });

    useEffect(() =>{
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if(response.data.length >0)
            {
                setState({
                    users: response.data.map(user =>user.username),
                    username: response.data[0].username
                })
            }
        })
    }, []);

    const onChangeUsername = (event)=>{
        setState({
            username: event.target.value
        });
    }
    const onChangeDescription = (event)=>{
        setState({
            description: event.target.value
        });
    }
    const onChangeDuration = (event)=>{
        setState({
            durartion: event.target.value
        });
    }
    const onChangeDate = (date)=>{
        setState({
            date: date    
        });
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        const exercise ={
            username: state.username,
            description:state.description,
            durartion:state.duration,
            date:state.date
        }
        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select 
                                required
                                className="form-control"
                                value = {state.username}
                                onChange={onChangeUsername}>
                            {
                            state.users.map((user) =>{
                                return <option
                                        key = {user}
                                        value = {user}>{user}
                                        </option>;
                                    })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {state.description}
                            onChange = {onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>duration (in min): </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {state.duration}
                            onChange = {onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selector = {state.date}
                                onChange = {onChangeDate}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value = "Create Exercise Log" className="btn btn-primary"  />
                    </div>
                </form>
            </div>
        )
    
}