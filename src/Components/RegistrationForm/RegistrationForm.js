
import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';
const RegistrationForm = ({ getdata }) => {
    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [num, setNum] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [jobtype, setJobtype] = useState("pt");
    const [location, setLocation] = useState("chennai");
    const submit = async (e) => {
        e.preventDefault();
        const info = {
            Name: name,
            Num: num,
            Email: email,
            Dob: dob,
            Pic: pic,
            Jobtype: jobtype,
            Location: location
        };
        console.log(info);
        await axios.post("http://localhost:5000/data", {
            ...info
        });
        setName("");
        setNum("");
        setEmail("");
        setDob("");


        await getdata();
    }



    return (
        <>
            <div className="top">

                <form className="form" onSubmit={submit}>
                    <div className="input-container form__full_name">
                        <label htmlFor="fullName_input">First name</label>
                        <input required type="text" name="fullName_input" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input-container form__profilepic">
                        <label htmlFor="profilepic_input">Profile Pic</label>
                        <FileBase64
                            multiple={false}
                            onDone={(base64) => setPic(base64.base64)} />

                    </div>
                    <div className="input-container form__mobile">
                        <label htmlFor="mobile_input">Mobile</label>
                        <input required type="text" name="mobile_input" defaultValue="+91" size="1" />
                        <input required type="text" name="mobile_input" value={num} onChange={e => setNum(e.target.value)} />
                    </div>
                    <div className="input-container form__email">
                        <label htmlFor="email_input">Email</label>
                        <input required type="email" name="email_input" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-container form__jobtype">
                        <label htmlFor="jobtype_input">Job Type</label>
                        <select name="jobtype_input" value={jobtype} onChange={e => {
                            setJobtype(e.target.value)

                        }} >
                            <option>FT</option>
                            <option>PT</option>
                            <option>Consultant</option>
                        </select>
                    </div>
                    <div className="input-container form__dob">
                        <label htmlFor="dob_input">DOB</label>
                        <input defaultValue={"02/12/1998"} type="date" value={dob} name="dob_input" onChange={e => setDob(e.target.value)} />
                    </div>
                    <div className="input-container form__location">
                        <label htmlFor="location_input">Pref.Location</label>
                        <select name="location" value={location} onChange={e => { setLocation(e?.target?.value) }}>
                            <option>Chennai</option>
                            <option>Bangalore</option>

                        </select>
                    </div>
                    <input required type="submit" className="btn" value={"+ Add/Update"} />

                </form>
            </div>

        </>
    );
}
export default RegistrationForm;