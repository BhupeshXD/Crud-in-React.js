import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getData = () => {
        axios.get("https://65aa4517081bd82e1d9681e2.mockapi.io/mockapi/CrudOperations")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`https://65aa4517081bd82e1d9681e2.mockapi.io/mockapi/CrudOperations/${id}`)
            .then(() => {
                getData();
            })
    }

    useEffect(() => {
        getData();
    }, []);

    const setToLocalStorage = (id, email, name, password) => {
        localStorage.setItem("id", id)
        localStorage.setItem("email", email)
        localStorage.setItem("name", name)
        localStorage.setItem("password", password)
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Read Data</h1>
            
            <div className="d-flex justify-content-between mb-3">
                <h2>Data List</h2>
                <Link to="/">
                    <button className="btn btn-success">Create New</button>
                </Link>
            </div>

            <table className="table table-bordered border-black">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <Link to="/update">
                                    <button className="btn btn-primary" onClick={() => {
                                        setToLocalStorage(
                                            user.id,
                                            user.email,
                                            user.name,
                                            user.password)
                                    }}>Edit</button>
                                </Link>
                                <button className="btn btn-danger ml-2" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Read;
