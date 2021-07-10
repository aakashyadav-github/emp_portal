import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Employee from './Components/Employee';
import {  useEffect } from 'react'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';



export default function App(props){
  const formData = new FormData();
  formData.append('email', 'prakash');
  formData.append('password', 'abcd@1234');
  useEffect(() => {
    fetch('http://devfrontend.maone.in/api/auth/authservice/webapi/login/authenticate',{
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then();
     fetch("http://devfrontend.maone.in/api/auth/authservice/webapi/login/registerwarehouse?warehouseid=15")
     .then(res=>res.json()).then();
  });
  return(
    <>
     <h2>Welcome to Employee Portal...</h2>
      <ul>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/employee">Employees</Link></li>
      </ul>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/employee" component={Employee}></Route>
      
    </>
  );
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));