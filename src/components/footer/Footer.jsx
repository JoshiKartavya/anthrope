import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer w-screen h-[50vh] lg:h-[70vh] bg-[--secondary] mt-12 py-10 overflow-y-hidden'>
      <div className="title px-6 py-4 lg:px-12 lg:py-12 text-[--primary] flex flex-row items-center justify-between">
        <hr className='w-[55%] lg:w-[80%]' />
        <h1 className=' overflow-y-hidden font-clash font-semibold text-2xl lg:text-4xl'>Anthrope</h1>
      </div>

      <div className="links px-6 h-full lg:px-12 lg:h-[40%] flex flex-col sm:flex-col md:flex-col lg:flex-col justify-between items-center lg:items-end">
        <div className="left flex flex-col gap-0 lg:gap-2 w-full lg:w-[37%]">
          <a href="#"><h3 className='text-lg sm:text-xl lg:text-4xl font-medium text-[--primary] overflow-y-hidden'>home</h3></a>
          <a href="#"><h3 className='text-lg sm:text-xl lg:text-4xl font-medium text-[--primary] overflow-y-hidden'>company</h3></a>
          <a href="#"><h3 className='text-lg sm:text-xl lg:text-4xl font-medium text-[--primary] overflow-y-hidden'>sitemap</h3></a>
          <a href="#"><h3 className='text-lg sm:text-xl lg:text-4xl font-medium text-[--primary] overflow-y-hidden'>work for Anthrope</h3></a>
        </div>

        <div className="socials overflow-y-hidden flex flex-row gap-2 lg:gap-8">
          <a href="#"><i className="ri-twitter-x-line text-[--primary] overflow-y-hidden text-2xl lg:text-5xl"></i></a>
          <a href="#"><i className="ri-instagram-fill text-[--primary] overflow-y-hidden text-2xl lg:text-5xl"></i></a>
          <a href="#"><i className="ri-youtube-fill text-[--primary] overflow-y-hidden text-2xl lg:text-5xl"></i></a>
          <a href="#"><i className="ri-facebook-fill text-[--primary] overflow-y-hidden text-2xl lg:text-5xl"></i></a>
        </div>

        <div className="right w-full lg:w-[35%]">
          <h1 className='text-[--primary] overflow-y-hidden text-lg lg:text-3xl font-medium text-center lg:text-end capitalize'>the content of this site is copyright-protected and is property of Anthrope group</h1>
        </div>
      </div>

      <div className="watermark w-screen ">
        <h1 className='text-[#474747] text-center bottom-0 lg:bottom-2 sm: text-[4rem] md:text-[12rem] lg:text-[16rem] font-black overflow-y-hidden'>ANTHROPE</h1>
      </div>
    </div>
  )
}

export default Footer
