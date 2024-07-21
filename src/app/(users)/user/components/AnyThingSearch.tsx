import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function AnyThingSearch({anyThingSearch,setAnyThingSearch}:any) {
  return (
    <div className=' w-full h-full'>
            <div className={`dark:bg-[#020817] h-full flex flex-row shadow-md   w-full p-10 m-auto `} >
                <div className='  flex gap-2 flex-wrap justify-start items-center w-full'>
                   
                    <Input   placeholder='Search ' width={200} className={`w-[200px] `} onChange={(e)=>{
                      setAnyThingSearch(e.target.value)
                    }}  />
                   
                    <Button onClick={() => {
                        setAnyThingSearch(anyThingSearch)
                        // dispatch(SearchHomeJobs(JSON.stringify(search)));
                    }} className='w-[200px] bg-green-600 flex gap-2'><Search /> Search</Button>
                </div>
            </div>
        </div>
  )
}

export default AnyThingSearch