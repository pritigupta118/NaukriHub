
import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

const category = [
  "FullStack Developer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Cloud Engineer",
]

const CategoryCarousel = () => {
  return (
    <div>
    <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
            {
                category.map((cat, index) => (
                    <CarouselItem key={index} className="basis-3/3">
                        <Button  variant="outline" className="rounded-full bg-[#3c0b91] text-white">{cat}</Button>
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
