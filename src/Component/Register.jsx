import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {

    const initialValues = {
        "username": "",
        "email": "",
        "mobile": "",
        "password": "",
        "confirmpassword": ""
    }

    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate(formValues);
        setformErrors(error);
        const isvalid = Object.keys(error).length === 0;
        if (isvalid) {
            setIsSubmit(true);
            fetch(' http://localhost:3000/user', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formValues)
            }).then((res) => {
                if (res.ok) {
                    toast.success('Registeration completed successfully.')
                } else {
                    toast.error('Registeration Failed.')
                }
            }).catch((err) => {
                console.log(err);
                toast.error('Registeration Failed due to :' + err.message)
            })
        }

    }

    const validate = (values) => {
        const errors = {};
        const regax = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!"
        } else if (values.username.length < 5) {
            errors.username = "Username length sould be more than 5 characters"
        }

        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regax.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }

        if (!values.mobile) {
            errors.mobile = "Mobile is required!"
        }
        if (!values.password) {
            errors.password = "Password is required!"
        } else if (values.password.length > 10) {
            errors.password = "Password length sould not exced 10 characters"
        }

        if (!values.confirmpassword) {
            errors.confirmpassword = "Confirmpassword is required!"
        } else if (values.password != values.confirmpassword) {
            errors.confirmpassword = "Password mismatch!"
        }
        return errors;
    }

    return (
        <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <form onSubmit={handleSubmit} >
                    <div className="card">
                        <div className="card-title">
                            <h2>User Registeration</h2>
                            <p>{!isSubmit && JSON.stringify(formValues)}</p>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Username</label>
                                <input name="username" onChange={handleChange} type="text" className="form-control" />
                                <p className="text-danger">{formErrors.username}</p>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" onChange={handleChange} type="text" className="form-control" />
                                <p className="text-danger">{formErrors.email}</p>
                            </div>

                            <div className="form-group">
                                <label>Mobile</label>
                                <input name="mobile" onChange={handleChange} type="text" className="form-control" />
                                <p className="text-danger">{formErrors.mobile}</p>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" onChange={handleChange} type="password" className="form-control" />
                                <p className="text-danger">{formErrors.password}</p>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input name="confirmpassword" onChange={handleChange} type="password" className="form-control" />
                                <p className="text-danger">{formErrors.confirmpassword}</p>
                            </div>

                        </div>
                        <div className="card-action">
                            <button className="btn btn-primary btn-full" type="submit">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;