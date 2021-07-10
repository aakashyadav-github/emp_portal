import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root')

export default function Employee(props){
const [modalIsOpen, setmodalIsOpen] = useState(false)
const [employee, setEmployee] = useState([])

useEffect(()=>{
    fetch("sfhshd").then(res=>res.json()).then(
        result=>{
           setEmployee(result);
        }
    );
});
    return(
      <>
        <button class="btn btn-primary" onClick={()=>setmodalIsOpen(true)}>Create Employee</button>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setmodalIsOpen(false)}
        style={
            {
                overlay:{
                    backgroundColor:'grey'
                }
            }
        }>
            <h2> Create New Employee</h2>
            <form>
                        <div class="form-group">
                            <label for="inputPassword4">Name</label>
                            <input type="text" class="form-control"  placeholder="Name" onkeypress="return /[a-z]/i.test(event.key)" ></input>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Employee Code</label>
                            <input type="text" class="form-control" placeholder="Employee Code"></input>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Email</label>
                            <input type="email" class="form-control" placeholder="Email"></input>
                        </div>
                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress">DOB</label>
                            <input type="date" class="form-control" ></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress">DOJ</label>
                            <input type="date" class="form-control" ></input>
                        </div>
                        </div>
                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress">Salary</label>
                            <input type="text" class="form-control" ></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Role</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose Role</option>
                                <option>...</option>
                            </select>
                        </div>
                        </div>
                        <div class="form-group">
                            <label>Gender</label><br></br>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios1">
                               Male
                            </label>
                            </div>
                            <div class="form-group">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Female
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
            <div>
                <button onClick={() => setmodalIsOpen(false)}> Close</button>
            </div>
        </Modal>
        <h2>Employee Data</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee Code</th>
                    <th>Email</th>
                    <th>D.O.B</th>
                    <th>D.O.J</th>
                    <th>Salary</th>
                    <th>Role</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employee.map(emp=>
                    <tr key ={emp.idtableEmployeeId}>
                        <td>{emp.name}</td>
                        <td>{emp.idtableEmployeeId}</td>
                        <td>{emp.tableEmployeeEmailAddress}</td>
                        <td>{emp.tableEmployeeDOB}</td>
                        <td>{emp.tableEmployeeDOJ}</td>
                        <td>{emp.tableEmployeeSalary}</td>
                        <td>{emp.tableEmployeeRole}</td>
                        <td>{emp.tableEmployeeGender}</td>
                        <td><a>View</a><a>Edit</a><a>Delete</a></td>
                    </tr>
                )}    
            </tbody>
        </table>
      </>  
    );
}