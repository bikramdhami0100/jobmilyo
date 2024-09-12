"use client"

import React, { useEffect, useState } from 'react'
import JobSearcherUserInformation from "../usercomponents/JobSearcherUserInformation"

function UserInformation() {
  // const [userData, setUserData] = useState();
  // const [selectData,setSelectData]=useState();
  // const dataFetch = async () => {
  //   const data = (await axios.get("/api/profiledata")).data;
  //   console.log(data.data.user);
  //   setUserData(data.data.user);

  // }
  // useEffect(() => {

  //   dataFetch();
  // }, [])
  return (
    <div>
  
      <JobSearcherUserInformation />
    </div>
  )
}

export default UserInformation