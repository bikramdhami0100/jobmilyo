"use client"
import React from 'react'
import DashContentBox from '../../components/DashContent'
import {Pie} from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


function AdminDashoBoard() {
  


  const DashContent = [
    { name: "Total User", number: 22 },
    { name: "Total Jobs", number: 10 },
    { name: "Applied Jobs", number: 20 },
    { name: "Contacted User", number: 20 },
    
    
  ]
  const data = {
    labels: ['Tota Girls', 'Total boys'],
    datasets: [
      {
        label: '# visite',
        data: [12,14],
        backgroundColor: [
           "pink",
           "blue"
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
         
        ],
        borderWidth: 2,
      },
    ],
  };
  const data2 = {
    labels: ['Tota Jobs', 'Total Applied Jobs '],
    datasets: [
      {
        label: '# senario',
        data: [12,14],
        backgroundColor: [
           "pink",
           "blue"
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
         
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div>
      <div className=' flex flex-wrap  justify-around m-4 gap-6'>
            {
              DashContent.map((item:any,index:any)=>{
                return(<DashContentBox item={item} ></DashContentBox>)
              })
            }
          <div className=' opacity-85 hover:duration-100 duration-100 hover:opacity-100  w-[300px] h-[200px] p-4 rounded-2xl gap-2  border flex-row shadow-md hover:shadow-2xl '>
        {/* <Pie></Pie> */}
        <Pie data={data} />
      </div>
      <div className=' opacity-85 hover:duration-100 duration-100 hover:opacity-100  w-[300px] h-[200px] p-4 rounded-2xl gap-2  border flex-row shadow-md hover:shadow-2xl '>
        {/* <Pie></Pie> */}
        <Pie data={data2} />
      </div>
      </div>
     
    </div>
  )
}

export default AdminDashoBoard
