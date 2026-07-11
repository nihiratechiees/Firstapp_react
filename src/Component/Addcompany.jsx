import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Addcompany = () => {

    const today = new Date().toISOString().split("T")[0];


    const initialValues = {
        "companyname": "",
        "registerdate": today,
        "email": "",
        "mobile": "",
        "industrytype": "",
        "address": "",
        "companytype": "public",
        "isactive": true
    }

    const industryOptions = [
        { value: "technology", label: "Technology" },
        { value: "healthcare", label: "Healthcare" },
        { value: "finance", label: "Finance" },
        { value: "manufacturing", label: "Manufacturing" },
        { value: "education", label: "Education" },
        { value: "retail", label: "Retail" },
    ];

    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (e) => {
        debugger;
        const { name, value, checked } = e.target;
        if (name == 'isactive') {
            setformValues({ ...formValues, [name]: checked });
        } else {
            setformValues({ ...formValues, [name]: value });
        }

    }

    useEffect(() => {
        if (id) {
            fetch('http://localhost:3000/company/' + id)
                .then((res) => res.json())
                .then((result) => {
                    setformValues((prev) => ({ ...prev, ...result }));
                })
                .catch((err) => {
                    console.error(err);
                    toast.error('Failed to load company details.');
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate(formValues);
        setformErrors(error);
        const isvalid = Object.keys(error).length === 0;
        if (isvalid) {
            if (id) {
                const obj = { "id": id, ...formValues }
                fetch(' http://localhost:3000/company/' + id, {
                    method: 'PUT',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(formValues)
                }).then((res) => {
                    if (res.ok) {
                        toast.success('Company updated successfully.')
                        navigate('/company')
                    } else {
                        toast.error('Company update Failed.')
                    }
                }).catch((err) => {
                    console.log(err);
                    toast.error('Update Failed due to :' + err.message)
                })
            } else {

                fetch(' http://localhost:3000/company', {
                    method: 'POST',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(formValues)
                }).then((res) => {
                    if (res.ok) {
                        toast.success('Registeration completed successfully.')
                        navigate('/company')
                    } else {
                        toast.error('Registeration Failed.')
                    }
                }).catch((err) => {
                    console.log(err);
                    toast.error('Registeration Failed due to :' + err.message)
                })
            }
        }

    }

    const validate = (values) => {
        const errors = {};
        const emailregax = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!values.companyname) {
            errors.companyname = "Companyname is required!"
        }

        if (!values.registerdate) {
            errors.registerdate = "Registerdate is required!"
        }

        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!emailregax.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }

        if (!values.mobile) {
            errors.mobile = "Mobile is required!"
        } else if (!mobileRegex.test(values.mobile)) {
            errors.mobile = "This is not a valid mobile number!"
        }

        if (!values.industrytype) {
            errors.industrytype = "Industrytype is required!"
        }

        if (!values.address) {
            errors.address = "Address is required!"
        }
        return errors;
    }

    return (
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <form onSubmit={handleSubmit} >
                    <div className="card">
                        <div className="card-title">
                            <h2>{id ? "Edit Company" : "Register Company"}</h2>
                            {/* {JSON.stringify(formValues)} */}
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Company Id</label>
                                    <input value={id} name="companyid" disabled type="text" className="form-control" />
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Register date</label>
                                    <input value={formValues.registerdate} name="registerdate" onChange={handleChange} type="date" className="form-control" />
                                    <p className="text-danger">{formErrors.registerdate}</p>
                                </div>

                                <div className="form-group col-lg-12">
                                    <label>Company Name</label>
                                    <input value={formValues.companyname} name="companyname" onChange={handleChange} type="text" className="form-control" />
                                    <p className="text-danger">{formErrors.companyname}</p>
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Email</label>
                                    <input value={formValues.email} name="email" onChange={handleChange} type="text" className="form-control" />
                                    <p className="text-danger">{formErrors.email}</p>
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Mobile</label>
                                    <input value={formValues.mobile} name="mobile" onChange={handleChange} type="text" className="form-control" />
                                    <p className="text-danger">{formErrors.mobile}</p>
                                </div>

                                <div className="form-group col-lg-6">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="companytype"
                                            id="private"
                                            value="private"
                                            onChange={handleChange}
                                            checked={formValues.companytype === 'private'}
                                        />
                                        <label className="form-check-label" htmlFor="private">
                                            Private
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="companytype"
                                            id="public"
                                            value="public"
                                            onChange={handleChange}
                                            checked={formValues.companytype === 'public'}
                                        />
                                        <label className="form-check-label" htmlFor="public">
                                            Public
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="companytype"
                                            id="Partnership"
                                            value="partnership"
                                            onChange={handleChange}
                                            checked={formValues.companytype === 'partnership'}
                                        />
                                        <label className="form-check-label" htmlFor="Partnership">
                                            Partnership
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Industry Type</label>

                                    <select onChange={handleChange} value={formValues.industrytype} className="form-control" name="industrytype">
                                        <option value="">Select Industry</option>
                                        {industryOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-danger">{formErrors.industrytype}</p>
                                </div>

                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea onChange={handleChange} value={formValues.address} name="address" className="form-control"></textarea>
                                    <p className="text-danger">{formErrors.address}</p>
                                </div>



                                <div className="form-group col-lg-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="agreeterm"
                                           
                                            onChange={(e) => setIsSubmit(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="agreeterm">
                                            Agree terms & conditions
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group col-lg-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="isActive"
                                            name="isactive"
                                            onChange={handleChange}
                                            checked={formValues.isactive === true}
                                        />
                                        <label className="form-check-label" htmlFor="isActive">
                                            IsActive
                                        </label>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="card-action">
                            <button disabled={!isSubmit} className="btn btn-primary btn-full" type="submit">{id ? "Update" : "Register"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addcompany;