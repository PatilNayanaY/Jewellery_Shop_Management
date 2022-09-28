import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function CreateEmp(props) {

    const navigate = useNavigate();
    const [updatedEMPData, setupdatedEMPData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            state: "",
            city: "",
            pincode: "",
            designation: "",
            salary: 0,
            joindate: ""
        }
    );

    //   useEffect(() => {
    //     if (empid == 0) {
    //       alert("please select Empoyee ID from Employee Management Tab");
    //     }
    //     else fetch(`http://localhost:9090/api/employees/${empid}`).then(respp => respp.json()).then(data => setcurrentEmoData(data));
    //   }, [])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:9090/api/saveEmployee`, {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: updatedEMPData.firstName,
                    lastName: updatedEMPData.lastName,
                    email: updatedEMPData.email,
                    contact: updatedEMPData.contact,
                    state: updatedEMPData.state,
                    city: updatedEMPData.city,
                    pincode: updatedEMPData.pincode,
                    designation: updatedEMPData.designation,
                    salary: parseInt(updatedEMPData.salary),
                    joindate: updatedEMPData.joindate
                }),
            });

            
            let resJson = await res.json();
            if (res.status === 200) {
                alert("Details Updated successfully");
                navigate("/ViewAllEmp");
            } else {
                alert("Some error occured");
                navigate("/ViewAllEmp");
            }
        } catch (err) {
            console.log(err);
        }
    }
    const onChange = async (e) => {
        await setupdatedEMPData({ ...updatedEMPData, [e.target.name]: e.target.value });
    }

    return (
        <div className='container my-5'>
            <h3>Create New Employee</h3>
            <form id='empUpdateForm' className="row g-3" onSubmit={handleOnSubmit}>
                <div className="col-md-3">
                    <label className="form-label">First Name </label>
                    <input type="text" className="form-control"  required={true} name="firstName" pattern="[A-Za-z]{3,}" onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" pattern="[A-Za-z]{3,}" required={true} name="lastName" onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Email ID</label>
                    <input type="email" className="form-control" name="email"  pattern="[A-Za-z0-9._-]{3,15}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$"
                  required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Contact</label>
                    <input type="text" className="form-control"  name="contact" pattern="[0-9]{10,12}" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" pattern="[A-Za-z]{3,}" name="state"  required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" name="city" pattern="[A-Za-z]{3,}" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">pincode</label>
                    <input type="number" className="form-control" name="pincode" required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Designation</label>
                    <input className="form-control" type="text" name="designation" maxLength="50" accept='image/jpeg' required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">salary</label>
                    <input className="form-control" type="number" name="salary" accept='image/jpeg' required={true} onChange={onChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Date Of Joining</label>
                    <input className="form-control" type="date" name="joindate"  accept='image/jpeg' required={true} onChange={onChange} />
                </div>
                <div>
                    <button className='btn btn-dark btn-sm' type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )

}
