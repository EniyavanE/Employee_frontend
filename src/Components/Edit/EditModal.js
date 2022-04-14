import {ToastsContainer, ToastsStore} from 'react-toasts';
import axios from "axios";
import React from "react";
import Modal from 'react-modal';
import { useState } from "react";
const EditModal = ({row,getdata}) => {

    const [modalIsOpen, setModalIsOpen] = useState("");
const[editName,setEditName]=useState(row.name);
const UpdateChange= async()=>{
    const info={
        Name: editName,
        Email:row.email,
        Num: row.num,
        Dob: row.dob,
        Pic: row.pic,
        Jobtype: row.jobtype,
        Location: row.location

        }
const editedName=await axios.put(`http://localhost:5000/data/${row._id}`, info);
    console.log(editedName)     

        await getdata();
   console.log(row )
   ToastsStore.success("Your Information updated successfully");
   setModalIsOpen(false);
    }    
return (
        <>
            <button onClick={() => { setModalIsOpen(true )}}>Edit </button>
            <Modal
                isOpen={modalIsOpen}>
                <div className="input-container form__full_name">
                    <label htmlFor="fullName_input">First name</label>
                    <input required type="text" name="fullName_input" value={editName} onChange={e=>setEditName(e.target.value)} /></div>
                <button onClick={() => setModalIsOpen(false)} >close</button>
                <button onClick={UpdateChange}>Update</button>
            </Modal>
            <ToastsContainer store={ToastsStore}/>
        </>
    );

}
export default EditModal;