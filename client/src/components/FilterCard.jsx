import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";



const filterData = [
  {
    filterType: "Location",
    array: ["Hyderabad", "Bangalore", "Mumbai", "Delhi"]
  },
  {
    filterType: "Job Type",
    array: ["Full-time", "Part-time", "Internship", "Contract"]
  },
  {
    filterType: "Experience Level",
    array: ["Fresher", "Mid-level", "Senior"]
  },
  {
    filterType: "Industry",
    array: ["IT", "Finance", "Healthcare", "Education"]
  },
  {
    filterType: "Salary Range",
    array: ["0-3 LPA", "3-6 LPA", "6-10 LPA", "10+ LPA"]
  }
];


const FilterCard = () => {
  return (
    <div className="mt-3 h-[88vh] overflow-y-auto px-2 hidden md:block md:px-2">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
     <Separator className="my-2"/>
      <RadioGroup>
        {filterData.map((data, index) => (
          <div className="flex flex-col gap-2">
            <h2 key={index} className="font-bold text-md">{data.filterType}</h2>
            {
              data.array.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <RadioGroupItem value={item}/>
                  <Label htmlFor="r1" className="text-sm font-normal">{item}</Label>
                </div>

              ))
            }
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCard
