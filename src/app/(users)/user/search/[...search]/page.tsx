"use client"
import React, { useEffect, useState } from 'react'
import SearchFilters from '../../components/SearchFilters'
import SearchMainPart from '../../components/SearchMainPart'
import { useRouter } from 'next/router'

function UserSearchContent({params}:any) {

  const [selectField, setSelectField] = useState<any>({
    location: "",
    budget: "",
    posting: "",
    experience: "",
    employment: ""
  })

  useEffect(() => {
    if (params && Array.isArray(params)) {
        console.log(params)
      
    }
  }, [params]);
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