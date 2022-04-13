// import { TableContainer, TableHead } from "@mui/material";
import React from "react";
import axios from "axios";
import "./UsersTable.css";
import DataTable , { createTheme } from 'react-data-table-component';
import { getAccordionDetailsUtilityClass } from "@mui/material";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
createTheme('solarized', {

  striped: {
    default: "#d42a1e",// ENTER YOU NEW COLOR HERE
  }
}, "light")

const UsersTable = ({ data,getdata }) => {

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
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
          <button onClick={async ()=>{
            const deleteRespondse = await axios.delete(`http://localhost:5000/data/${row._id}`);
            console.log(deleteRespondse);
            await getdata();
          }}>delete</button>
          
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