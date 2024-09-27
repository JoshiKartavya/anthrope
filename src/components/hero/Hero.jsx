import Navbar from "../navbar/Navbar"
import "./Hero.scss"
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <div className="hero h-[65vh] sm:h-[70vh] lg:h-screen w-screen flex flex-col justify-center items-center">
          <div className="image relative w-[97%] h-[97%] object-cover">
            <Image className="rounded-3xl" src="/hero.jpeg" fill />
          </div>
          <Navbar />
          <div className="hero-content absolute z-30 top-[30%] sm:top-[30%] lg:top-[40%] text-[--primary] w-60% right-6 flex flex-col items-end gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
            <div className="tite flex flex-col items-end">
              <h1 className="text-3xl sm:text-4xl lg:text-9xl font-bold overflow-y-hidden">
                <i className="ri-arrow-right-up-line font-thin text-[#222222] bg-[--primary] rounded-full"></i> Hotel
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-9xl font-bold overflow-y-hidden">
                ANTHROPE
              </h1>
            </div>
            <hr className="bg-[--primary] h-1 rounded-full w-full" />
            <div className="desc flex flex-col lg:flex-row items-center gap-1 lg:gap-4">
              <p className="text-sm sm:text-lg lg:text-4xl">Guests rave: "Loved everything, Will return!"</p>
              <div className="rating text-xl sm:text-2xl lg:text-3xl text-[#222222] bg-[--primary] flex gap-0 lg:gap-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <h3 className="font-medium">5</h3>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero
