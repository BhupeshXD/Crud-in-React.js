import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate();
    
    const [id, setId] = useState(0);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`https://65aa4517081bd82e1d9681e2.mockapi.io/mockapi/CrudOperations/${id}`, {
            email: email,
            name: name,
            password: password
        }).then(() => {
            navigate("/read");
        });
    };

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setEmail(localStorage.getItem("email"));
        setName(localStorage.getItem("name"));
        setPassword(localStorage.getItem("password"));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Update Data</h1>
            <div className="mb-4">
                <h2>Update Form</h2>
            </div>
            <form  className="border-black border p-4"onSubmit={updateHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input required type="text" className="form-control" id="exampleInputName1" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required type="text" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default Update;
