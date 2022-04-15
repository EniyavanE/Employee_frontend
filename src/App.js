
import React, { useEffect, useState } from "react";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm.js";
import UsersTable from "./Components/UsersTable/UsersTable.js";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  
  const getdata = async () => {
    const fetch = await axios.get("http://localhost:5000/data");
    console.log(fetch);
    setData(fetch.data);
  }

  useEffect(async () => {
    await getdata();
  }, [])

  return (
    <>
      <div>
        <RegistrationForm getdata={getdata} />
        <UsersTable data={data} getdata={getdata} />
      </div>

    </>

  );

}
export default App;