import React from 'react'
import DetailsUserPostjobs from '../../usercomponents/jobscomp/DetailsUserPostjobs'
import ApplyUserPostJobs from '../../usercomponents/jobscomp/ApplyUserPostJobs'

function HandleDetailAndApply(params:any) {
    const showbjobs=params.params.apply[0]
    console.log(showbjobs)
    // console.log(params)
  return (
    <div>
        {
            showbjobs==="details"?<DetailsUserPostjobs/>:<ApplyUserPostJobs/>
        }
    </div>
  )
}

export default HandleDetailAndApply