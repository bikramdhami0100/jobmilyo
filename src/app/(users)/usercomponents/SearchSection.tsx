import { Input } from '@/components/ui/input'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function SearchSection() {
    return (
        <div>
            <div className=' flex flex-row w-[96%] shadow-md border rounded-md p-10 m-auto mt-4'>
                <div className='  flex gap-2 flex-wrap justify-evenly items-center w-full'>
                    <Input placeholder='Preferred Company' width={200} className='w-[200px]' />
                    <Input placeholder='Location' width={200} className='w-[200px]' /> 
                <Select>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Web Technology</SelectItem>
                            <SelectItem value="dark">Data Science</SelectItem>
                            <SelectItem value="system">App Development</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className='w-[200px] bg-blue-600 flex gap-2'><Search /> Search</Button>
                </div>
            </div>
        </div>
    )
}

export default SearchSection
