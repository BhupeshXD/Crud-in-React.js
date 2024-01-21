import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("https://65aa4517081bd82e1d9681e2.mockapi.io/mockapi/CrudOperations", {
            email: email,
            name: name,
            password: password
        }).then((response) => {
            console.log(response);
        }).then(() => {
            navigate("/read");
        });
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Crud Operations</h1>
            <div className='d-flex justify-content-between mb-3'>
                <h2>Create</h2>
                <button className="btn btn-secondary" onClick={() => navigate("/read")}>Show Data</button>
            </div>

            <form className='border border-dark p-4' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Create;
