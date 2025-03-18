
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { useDispatch } from "react-redux"
import { setSearchQuery } from "@/redux/jobSlice"

const category = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
  "DataScience",
  "Cloud Engineer",
]

const CategoryCarousel = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query))
    navigate("/browse")
  }
  
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {
            category.map((cat, index) => (
              <CarouselItem key={index} className="basis-3/3">
                <Button onClick={() => handleSearch(cat)} variant="outline" className="rounded-full bg-[#3c0b91] text-white">{cat}</Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
