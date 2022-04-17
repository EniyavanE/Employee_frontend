import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from "axios";
import "../Edit/EditModal.css";
import React from "react";
import Modal from 'react-modal';
import { useState } from "react";
import FileBase64 from 'react-file-base64';
import { BACK_END_URL } from '../../Constants';

const EditModal = ({ row, getdata }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editName, setEditName] = useState(row.name);
    const [editNum, setEditNum] = useState(row.num);
    const [editEmail, setEditEmail] = useState(row.email);
    const [editDob, setEditDob] = useState(row.dob);
    const [editPic, setEditPic] = useState(row.pic);

    const UpdateChange = async () => {
        const info = {
            Name: editName,
            Email: editEmail,
            Num: editNum,
            Dob: editDob,
            Pic: editPic,
            Jobtype: row.jobtype,
            Location: row.location

        }
        const editedName = await axios.put(`${BACK_END_URL}/data/${row._id}`, info);
        console.log(editedName)

        await getdata();
        console.log(row)
        ToastsStore.success("Your Information updated successfully");
        setModalIsOpen(false);
    }
    return (
        <>
            <button className='Editbtn' onClick={() => { setModalIsOpen(true) }}>Edit </button>
            <Modal
                isOpen={modalIsOpen}>
                <div className="edit edited_name">
                    <label htmlFor="fullName_input">First name</label>
                    <input required type="text" name="fullName_input" value={editName} onChange={e => setEditName(e.target.value)} /></div>
                <div className="edit edited_mobnum">
                    <label htmlFor="mobile_input">Mobile</label>
                    <input required type="text" name="mobile_input" defaultValue="+91" size="1" />
                    <input required type="text" name="mobile_input" value={editNum} onChange={e => setEditNum(e.target.value)} />
                </div>
                <div className="edit edited_email">
                    <label htmlFor="email_input">Email</label>
                    <input required type="email" name="email_input" value={editEmail} onChange={e => setEditEmail(e.target.value)} />
                </div>
                <div className="edit edited_dob">
                    <label htmlFor="dob_input">DOB</label>
                    <input defaultValue={"02/12/1998"} type="date" value={editDob} name="dob_input" onChange={e => setEditDob(e.target.value)} />
                </div>
                <div className="edit edited_profile">
                    <label htmlFor="profilepic_input">Profile Pic</label>
                    <img src={editPic} width="100" alt="Profile pic" />
                    <FileBase64
                        multiple={false}
                        onDone={(base64) => setEditPic(base64.base64)} />
                </div>
                <button onClick={() => setModalIsOpen(false)} >close</button>
                <button onClick={UpdateChange}>Update</button>
            </Modal>
            <ToastsContainer store={ToastsStore} />
        </>
    );

}
export default EditModal;