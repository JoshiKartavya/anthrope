import Image from 'next/image'
import './About.scss'
const About = () => {
  return (
    <div className='h-screen w-screen'>
      <div className="about-content w-screen h-[90%] bg-[#222222] flex flex-row justify-between items-center">
        <div className="content w-[55%] h-full px-28 py-40 flex flex-col gap-4">
          <h1 className='text-[--primary] overflow-y-hidden underline font-clash font-semibold'>About us</h1>
          <p className='text-[--primary] text-3xl overflow-y-hidden font-clash font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fuga facilis assumenda provident porro dolorem excepturi non quos consectetur mollitia, soluta veritatis!</p>
          <p className='text-[--primary] text-3xl overflow-y-hidden font-clash font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum?</p>

          <button className='text-[--secondary] font-medium font-clash text-5xl px-8 py-6 bg-[--primary] w-[50%] my-4'>Explore</button>
        </div>
        <div className="img-container w-[45%] h-full">
          <div className="image relative w-full h-full">
            <Image src="/hotel3.jpeg" fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
