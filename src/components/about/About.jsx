import Image from 'next/image'
import './About.scss'
const About = () => {
  return (
    <div className='h-screen w-screen'>
      <div className="about-content w-screen h-full md:h-[90%] lg:h-[90%] bg-[#222222] flex flex-col md:flex-col lg:flex-row justify-between items-center">
        <div className="content w-full lg:w-[55%] h-full lg:h-full md:h-[80%] px-8 py-6 lg:px-28 lg:py-40 flex flex-col gap-2 md:gap-6 lg:gap-4 sm:items-center md:items-center items-center lg:items-start">
          <h1 className='text-[--primary] overflow-y-hidden text-3xl md:text-5xl underline font-clash font-semibold'>About us</h1>
          <p className='text-[--primary] text-base md:text-2xl md:w-3/4 lg:text-3xl text-center lg:text-left overflow-y-hidden font-clash font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fuga facilis assumenda provident porro dolorem excepturi non quos consectetur mollitia, soluta veritatis!</p>
          <p className='text-[--primary] text-base lg:text-3xl hidden lg:block overflow-y-hidden font-clash font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum?</p>

          <button className='text-[--secondary] font-medium font-clash text-xl lg:text-5xl overflow-y-hidden px-6 py-4 lg:px-8 lg:py-6 bg-[--primary] w-[50%] my-4'>Explore</button>
        </div>
        <div className="img-container w-full lg:w-[45%] h-full">
          <div className="image relative w-full h-full">
            <Image src="/hotel3.jpeg" fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
