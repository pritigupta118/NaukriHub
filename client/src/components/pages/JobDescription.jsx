import { Badge } from "../ui/badge"
import { Button } from "../ui/button"




const JobDescription = () => {
  const isApplied = false
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <div className="justify-between items-center grid grid-col gap-6 sm:flex">
        <div>
          <h1 className="font-bold text-xl">Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="default" className="text-blue-700 bg-gray-100 font-bold hover:bg-gray-100">12 Positins</Badge>
            <Badge variant="default" className="text-red-800 bg-gray-100 font-bold hover:bg-gray-100">Remote</Badge>
            <Badge variant="default" className="text-violet-800 bg-gray-100 font-bold hover:bg-gray-100">12LPA</Badge>

          </div>
        </div>
        <div>
          {
            isApplied ?
              (
                <Button disabled={true} className="cursor-not-allowed">Applied</Button>
              ) : (
                <Button>Apply Now</Button>
              )}
        </div>
      </div>
      <h1 className="border-b border-gray-200 py-4 font-medium">Job Description</h1>
      <div>
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-thin">Frontend Developer</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-thin">Bangaluru</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam fuga culpa distinctio temporibus? Veniam id perspiciatis praesentium ratione adipisci pariatur. Consectetur ipsa fugit dolore ullam reprehenderit, ea voluptatibus itaque.</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-thin">2 years</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-thin">12LPA</span></h1>
        <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-thin">4</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-thin">12-04-2025</span></h1>
      </div>
    </div>
  )
}

export default JobDescription
