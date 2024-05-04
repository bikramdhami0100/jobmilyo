
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Trash2 } from 'lucide-react';

interface ContactType {
  Sr_No: number;

  User_Name: string;
  User_Email: string; // Corrected property name
  Message: string;
  Delete: string;
}
function ContactList() {
  const users: ContactType[] = [
    {
      Sr_No: 1,

      User_Name: "John Doe",
      User_Email: "john.doe@example.com",
      Message: " this is default message",
      Delete: "Delete"
    },
    {
      Sr_No: 2,

      User_Name: "John Doe",
      User_Email: "john.doe@example.com",
      Message: " this is default message",
      Delete: "Delete"
    },
    {
      Sr_No: 3,

      User_Name: "John Doe",
      User_Email: "john.doe@example.com",
      Message: " this is default message",
      Delete: "Delete"
    },


  ];

  return (
    <div className=' flex flex-col gap-4 min-h-screen overflow-hidden'>
      {/* table */}
      <div className=' overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden  '>
        <table className='  border-2 bg-gray-100  w-full'>
          <tr className=' bg-blue-200 border-1'><th className="border-2 border-white p-2" > Sr.No</th> <th className="border-2 border-white p-2" >User Name</th> <th className="border-2 border-white p-2" >User Email</th> <th className="border-2 border-white p-2" >Message</th> <th className="border-2 border-white p-2" >Delete</th> </tr>

          {
            users.map((item: ContactType, index: any) => {
              return (
                <tr>
                  <td className=" border-2 border-white  p-2 ">{item.Sr_No}</td>

                  <td className=" border-2 border-white  p-2 ">{item.User_Name}</td>
                  <td className=" border-2 border-white  p-2 ">{item.User_Email}</td>
                  <td className=" border-2 border-white  p-2 ">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className=' border-none text-blue-600 underline underline-offset-2 '>View</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> */}
                          <AlertDialogDescription>
                            {item.Message}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </td>

                  <td className=" border-2 border-white  p-2  cursor-pointer text-blue-600 underline underline-offset-2">  <Trash2 /></td>

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

export default ContactList


