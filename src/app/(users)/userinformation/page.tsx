"use client"
import React, { useState } from 'react'

import { useEffect } from 'react';

import EduForm from '../usercomponents/EduForm'
import EmForm from '../usercomponents/EmForm'
import { useSelector } from "react-redux";
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
function userInformation() {
    const selector = useSelector((state) => {
        console.log(state);
    })
    const theme = useTheme();
    // const selector = useSelector((state) => {
    //     console.log(state);
    // });
    const Gender = ["Selcet Gender", "Male", "Female", "Other"];
    const boardNames = ["Select Board", "Nepal Board", "Higher Secondary Education Board", "Tribhuvan University", "Kathmandu University", "Pokhara University ", "Council for Technical Education and Vocational Training", "Nepal Medical Council", "Nepal Bar Council"];
    const levelNames = ["Select Level", "Primary Education", "Lower Secondary Education", "Secondary Education", "Higher Secondary Education", "Bachelor's Degree", "Master's Degree", "SEE", "Phd", "+2/PCL"];
    const facultyNames = ["Select Faculty", "Humanities", "Science", "Management", "Engineering", "Medicine", "Law", "Education", "Agriculture", "Fine Arts",];
    const interestedCategories = ["Select Category", "Technology", "Business", "Healthcare", "Education", "Finance", "Government", "Art and Design", "Science", "Non-profit", /* Add more categories as needed */];

    const interestedFields = ["Select Field", "Software Development", "Marketing", "Medicine", "Teaching", "Finance", "Public Service", "Graphic Design", "Research", "Social Work", /* Add more fields as needed */];

    const interestedEmploymentTypes = ["Select Employment Type", "Full-time", "Part-time", "Contract", "Freelance", "Internship", "Remote", "Temporary", /* Add more employment types as needed */];

    const expectedPositionLevels = ["Select Position Level", "Entry Level", "Mid Level", "Senior Level", "Executive", /* Add more position levels as needed */];

    const [formData, setFormData] = useState({
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        phone: '',
        PermanentAddress: '',
        CurrentAddress: '',
        // personal information
        boardName: '',
        level: '',
        faculity: '',
        educationtype: '',
        gpaorpercentage: '',
        passedDate: '',
        marksheet: ''
        // employement information
        ,
        previouscompany: '',
        previousrole: '',
        interestedCategory: '',
        interestedFiels: '',
        interestedEmploymentType: '',
        expectedPositionLevel: '',
        uploadCV: '',

    });

    const [formErrors, setFormErrors] = useState({
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        phone: '',
        PermanentAddress: '',
        CurrentAddress: '',
        // education information
        boardName: '',
        level: '',
        faculity: '',
        educationtype: '',
        gpaorpercentage: '',
        passedDate: '',
        marksheet: ''
        //employment information
        ,
        previouscompany: '',
        previousrole: '',
        interestedCategory: '',
        interestedFiels: '',
        interestedEmploymentType: '',
        expectedPositionLevel: '',
        uploadCV: ''
    });
    const interestedCategoriesRegex = /^(Select Category|Technology|Business|Healthcare|Education|Finance|Government|Art and Design|Science|Non-profit)$/;

    const interestedFieldsRegex = /^(Select Field|Software Development|Marketing|Medicine|Teaching|Finance|Public Service|Graphic Design|Research|Social Work)$/;

    const interestedEmploymentTypesRegex = /^(Select Employment Type|Full-time|Part-time|Contract|Freelance|Internship|Remote|Temporary)$/;

    const expectedPositionLevelsRegex = /^(Select Position Level|Entry Level|Mid Level|Senior Level|Executive)$/;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4}|\d{10})$/;
    const genderRegex = /^(Male|Female|Other)$/;
    const AddressRegex = /^[a-zA-Z0-9\s,.\-]{1,100}$/;
    // const boardNamesRegex = /^(Select Board|Nepal Board|Higher Secondary Education Board|Tribhuvan University|Kathmandu University|Pokhara University|Council for Technical Education and Vocational Training|Nepal Medical Council|Nepal Bar Council)$/;
    const levelNamesRegex = /^(Select Level|Primary Education|Lower Secondary Education|Secondary Education|Higher Secondary Education|Bachelor's Degree|Master's Degree|SEE|Phd|\+2\/PCL)$/;
    const facultyNamesRegex = /^(Select Faculty|Humanities|Science|Management|Engineering|Medicine|Law|Education|Agriculture|Fine Arts)$/;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log("this is name" + name + "and value is " + value)
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validation
        switch (name) {
            case 'fname':
            case 'mname':
            case 'lname':
                setFormErrors({
                    ...formErrors,
                    [name]: nameRegex.test(value) ? '' : 'Invalid input',
                });
                break;

            case 'gender':
                setFormErrors({
                    ...formErrors,
                    gender: genderRegex.test(value) ? '' : 'Invalid gender',
                });
                break;
            case 'phone':
                setFormErrors({
                    ...formErrors,
                    phone: phoneRegex.test(value) ? '' : 'Invalid Phone Number',
                });
                break;
            case 'PermanentAddress':
                setFormErrors({
                    ...formErrors,
                    PermanentAddress: AddressRegex.test(value) ? '' : 'Invalid Address',
                });
                break;
            case 'CurrentAddress':
                setFormErrors({
                    ...formErrors,
                    CurrentAddress: AddressRegex.test(value) ? '' : 'Invalid Address',
                });
                break;

            //education error handeling
            // Add validation for other fields as needed
            default:
                break;
        }
    };
    console.log(formData);
    return (
        <div className=' flex  flex-col justify-around items-center gap-10 '>
            <h1>Complete your Information</h1>
            <div className=' gap-10 flex flex-col justify-evenly items-center  md:flex-row lg:flex-row w-full '>
                {/* Personal Data */}
                <div className=' w-full'>
                    <div className="flex flex-col shadow-lg border p-4 m-auto gap-4 w-[80%]">
                        <h1 className="">Personal Information</h1>
                        <div>
                            <label htmlFor="fname">First Name</label>
                            <Input
                                onChange={handleChange}
                                name="fname"
                                placeholder="First Name"
                                value={formData.fname}
                            ></Input>
                            {formErrors.fname && <span className="text-red-500">{formErrors.fname}</span>}
                        </div>
                        <div>
                            <label htmlFor="mname">Middle Name</label>
                            <Input
                                onChange={handleChange}
                                name="mname"
                                placeholder="Middle Name"
                                value={formData.mname}
                            ></Input>
                            {formErrors.mname && <span className="text-red-500">{formErrors.mname}</span>}
                        </div>
                        <div>
                            <label htmlFor="lname">Last Name</label>
                            <Input
                                onChange={handleChange}
                                name="lname"
                                placeholder="Last Name"
                                value={formData.lname}
                            ></Input>
                            {formErrors.lname && <span className="text-red-500">{formErrors.lname}</span>}
                        </div>
                        <div>
                            <label htmlFor="Gender">Gender</label>
                            <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="gender" value={formData.gender} id="" onChange={handleChange}>

                                {
                                    Gender.map((item, index) => {
                                        return (<option className=' '>{item}</option>)
                                    })
                                }
                            </select>
                            {formErrors.gender && <span className=' text-red-600'>{formErrors.gender}</span>}

                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <Input
                                onChange={handleChange}
                                name="phone"
                                placeholder="Last Name"
                                value={formData.phone}
                            ></Input>
                            {formErrors.phone && <span className="text-red-500">{formErrors.phone}</span>}
                        </div>
                        <div>
                            <label htmlFor="PermanentAddress">Permanent Address</label>
                            <Input
                                onChange={handleChange}
                                name="PermanentAddress"
                                placeholder="Permanent Address"
                                value={formData.PermanentAddress}
                            ></Input>
                            {formErrors.PermanentAddress && <span className="text-red-500">{formErrors.PermanentAddress}</span>}
                        </div>
                        <div>
                            <label htmlFor="CurrentAddress">Permanent Address</label>
                            <Input
                                onChange={handleChange}
                                name="CurrentAddress"
                                placeholder="Current Address"
                                value={formData.CurrentAddress}
                            ></Input>
                            {formErrors.CurrentAddress && <span className="text-red-500">{formErrors.CurrentAddress}</span>}
                        </div>
                        {/* Repeat similar code for other fields */}
                    </div>
                </div>
                {/* Education */}
                <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Education Information</h1>
                    <div>
                        <label htmlFor="boardName">Board Name</label>
                        <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="boardName" value={formData.boardName} id="" onChange={handleChange}>

                            {
                                boardNames.map((item, index) => {
                                    return (<option className=' '>{item}</option>)
                                })
                            }
                        </select>
                        {formErrors.boardName && <span className=' text-red-600'>{formErrors.boardName}</span>}

                    </div>
                    <div>
                        <label htmlFor="level">Level</label>
                        <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="level" value={formData.level} id="" onChange={handleChange}>

                            {
                                levelNames.map((item, index) => {
                                    return (<option className=' '>{item}</option>)
                                })
                            }
                        </select>
                        {formErrors.level && <span className=' text-red-600'>{formErrors.level}</span>}

                    </div>
                    <div>
                        <label htmlFor="faculity">Faculity</label>
                        <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="faculity" value={formData.faculity} id="" onChange={handleChange}>

                            {
                                facultyNames.map((item, index) => {
                                    return (<option className=' '>{item}</option>)
                                })
                            }
                        </select>
                        {formErrors.faculity && <span className=' text-red-600'>{formErrors.faculity}</span>}

                    </div>

                    <div>
                        <label htmlFor="edutype">Education Type</label>
                        <Input name='edutype' placeholder='Government or Private' ></Input>
                    </div>
                    <div>
                        <label htmlFor="percentage">GPA/Percentage</label>
                        <Input name='percentage' placeholder='GPA' ></Input>
                    </div>
                    <div>
                        <label htmlFor="pdate">Passed Date</label>
                        <Input name='pdate' placeholder='2024-02-22' ></Input>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Marksheet/Transcript/Grade Sheet</Label>
                        <Input name='marksheet' id="picture" type="file" value={formData.marksheet} accept='' onClick={handleChange} />
                    </div>
                    {/* <p>Further requirement are apply in our major project e.g marksheet, character certificate etc</p> */}
                </div>
                {/* Employment  */}
                <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Employment Information</h1>
                    <div>
                        <label htmlFor="pcompany">Previour Company</label>
                        <Input name='pcompany' placeholder='Optional' ></Input>
                    </div>
                    <div>
                        <label htmlFor="prole">Previous Role</label>
                        <Input name='prole' placeholder='Optional' ></Input>
                    </div>
                    <div>
                        <label htmlFor="interestedCategory">Interested Category</label>
                        <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="interestedCategory" value={formData.interestedCategory} id="" onChange={handleChange}>

                            {
                                interestedCategories.map((item, index) => {
                                    return (<option className=' '>{item}</option>)
                                })
                            }
                        </select>
                        {formErrors.interestedCategory && <span className=' text-red-600'>{formErrors.interestedCategory}</span>}

                    </div>
                    <div>
                            <label htmlFor="interestedFiels">Interested Field</label>
                            <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="interestedFiels" value={formData.interestedFiels} id="" onChange={handleChange}>

                                {
                                    interestedFields.map((item, index) => {
                                        return (<option className=' '>{item}</option>)
                                    })
                                }
                            </select>
                            {formErrors.interestedFiels && <span className=' text-red-600'>{formErrors.interestedFiels}</span>}

                        </div>
                        <div>
                            <label htmlFor="interestedEmploymentType">Interested Employement Type</label>
                            <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="interestedEmploymentType" value={formData.interestedEmploymentType} id="" onChange={handleChange}>

                                {
                                    interestedEmploymentTypes.map((item, index) => {
                                        return (<option className=' '>{item}</option>)
                                    })
                                }
                            </select>
                            {formErrors.interestedEmploymentType && <span className=' text-red-600'>{formErrors.interestedEmploymentType}</span>}

                        </div>
                        <div>
                            <label htmlFor="expectedPositionLevel">Expected Position Level</label>
                            <select className={`flex ${theme.theme == "dark" || "system" ? "bg-[rgb(2,8,23)]" : "bg-white"} border w-full p-2 rounded-md outline-1 outline-black`} name="expectedPositionLevel" value={formData.expectedPositionLevel} id="" onChange={handleChange}>

                                {
                                    expectedPositionLevels.map((item, index) => {
                                        return (<option className=' '>{item}</option>)
                                    })
                                }
                            </select>
                            {formErrors.expectedPositionLevel && <span className=' text-red-600'>{formErrors.expectedPositionLevel}</span>}

                        </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label htmlFor="picture">Upload CV</Label>
                        <Input id="picture" type="file" placeholder='Select file' className='w-full' />
                    </div>
                    <div>
                        <Button> Upload and Continue</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userInformation
