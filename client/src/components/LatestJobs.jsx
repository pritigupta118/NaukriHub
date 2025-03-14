import { useSelector } from "react-redux"
import LatestjobCards from "./LatestjobCards"



const LatestJobs = () => {
  const {allJobs} = useSelector(store => store.jobs)

  return (
    <div className="flex flex-col items-center justify-center my-20 mx-auto">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold"><span className="text-pink-600">Latest & Top</span> Job Openings</h1>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          allJobs.length <= 0 ? <span>Job not found</span> : allJobs.slice(0,6).map((job) => (
            <LatestjobCards key={job._id} job={job}/>
          ))
        }
      </div>

    </div>
  )
}

export default LatestJobs
