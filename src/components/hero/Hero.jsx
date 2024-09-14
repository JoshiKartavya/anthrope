import Navbar from "../navbar/Navbar"
import "./Hero.scss"
import Image from "next/image"



const Hero = () => {
  return (
    <>
      <div className="hero h-screen w-screen flex flex-col justify-center items-center">
          <div className="image relative w-[97%] h-[97%]">
            <Image className="rounded-3xl" src="/hero.jpeg" fill />
          </div>
          <Navbar />
          <div className="hero-content absolute z-30 top-[40%] text-[--primary] w-60% right-6 flex flex-col items-end gap-8 px-8">
            <div className="tite flex flex-col items-end">
              <h1 className="text-9xl font-bold overflow-y-hidden">
                <i className="ri-arrow-right-up-line font-thin text-[#222222] bg-[--primary] rounded-full"></i> Hotel
              </h1>
              <h1 className="text-9xl font-bold overflow-y-hidden">
                ANTHROPE
              </h1>
            </div>
            <hr className="bg-[--primary] h-1 rounded-full w-full" />
            <div className="desc flex flex-row items-center gap-4">
              <p className="text-4xl">Guests rave: "Loved everything, Will return!"</p>
              <div className="rating text-3xl text-[#222222] bg-[--primary] flex gap-2 px-4 py-2 rounded-full">
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
