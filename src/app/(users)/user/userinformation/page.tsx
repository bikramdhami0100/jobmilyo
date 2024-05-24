"use client"
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { SingleUserAllInformation } from '@/app/Redux/Slice';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { CldUploadButton } from 'next-cloudinary';
import { Toaster } from '@/components/ui/toaster';
// import { profile } from 'console';
function userInformation() {
    const { toast } = useToast()
    // const [profile,setprofile]=useState();
    // const [cv,setcv]=useState();
    // const [marksheet,setmarksheet]=useState();
    
    const [formData, setFormData] = useState<any>({
        fname: '',
        gender: '',
        phone: '',

        PermanentAddress: '',
        CurrentAddress: '',
        profile:"",
        // personal information
        boardName: '',
        level: '',
        faculity: '',
        educationtype: '',
        gpaorpercentage: '',
        passedDate: '',
        marksheet:""
        // employement information
        ,
        previouscompany: '',
        previousrole: '',
        interestedCategory: '',
        interestedFiels: '',
        interestedEmploymentType: '',
        expectedPositionLevel: '',
        uploadCV: "",

    });
     
    // console.log(profile);
    const handleProfile = (result: any) => {


        // setprofile(result.info.secure_url);
        setFormData((prevState:any)=>({
            ...prevState,
            profile:result.info.secure_url
          }))
        if (result.info.secure_url) {
            toast({
                title: "Upload successfully ",
                description: "Profile Image is upload successfully",
              })
        }
        // Handle successful upload, e.g., save the URL to state
    };
    // upload marksheet
    const uploadMarksheet = (result: any) => {

        // setmarksheet(result.info.secure_url);
        setFormData((prevState:any)=>({
            ...prevState,
            marksheet:result.info.secure_url
          }))
        if (result.info.secure_url) {
            toast({
                title: "Upload successfully ",
                description: "Marksheet upload successfully ",
              })
        }
        // Handle successful upload, e.g., save the URL to state
    };
    //upload  cv
    const uploadCV = (result: any) => {
          setFormData((prevState:any)=>({
            ...prevState,
            uploadCV:result.info.secure_url
          }))
        // setcv(result.info.secure_url);
        if (result.info.secure_url) {
            toast({
                title: "Upload successfully ",
                description: "CV upload",
              })
        }
        // Handle successful upload, e.g., save the URL to state
    };

    const router = useRouter();
    const selector: any = useSelector((state: any) => {

        return state.signupinfo.Users;
    });

    if (selector[0] == undefined) {
        // router.push("/user/signup");
    }

    const { theme } = useTheme();


    console.log(theme);
    const dispatch = useDispatch();
    const Gender = ["Selcet Gender", "Male", "Female", "Other"];
    const boardNames = ["Select Board", "Nepal Board", "Higher Secondary Education Board", "Tribhuvan University", "Kathmandu University", "Pokhara University ", "Council for Technical Education and Vocational Training", "Nepal Medical Council", "Nepal Bar Council"];
    const levelNames = ["Select Level", "Primary Education", "Lower Secondary Education", "Secondary Education", "Higher Secondary Education", "Bachelor's Degree", "Master's Degree", "SEE", "Phd", "+2/PCL"];
    const facultyNames = ["Select Faculty", "Humanities", "Science", "Management", "Engineering", "Medicine", "Law", "Education", "Agriculture", "Fine Arts",];
    const interestedCategories = ["Select Category", "Technology", "Business", "Healthcare", "Education", "Finance", "Government", "Art and Design", "Science", "Non-profit", /* Add more categories as needed */];

    const interestedFields = ["Select Field", "Software Development", "Marketing", "Medicine", "Teaching", "Finance", "Public Service", "Graphic Design", "Research", "Social Work", /* Add more fields as needed */];

    const interestedEmploymentTypes = ["Select Employment Type", "Full-time", "Part-time", "Contract", "Freelance", "Internship", "Remote", "Temporary", /* Add more employment types as needed */];

    const expectedPositionLevels = ["Select Position Level", "Entry Level", "Mid Level", "Senior Level", "Executive", /* Add more position levels as needed */];

   
    // const [userId,setUserId]=useState();
    const [formErrors, setFormErrors] = useState({
        fname: '',
       
        gender: '',
        phone: '',
        PermanentAddress: '',
        CurrentAddress: '',
        dateofBirth:"",
        profile:"",
        // education information
        boardName: '',
        level: '',
        faculity: '',
        educationtype: '',
        gpaorpercentage: '',
        passedDate: '',
        marksheet: ""
        //employment information
        ,
        previouscompany: '',
        previousrole: '',
        interestedCategory: '',
        interestedFiels: '',
        interestedEmploymentType: '',
        expectedPositionLevel: '',
        uploadCV: ""
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

    const SubmitData = async () => {
        const data = await fetch("/api/userinfo/", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const result = await data.json();
        if (result) {
            // toast.success('🦄 Wow so easy!', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",

            // });
            toast({
                title: "Upload successfully ",
                description: "Hello world",
              })
            
        }
        //    console.log(result);
        // router.push("/user/Home");
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;

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
    const HandleUploadAndContinue = () => {
        if (formData.CurrentAddress != "" && formData.PermanentAddress != "" && formData.boardName != "" && formData.educationtype != "" && formData.expectedPositionLevel != "" && formData.faculity != "" && formData.fname != "" && formData.gender != "" && formData.gpaorpercentage != "" && formData.interestedCategory != "" && formData.interestedEmploymentType != "" && formData.interestedFiels != "" && formData.interestedFiels != "" && formData.level != "" && formData.lname != "" && formData.mname != "" && formData.passedDate != "" && formData.phone != "" && formData.previouscompany != "" && formData.previousrole != "") {
            const data: any = JSON.stringify(formData)
            dispatch(SingleUserAllInformation(data))
            router.push("/profile");
        }
    }
    //upload profile
  
    return (
        <div className=' flex  flex-col justify-around items-center gap-10 '>
            <Toaster/>
            <h1>Complete your Information</h1>

            <div className=' gap-10 flex flex-col justify-evenly items-center  md:flex-row lg:flex-row w-full '>
                {/* Personal Data */}
                <div className=' w-full'>
                    <div className="flex flex-col shadow-lg border p-4 m-auto gap-4 w-[80%]">
                        <h1 className="">Personal Information</h1>
                        <div>
                            <label htmlFor="fname">Full Name</label>
                            <Input
                                onChange={handleChange}
                                name="fname"
                                placeholder="full Name"
                                value={formData.fname}
                            ></Input>
                            {formErrors.fname && <span className="text-red-500">{formErrors.fname}</span>}
                        </div>
                        
                        <div>
                            <label htmlFor="Gender">Gender</label>
                            <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="gender" value={formData.gender} id="" onChange={handleChange}>

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
                                type='number'
                                placeholder="Enter your phone number"
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
                            <label htmlFor="CurrentAddress">Current Address</label>
                            <Input
                                onChange={handleChange}
                                name="CurrentAddress"
                                placeholder="Current Address"
                                value={formData.CurrentAddress}
                            ></Input>
                            {formErrors.CurrentAddress && <span className="text-red-500">{formErrors.CurrentAddress}</span>}
                        </div>
                        <div>
                            <label htmlFor="dateofBirth">Date of birth</label>
                            <Input
                                onChange={handleChange}
                                name="dateofBirth"
                                type='date'
                                placeholder="Date of birth "
                                value={formData.dateofBirth}
                            ></Input>
                            {/* {formErrors.CurrentAddress && <span className="text-red-500">{formErrors.CurrentAddress}</span>} */}
                        </div>
                        <div>
                            <label htmlFor="profile">Profile</label>
                            <CldUploadButton
                                className=' w-full text-left border-2 p-1 rounded-md '
                                onSuccess={handleProfile}
                                uploadPreset="wyyzhuyo"
                            />
                            {/* {formErrors.CurrentAddress && <span className="text-red-500">{formErrors.CurrentAddress}</span>} */}
                        </div>
                        {/* Repeat similar code for other fields */}
                    </div>
                </div>
                {/* Education */}
                <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Education Information</h1>
                    <div>
                        <label htmlFor="boardName">Board Name</label>
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="boardName" value={formData.boardName} id="" onChange={handleChange}>

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
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="level" value={formData.level} id="" onChange={handleChange}>

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
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="faculity" value={formData.faculity} id="" onChange={handleChange}>

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
                        <Input name='educationtype' placeholder='Government or Private' onChange={handleChange} value={formData.educationtype}></Input>
                    </div>
                    <div>
                        <label htmlFor="percentage">GPA/Percentage</label>
                        <Input name='gpaorpercentage' placeholder='GPA' onChange={handleChange} value={formData.gpaorpercentage}></Input>
                    </div>
                    <div>
                        <label htmlFor="pdate">Passed Date</label>
                        <Input type='date' name='passedDate' placeholder='2024-02-22' onChange={handleChange} value={formData.passedDate}></Input>
                    </div>
                    <div className="grid w-[100%] max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture"  >Marksheet/Transcript/Grade Sheet</Label>
                        <CldUploadButton
                                className=' w-full text-left border-2 p-1 rounded-md '
                                onSuccess={uploadMarksheet}
                                uploadPreset="wyyzhuyo"
                            />
                    </div>
                    {/* <p>Further requirement are apply in our major project e.g marksheet, character certificate etc</p> */}
                </div>
                {/* Employment  */}
                <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
                    <h1 className=' '> Employment Information</h1>
                    <div>
                        <label htmlFor="previouscompany">Previour Company</label>
                        <Input name='previouscompany' placeholder='Optional' value={formData.previouscompany} onChange={handleChange}  ></Input>
                    </div>
                    <div>
                        <label htmlFor="previousrole">Previous Role</label>
                        <Input name='previousrole' placeholder='Optional' value={formData.previousrole} onChange={handleChange}></Input>
                    </div>
                    <div>
                        <label htmlFor="interestedCategory">Interested Category</label>
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="interestedCategory" value={formData.interestedCategory} id="" onChange={handleChange}>

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
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="interestedFiels" value={formData.interestedFiels} id="" onChange={handleChange}>

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
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="interestedEmploymentType" value={formData.interestedEmploymentType} id="" onChange={handleChange}>

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
                        <select className={`flex ${theme == "light" ? "bg-[rgb(255,255,255)]" : "bg-[rgb(2,8,23)] "} border w-full p-2 rounded-md outline-1 outline-black`} name="expectedPositionLevel" value={formData.expectedPositionLevel} id="" onChange={handleChange}>

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
                        <CldUploadButton
                                className=' w-full text-left border-2 p-1 rounded-md '
                                onSuccess={uploadCV}
                                uploadPreset="wyyzhuyo"
                                
                            />
                    </div>
                    <div>
                        <Button onClick={SubmitData}>  Continue ⏩ 🚀⏩</Button>
                    </div>
                </div>
            </div>
            {/* <Button onClick={SubmitData}>Testin value</Button> */}
        </div>
    )
}

export default userInformation