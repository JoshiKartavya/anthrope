import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer w-screen h-[70vh] bg-[--secondary] mt-12 py-10 overflow-y-hidden'>
      <div className="title px-12 py-12 text-[--primary] flex flex-row items-center justify-between">
        <hr className='w-[80%]' />
        <h1 className=' overflow-y-hidden font-clash font-semibold'>Anthrope</h1>
      </div>

      <div className="links px-12 h-[40%] flex flex-row justify-between items-end">
        <div className="left flex flex-col gap-2 w-[37%]">
          <a href="#"><h3 className='text-4xl font-medium text-[--primary] overflow-y-hidden'>home</h3></a>
          <a href="#"><h3 className='text-4xl font-medium text-[--primary] overflow-y-hidden'>company</h3></a>
          <a href="#"><h3 className='text-4xl font-medium text-[--primary] overflow-y-hidden'>sitemap</h3></a>
          <a href="#"><h3 className='text-4xl font-medium text-[--primary] overflow-y-hidden'>work for Anthrope</h3></a>
        </div>

        <div className="socials overflow-y-hidden flex flex-row gap-8">
          <a href="#"><i class="ri-twitter-x-line text-[--primary] overflow-y-hidden text-5xl"></i></a>
          <a href="#"><i class="ri-instagram-fill text-[--primary] overflow-y-hidden text-5xl"></i></a>
          <a href="#"><i class="ri-youtube-fill text-[--primary] overflow-y-hidden text-5xl"></i></a>
          <a href="#"><i class="ri-facebook-fill text-[--primary] overflow-y-hidden text-5xl"></i></a>
        </div>

        <div className="right w-[35%]">
          <h1 className='text-[--primary] overflow-y-hidden text-5xl font-medium text-end capitalize'>the content of this site is copyright-protected and is property of Anthrope group</h1>
        </div>
      </div>

      <div className="watermark w-screen ">
        <h1 className='text-[#474747] bottom-2 text-[18rem] font-black overflow-y-hidden'>ANTHROPE</h1>
      </div>
    </div>
  )
}

export default Footer
