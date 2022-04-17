import React from "react";
import axios from "axios";
import "./UsersTable.css";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import DataTable, { createTheme } from 'react-data-table-component';
import EditModal from "../Edit/EditModal";
import { BACK_END_URL } from "../../Constants";

createTheme('solarized', {

  striped: {
    default: "#d42a1e",
  }
}, "light")

const UsersTable = ({ data, getdata }) => {

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    }, {
      name: 'Photo',
      selector: row => {
        return (
          <img src={row.pic} width="100" />
        );
      },
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Mobile',
      selector: row => row.mobile,
      sortable: true,
    },
    {
      name: 'DOB',
      selector: row => row.dob,
      sortable: true,
    },
    {
      name: 'Job Type',
      selector: row => row.jobtype,
      sortable: true,
    },
    {
      name: 'Location',
      selector: row => row.location,
      sortable: true,
    },
    {
      name: 'Action',
      selector: row => {

        return (
          <>

            <EditModal row={row} getdata={getdata} />
            <button className="Delbtn" onClick={async () => {
              const deleteRespondse = await axios.delete(`${BACK_END_URL}/data/${row._id}`);
              console.log(deleteRespondse);
              await getdata();
              ToastsStore.success("Deleted successfully");
            }}>delete</button>

            <ToastsContainer store={ToastsStore} />
          </>
        )
      },
      sortable: true,
    }
  ];



  return (
    <div className="table-container">

      <DataTable
        columns={columns}
        data={data}
        theme={"solarized"}
      />

    </div>


  )
}
export default UsersTable;