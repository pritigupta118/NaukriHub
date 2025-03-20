import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { useDispatch } from "react-redux";
import { setFilterQuery } from "@/redux/jobSlice";
import { ListFilterPlus } from "lucide-react";



const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangalore", "Hydrabad", "Pune", "Mumbai", "Remote"]
},
{
    filterType: "Role",
    array: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mern Stack Developer", "DataScience Developer"]
},
{
    filterType: "JobType",
    array: ["Full Time", "Internship", "Part Time", "Freelance", "Contact"]
}
];


const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState()
  const dispatch = useDispatch()

  const selectChangeHandler = (value) => {
    setSelectedValue(value)
  }

  useEffect(() => {
    console.log(selectedValue)
     dispatch( setFilterQuery(selectedValue))
  }, [selectedValue])
  
  return (
    <>
  
<div className="mt-3 h-[88vh] overflow-y-auto px-2 md:px-2">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <Separator className="my-2" />
      <RadioGroup value={selectedValue} onValueChange={selectChangeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h2 className="font-bold text-md">{data.filterType}</h2>
            {
              
                data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`
                return (
                  <div  key={itemId}  className="flex items-center gap-2">
                  <RadioGroupItem value={item} id={itemId}/>
                  <Label htmlFor={itemId} className="text-sm font-normal">{item}</Label>
                </div>
                )
              })
              
            }
       
          </div>
        ))}
      </RadioGroup>
    </div>
    </>
    
  )
}

export default FilterCard
