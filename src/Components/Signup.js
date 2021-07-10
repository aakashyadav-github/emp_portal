import React from 'react';
import { useState , useEffect } from 'react'

export default function Signup(props){
 const [state, setstate] = useState('')
  
 useEffect(() => {
    fetch("http://devfrontend.maone.in/api/wms/wmsweb/webapi/user/role").then(res=>res.json()).then(
        result=>{
            this.setState({state:result});
        }
    )
  });
    return(
    <div class="container">
        <div class="row">
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Name"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="email" class="form-control" id="inputPassword4" placeholder="Email"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Password</label>
    <input type="password" class="form-control" id="inputAddress" placeholder="Password"></input>
  </div>
  <div class="form-row">
      <label for="inputState">Role</label>
      <select id="inputState" class="form-control">
        <option selected>Choose Role</option>
        <option>...</option>
      </select>
  </div>
  <br></br>
  <button type="submit" class="btn btn-primary">Sign in</button>  
  <button type="submit" class="btn ">Close</button>
</form>
    </div>
    </div>  
    );
}