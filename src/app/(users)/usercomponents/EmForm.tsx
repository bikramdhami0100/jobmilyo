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
import { Button } from '@/components/ui/button'
function EmForm() {
  return (
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
        <label htmlFor="ifield">Interested Category</label>
        <Select name='ifield'>
            <SelectTrigger>
                <SelectValue placeholder="Select Intereste Category " />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="Humanity">Humanity</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    </div>
    <div>
        <label htmlFor="irole">Interested Field</label>
        <Select name='irole'>
            <SelectTrigger>
                <SelectValue placeholder="Select a Interested Field" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="Front-End Engineer">Front-End Engineer
                    </SelectItem>
                    <SelectItem value="Back-End Engineer">Back-End Engineer</SelectItem>
                    <SelectItem value="Full Stack Engineer">Full Stack Engineer</SelectItem>
                    <SelectItem value='Software Engineer in Test (QA Engineer)'>Software Engineer in Test (QA Engineer)</SelectItem>
                    <SelectItem value='DevOps Engineer'>DevOps Engineer</SelectItem>
                    <SelectItem value='Data Engineer'>Data Engineer</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    </div>

    <div>
        <label htmlFor="itype">Interested Employement Type</label>
        <Select name='itype'>
            <SelectTrigger>
                <SelectValue placeholder="Select a Employment Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="Full-Time">Full-Time
                    </SelectItem>
                    <SelectItem value="Part-Time">Part-Time</SelectItem>
                    <SelectItem value='Some-Time'>Some-Time</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    </div>
    <div>
        <label htmlFor="elevel">Expected Position Level</label>
        <Select name='elevel'>
            <SelectTrigger>
                <SelectValue placeholder="Select a Expected Position Level" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="Mid">Mid
                    </SelectItem>
                    <SelectItem value="Initial">Initial</SelectItem>
                    <SelectItem value="Export">Export</SelectItem>
                    <SelectItem value='Experience'>Experience</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    </div>
    <div className="grid w-full  items-center gap-1.5">
        <Label htmlFor="picture">Upload CV</Label>
        <Input id="picture" type="file" placeholder='Select file'  className='w-full'/>
    </div>
    <div>
       <Button> Upload and Continue</Button>
    </div>
</div>
  )
}

export default EmForm
