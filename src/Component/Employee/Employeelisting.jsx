import { useEffect, useState } from "react";

const Employeelisting = () => {

    const[empdata, setEmpdata] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/employee').then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpdata(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h1>Employee Listing</h1>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="table-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Salary</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empdata && empdata.map(item => (
                                  <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                     </td>
                                  </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default Employeelisting;