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
import { Label } from '@/components/ui/label'
import PForm from '../usercomponents/PForm'
import EduForm from '../usercomponents/EduForm'
import EmForm from '../usercomponents/EmForm'

function userInformation() {

    return (
        <div className=' flex  flex-col justify-around items-center gap-10 '>
            <h1>Complete your Information</h1>
            <div className=' gap-10 flex flex-col justify-evenly items-center  md:flex-row lg:flex-row w-full '>
                <PForm/>
                {/* Education */}
               <EduForm/>
                {/* Employment  */}
                <EmForm/>
            </div>
        </div>
    )
}

export default userInformation
