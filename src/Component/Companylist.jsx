import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Companylist = () => {

    const [listdata, setListdata] = useState(null);
    const navigate=useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/company').then((res) => {
            return res.json();
        }).then((resp) => {
            setListdata(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const Editcompany=(id)=>{
         navigate('/editcompany/'+id)
    }

    return (
        <div className="container">
            <div className="card" >
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-3">
                            <Link className="btn btn-primary" to={'/addcompany'}>Create New (+)</Link>
                        </div>
                        <div className="col-lg-9">
                            <h3>Company Listing</h3>
                        </div>
                    </div>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="table-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Type</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listdata && listdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.companyname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.companytype}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>Editcompany(item.id)}>Edit</button>
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

export default Companylist;