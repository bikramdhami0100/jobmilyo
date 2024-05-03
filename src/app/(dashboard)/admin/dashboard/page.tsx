import React from 'react'
import DashContentBox from '../../components/DashContent'

function AdminDashoBoard() {


  const DashContent = [
    { name: "Total User", number: 22 },
    { name: "Total Jobs", number: 10 },
    { name: "Applied Jobs", number: 20 },
    { name: "Contacted User", number: 20 },
    
    
  ]
  return (
    <div>
      <div className=' flex flex-wrap  justify-around m-4 gap-6'>
            {
              DashContent.map((item:any,index:any)=>{
                return(<DashContentBox item={item} ></DashContentBox>)
              })
            }
      </div>
      <div>

      </div>
    </div>
  )
}

export default AdminDashoBoard
