// import { Input } from '@/components/ui/input'
// import React, { useState } from 'react'

// import { useTheme } from 'next-themes';
// import { useSelector } from 'react-redux';

// function PForm() {
//     const selector=useSelector((state)=>{
//         console.log(state);

//     })
//     const theme=useTheme();

//     const settheme=theme.theme;
//     const nameRegex = /^[a-zA-Z\s]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     const [fname, setFname] = useState<string>();
//     const [mname, setmname] = useState<string>();
//     const [lname, setlname] = useState<string>();
//     const [gender, setgender] = useState<string>();
//     const [phone, setphone] = useState<string>();
//     const [PermanentAddress, setPermanentAddress] = useState<string>();
//     const [CurrentAddress, setCurrentAddress] = useState<string>();
//     const [email, setemail] = useState<string | undefined>();
//     const [selectedGender, setSelectedGender] = useState<string | null>(null);


//    const Gender=["Selcet Gender","Male","Female","Other"]
//   return (
//     <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
//                     <h1 className=' '> Personal Information</h1>
//                     <div>
//                         <label htmlFor="fname">First Name</label>
//                         <Input onChange={(e)=>{
//                              setFname(e.target.value)
//                         }} name='fname' placeholder='First Name'  ></Input>
//                     </div>
//                     <div>
//                         <label htmlFor="mname">Middle Name</label>
//                         <Input onChange={(e)=>{
//                              setmname(e.target.value)
//                         }} name='mname' placeholder='Middle Name' ></Input>
//                     </div>
//                     <div>
//                         <label htmlFor="lname">Last Name</label>
//                         <Input onChange={(e)=>{
//                              setlname(e.target.value)
//                         }} name='lname' placeholder='Last Name' ></Input>
//                     </div>
//                     <div>
//                         <label htmlFor="Gender">Gender</label>
//                          <select className={`flex ${theme.theme=="dark"|| "system"? "bg-[rgb(2,8,23)]":"bg-white" } border w-full p-2 rounded-md outline-1 outline-black`} name="Gender" id="" onChange={(e)=>{
//                             setgender(e.target.value);
//                          }}>

//                             {
//                                   Gender.map((item,index)=>{
//                                      return(<option className=' '>{item}</option>)
//                                   })
//                             }
//                          </select>

//                     </div>
//                     <div>
//                         <label htmlFor="pnumber">Phone Number</label>
//                         <Input name='pnumber' placeholder='Phone Number' ></Input>
//                     </div>
//                     <div>
//                         <label htmlFor="paddress">Permanent Address</label>
//                         <Input name='paddress' placeholder='Permanent Address' ></Input>
//                     </div>
//                     <div>
//                         <label htmlFor="caddress">Current Address</label>
//                         <Input name='caddress' placeholder='Current Address' ></Input>
//                     </div>
//                 </div>
//   )
// }

// export default PForm
"use client"

import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

import { useTheme } from 'next-themes';
import { useSelector } from 'react-redux';

function PForm() {
    const theme = useTheme();
    // const selector = useSelector((state) => {
    //     console.log(state);
    // });
    const Gender = ["Selcet Gender", "Male", "Female", "Other"]
    const [formData, setFormData] = useState({
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        phone: '',
        PermanentAddress: '',
        CurrentAddress: '',
        email: '',
    });

    const [formErrors, setFormErrors] = useState({
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        phone: '',
        PermanentAddress: '',
        CurrentAddress: '',
        email: '',
    });

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4}|\d{10})$/;
    const genderRegex = /^(Male|Female|Other)$/;
    const AddressRegex=/^[a-zA-Z0-9\s,.\-]{1,100}$/;
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
            case 'email':
                setFormErrors({
                    ...formErrors,
                    email: emailRegex.test(value) ? '' : 'Invalid email',
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
            // Add validation for other fields as needed
            default:
                break;
        }
    };
    console.log(formData);
    return (
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
    );
}

export default PForm;


