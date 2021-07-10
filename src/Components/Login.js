import React from 'react';

export default function Login(props) {


    return (
        <>
            <div class="container">
                <div class="row">
                    <form>
                        <div class="form-group">
                            <label for="inputPassword4">Email</label>
                            <input type="email" class="form-control" id="inputPassword4" placeholder="Email"></input>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Password</label>
                            <input type="password" class="form-control" id="inputAddress" placeholder="Password"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}