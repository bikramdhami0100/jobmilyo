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
function EduForm() {
  return (
    <div className=' flex flex-col shadow-lg border p-4  m-auto gap-4 w-[80%]'>
    <h1 className=' '> Education Information</h1>
    <div>
        <label htmlFor="bname">Board Name</label>
        <Select value='bname'>
            <SelectTrigger >
                <SelectValue placeholder="Select a Board Name" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem value="Far-western University,Kanchanpur">Far-western University,Kanchanpur</SelectItem>
                    <SelectItem value="Tribhuvan University,Kirtipur">Tribhuvan University,Kirtipur</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    </div>
    <div>
        <label htmlFor="level">Level</label>
        <Select value='level'>
            <SelectTrigger >
                <SelectValue placeholder="Select a Level" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="Bachelors">Bachelors</SelectItem>
                    <SelectItem value="PhD">PhD</SelectItem>
                    <SelectItem value="Masters">Masters</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    </div>
    <div>
        <label htmlFor="faculity">Faculity</label>
        <Select value='faculity'>
            <SelectTrigger >
                <SelectValue placeholder="Select a Faculity" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Huminities">Huminities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

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
    <p>Further requirement are apply in our major project e.g marksheet, character certificate etc</p>
</div>
  )
}

export default EduForm
