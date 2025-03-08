import LatestjobCards from "./LatestjobCards"


const jobs = [1, 2, 3, 4, 5, 6]
const LatestJobs = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 mx-auto">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold"><span className="text-pink-600">Latest & Top</span> Job Openings</h1>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          jobs.slice(0,6).map((job, index) => (
            <LatestjobCards />
          ))
        }
      </div>

    </div>
  )
}

export default LatestJobs
