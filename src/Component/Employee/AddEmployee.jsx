import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Addemployee = () => {
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [mobile, mobilechange] = useState('');
    const [salary, salarychange] = useState(0);

    const navigate=useNavigate();

    const Saveemployee = (e) => {
         e.preventDefault();
         const empobj={name,email,mobile,salary}
         fetch('http://localhost:3000/employee',{
            method:"POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(empobj)
         }).then((resp)=>{
            if(resp.status==201){
                alert('Employee saved successfully.');
                navigate('/employee');
            }
         }).catch((err)=>{
            console.log(err.message);
         })
    }

    return (
        <form className="container" onSubmit={Saveemployee}>
            <div className="card">
                <div className="card-title">
                    <h2>Add Employee</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">

                            <div className="form-group">
                                <label>Name</label>
                                <input value={name} onChange={e => namechange(e.target.value)} className="form-control" required></input>
                                {name.length==0 && <span className="text-danger">Please enter name</span>}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" required></input>
                            {name.length==0 && <span className="text-danger">Please enter name</span>}
                            </div>

                            <div className="form-group">
                                <label>Mobile</label>
                                <input value={mobile} onChange={e => mobilechange(e.target.value)} className="form-control"></input>
                            </div>

                            <div className="form-group">
                                <label>Salary</label>
                                <input value={salary} onChange={e => salarychange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link className="btn btn-danger" to={'/employee'}>Cancel</Link>
                </div>
            </div>
        </form>
    );
}

export default Addemployee;