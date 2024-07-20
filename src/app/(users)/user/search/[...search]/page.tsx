"use client"
import React, { useState } from 'react'
import SearchFilters from '../../components/SearchFilters'
import SearchMainPart from '../../components/SearchMainPart'

function UserSearchContent({params}:any) {
  const [selectField, setSelectField] = useState<any>({
    location: "",
    budget: "",
    posting: "",
    experience: "",
    employment: ""
  })
  // console.log(params.search)
  return (
    <div>
      {/* filters */}
      < div  className='flex flex-wrap '>
        <div className=' w-[18%] border'>
          <div className='hidden w-full md:flex lg:flex items-center justify-center p-2'>
            <SearchFilters selectField={selectField} setSelectField={setSelectField} />
          </div>
        </div>
        <div className='md:w-[60%] lg:w-[60%]'>
          <SearchMainPart selectField={selectField} />
        </div>
        <div className='w-[18%]'>
          profile
          {/* <SearchMainPart selectField={selectField} /> */}
        </div>
      </div>
    </div>
  )
}

export default UserSearchContent