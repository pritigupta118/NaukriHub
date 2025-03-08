import FilterCard from "../FilterCard"
import Job from "../Job"



const jobArray = [1,2,3,4,5,6,7,8]
const Jobs = () => {
    return (
      <div className="max-w-7xl mx-auto">
<div className="flex  gap-5">
  <div className="w-20%"><FilterCard/></div>
  {
    jobArray.length <= 0 ? <span>Job Not Found</span> : (
      <div className="flex-1 h-[80vh] p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {
            jobArray.map((job,index)=>(
              <div>
                <Job/>
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