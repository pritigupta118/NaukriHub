import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Briefcase, Globe, Search, Users } from 'lucide-react'
import CategoryCarousel from '../CategoryCarousel'
import LatestJobs from '../LatestJobs'
import Footer from '../Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'


const Home = () => {
    const [searchTerm, setSearchTerm] = useState("")
    useGetAllJobs()
  
    const handleSearch = (e) => {
      e.preventDefault()
      // Implement search functionality here
      console.log("Searching for:", searchTerm)
    }
 return (
    <section className="overflow-hidden relative ">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200">
          <span className='text-amber-500'>Find Your</span>
             <span className='text-[#5b2bad]'> Dream Jobs Today</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-black text-muted-foreground">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="flex rounded-md shadow-sm">
            <Input
              type="text"
              placeholder="Search jobs, companies, or keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-l-md flex-grow text-black z-20"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 transition-all duration-200"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>


        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <div className="flex items-center justify-center bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10 shadow-xl">
            <Briefcase className="h-10 w-10 text-blue-400 mr-4" />
            <div className="text-left">
              <p className="text-2xl font-bold">
                10,000+</p>
              <p className="text-gray-300">Job Listings</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10 shadow-xl">
            <Users className="h-10 w-10 text-green-400 mr-4" />
            <div className="text-left">
              <p className="text-2xl font-bold">5,000+</p>
              <p className="text-gray-300">Companies</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-10 shadow-xl">
            <Globe className="h-10 w-10 text-purple-400 mr-4" />
            <div className="text-left">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-gray-300">Countries</p>
            </div>
          </div>
        </motion.div>
        <div className="mx-auto max-w-7xl">

          <CategoryCarousel />
  
          <LatestJobs />
        </div>
       

      </div>
      <Footer/>
    </section>
  )
}

export default Home
Home