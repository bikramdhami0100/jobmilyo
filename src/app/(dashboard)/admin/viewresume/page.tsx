// import React from 'react'

// function ViewResume() {
//   return (
//     <div>
//       Resume
//     </div>
//   )
// }

// export default ViewResume
import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Delete, Pencil, Trash2 } from 'lucide-react';

interface ResumeType {
  Sr_No: number;
  Company_Name: string;
  Job_Title: string;
  User_Name: string;
 User_Email: string; // Corrected property name
  Mobile_Number: string;
  Resume: string;
  Delete: string;
}
function ViewResume() {
  const users: ResumeType[] = [
    {
      Sr_No: 1,
      Company_Name: "ABC Inc.",
      Job_Title: "Software Engineer",
      User_Name: "John Doe",
      User_Email: "john.doe@example.com",
      Mobile_Number: "123-456-7890",
      Resume: "path/to/john_doe_resume.pdf",
      Delete: "Delete"
    },
    {
      Sr_No: 2,
      Company_Name: "XYZ Corp.",
      Job_Title: "Data Scientist",
      User_Name: "Jane Smith",
      User_Email: "jane.smith@example.com",
      Mobile_Number: "987-654-3210",
      Resume: "path/to/jane_smith_resume.pdf",
      Delete: "Delete"
    },
    {
      Sr_No: 3,
      Company_Name: "123 Ltd.",
      Job_Title: "Web Developer",
      User_Name: "Alice Johnson",
      User_Email: "alice.johnson@example.com",
      Mobile_Number: "456-789-0123",
      Resume: "path/to/alice_johnson_resume.pdf",
      Delete: "Delete"
    },
 
  ];

  return (
    <div className=' flex flex-col gap-4 min-h-screen overflow-hidden'>
{/* table */}
      <div className=' overflow-x-scroll  '>
        <table className='  border-2 bg-gray-100 '>
          <tr className=' bg-blue-200 border-1'><th className="border-2 border-white p-2" > Sr.No</th> <th className="border-2 border-white p-2" >Company name</th> <th className="border-2 border-white p-2" >Job Title</th> <th className="border-2 border-white p-2" >User Name</th> <th className="border-2 border-white p-2" >User Email</th> <th className="border-2 border-white p-2" >Mobile no.</th> <th className="border-2 border-white p-2" >Resume</th> <th className="border-2 border-white p-2" >Delete</th></tr>

          {
            users.map((item: ResumeType, index: any) => {
              return (
                <tr>
                  <td className=" border-2 border-white  p-2 ">{item.Sr_No}</td>
                  <td className=" border-2 border-white  p-2 ">{item.Company_Name}</td>
                  <td className=" border-2 border-white  p-2 ">{item.Job_Title}</td>
                  <td className=" border-2 border-white  p-2 ">{item.User_Name}</td>
                  <td className=" border-2 border-white  p-2 ">{item.User_Email}</td>
                  <td className=" border-2 border-white  p-2 ">{item.Mobile_Number}</td>
                  <td className=" border-2 border-white  p-2 ">{item.Resume}</td>
                  <td className=" border-2 border-white  p-2  cursor-pointer text-blue-600 underline underline-offset-2">  <Trash2/></td>

                </tr>)
            })
          }

        </table>

      </div>
    {/* paganization */}
      <div className=''>
       <Pagination className=' flex justify-start items-start'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
       </div>
    </div>
  )
}

export default ViewResume

