import React, { Component, useState } from "react";
import axios from "axios";


function ExerciseList() {

  const [state, setState] = useState({
    username: 'test'
});

const onChangeUsername = (event)=>{
  setState({
      username: event.target.value
  });
}

const onSubmit = (event) =>{
  event.preventDefault();

  const user ={
      username: state.username
  }
  console.log(user);

axios.post('http://localhost:5000/users/add', user)
.then(res => console.log(res.data));

  setState({
    username:" "
  })
}
  return (
    <div>
      <h3>Create new User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text"
                required
                className="form-control"
                value={state.username}
                onChange = {onChangeUsername}
          />
        </div>
        <div>
          <input type="submit" value = "create User" className = "btn btn-primary" />
        </div>
      </form>
    </div>
  );

}

export default ExerciseList;