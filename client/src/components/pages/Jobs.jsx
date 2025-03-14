import { useSelector } from "react-redux"
import FilterCard from "../FilterCard"
import Job from "../Job"




const Jobs = () => {
  const {allJobs} = useSelector(store => store.jobs)
    return (
      <div className="max-w-7xl mx-auto">
<div className="flex  gap-5">
  <div className="w-20%"><FilterCard/></div>
  {
    allJobs.length <= 0 ? <span>Job Not Found</span> : (
      <div className="flex-1 h-[80vh] p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {
            allJobs.map((job)=>(
              <div key={job?._id} >
                <Job job={job}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
</div>
      </div>
    )
}

export default Jobs