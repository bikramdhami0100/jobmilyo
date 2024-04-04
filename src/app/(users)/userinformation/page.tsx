import { Input } from '@/components/ui/input'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function userInformation() {
    
    return (
        <div className=' flex  flex-col justify-around items-center gap-10 '>
            <h1>Complete your Information</h1>
            <div className=' gap-10 flex flex-col justify-evenly items-center  md:flex-row lg:flex-row w-full '>
                <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Personal Information</h1>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <Input name='fname' placeholder='First Name'  ></Input>
                    </div>
                    <div>
                        <label htmlFor="mname">Middle Name</label>
                        <Input name='mname' placeholder='Middle Name' ></Input>
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <Input name='lname' placeholder='Last Name' ></Input>
                    </div>
                    <div>
                        <label htmlFor="Gender">Gender</label>
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

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
                <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Education Information</h1>
                    <div>
                        <label htmlFor="level">Level</label>
                        <Input name='level' placeholder='Enter Level'  ></Input>
                    </div>
                    <div>
                        <label htmlFor="Faculity">Faculity</label>
                        <Input name='Faculity' placeholder='Faculity' ></Input>
                    </div>
                    <div>
                        <label htmlFor="gyear">Graduation Year</label>
                        <Input name='gyear' placeholder='Graduation Year' ></Input>
                    </div>
                    <div>
                        <label htmlFor="Gender">Gender</label>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Select a Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

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
                <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Employment Information</h1>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <Input name='fname' placeholder='First Name' ></Input>
                    </div>
                    <div>
                        <label htmlFor="mname">Middle Name</label>
                        <Input name='mname' placeholder='Middle Name' ></Input>
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <Input name='lname' placeholder='Last Name' ></Input>
                    </div>
                    <div>
                        <label htmlFor="Gender">Gender</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

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
            </div>
        </div>
    )
}

export default userInformation
