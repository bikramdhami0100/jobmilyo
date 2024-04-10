import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function PForm() {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [fname, setFname] = useState<string>();
    const [mname, setmname] = useState<string>();
    const [lname, setlname] = useState<string>();
    const [gender, setgender] = useState<string>();
    const [email, setemail] = useState<string | undefined>();
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    console.log(gender)
   const Gender=["Selcet Gender","Male","Female","Other"]
  return (
    <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Personal Information</h1>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <Input onChange={(e)=>{
                             setFname(e.target.value)
                        }} name='fname' placeholder='First Name'  ></Input>
                    </div>
                    <div>
                        <label htmlFor="mname">Middle Name</label>
                        <Input onChange={(e)=>{
                             setmname(e.target.value)
                        }} name='mname' placeholder='Middle Name' ></Input>
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <Input onChange={(e)=>{
                             setlname(e.target.value)
                        }} name='lname' placeholder='Last Name' ></Input>
                    </div>
                    <div>
                        <label htmlFor="Gender">Gender</label>
                         <select className=' bg-transparent flex border w-full p-2 rounded-md outline-1 outline-black' name="Gender" id="" onChange={(e)=>{
                            setgender(e.target.value);
                         }}>
                            
                            {
                                  Gender.map((item,index)=>{
                                     return(<option className=' w-full outline-1'>{item}</option>)
                                  })
                            }
                         </select>

                    </div>
                    <div>
                        <label htmlFor="pnumber">Phone Number</label>
                        <Input name='pnumber' placeholder='Phone Number' ></Input>
                    </div>
                    <div>
                        <label htmlFor="paddress">Permanent Address</label>
                        <Input name='paddress' placeholder='Permanent Address' ></Input>
                    </div>
                    <div>
                        <label htmlFor="caddress">Current Address</label>
                        <Input name='caddress' placeholder='Current Address' ></Input>
                    </div>
                </div>
  )
}

export default PForm
