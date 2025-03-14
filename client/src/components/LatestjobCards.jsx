import { Badge } from "./ui/badge"



const LatestjobCards = ({job}) => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer text-black flex flex-col gap-3">
      <div>
        <h1 className="font-bold text-xl">{job?.company?.companyName}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      <div>
        <h1 className="font-semibold text-base">{job?.title}</h1>
        <p className="text-sm">{job?.description}</p>
      </div>
      <div className="flex gap-2 text-foreground">
      <Badge variant="default" className="text-blue-700 bg-gray-100 font-bold hover:bg-gray-100">{job?.position} Positins</Badge>
      <Badge variant="default" className="text-red-800 bg-gray-100 font-bold hover:bg-gray-100">{job?.jobType}</Badge>
      <Badge variant="default" className="text-violet-800 bg-gray-100 font-bold hover:bg-gray-100">{job?.salary}</Badge>
      </div>
    </div>
  )
}

export default LatestjobCards
