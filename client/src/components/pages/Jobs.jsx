import { useSelector } from "react-redux"
import FilterCard from "../FilterCard"
import Job from "../Job"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion';
import { ListFilterPlus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";




const Jobs = () => {
  const { allJobs, filterQuery } = useSelector(store => store.jobs)
  const [filterJobs, setFilterJobs] = useState(allJobs)

  useEffect(() => {
    if (filterQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(filterQuery.toLowerCase()) ||
          job.jobType.toLowerCase().includes(filterQuery.toLowerCase())
      })
      setFilterJobs(filteredJobs)
    } else {
      setFilterJobs(allJobs)
    }
  }, [allJobs, filterQuery])
  return (
    <div className="max-w-7xl mx-auto">
    <div className="p-2">
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
    < ListFilterPlus/>

      </PopoverTrigger>
      <PopoverContent>
      <FilterCard />
      </PopoverContent>
    </Popover>
    </div>
      
      <div className="flex  gap-5">
        <div className="hidden md:block w-20%"><FilterCard /></div>
        {
          filterJobs.length <= 0 ? <span>Job Not Found</span> : (
            <div className="flex-1 h-[80vh] p-2">
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-0 md:p-2">
                {
                  filterJobs.map((job) => (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      key={job?._id} >
                      <Job job={job} />
                    </motion.div>
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