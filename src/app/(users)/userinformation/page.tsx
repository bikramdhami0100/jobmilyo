import React from 'react'
import PersonalInfromation from '../usercomponents/PersonalInfromation'
import EducationInfromation from '../usercomponents/EducationInfromation'
import EmploymentInfromation from '../usercomponents/EmploymentInfromation'

function userInformation() {
    return (
        <div className=' flex  flex-col justify-around items-center gap-10 '>
            <h1>Complete your Information</h1>
            <div className=' flex flex-col  justify-around items-center  md:flex-row lg:flex-row w-full'>

                <div className=' w-full'>
                    <PersonalInfromation />
                </div>
                <div>
                    <EducationInfromation />
                </div>
                <div>
                    <EmploymentInfromation />
                </div>
            </div>
        </div>
    )
}

export default userInformation
