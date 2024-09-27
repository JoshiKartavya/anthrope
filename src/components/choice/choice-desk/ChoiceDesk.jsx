import Image from "next/image"
import "./ChoiceDesk.scss"

const Choice = () => {
  return (
    <div className="choice-desk hidden sm:hidden lg:block">
      <div className="h-[300vh] lg:h-[110vh] w-screen px-6 lg:px-12 py-4 lg:py-10 flex flex-col gap-12 items-center mb-20">
      <div className="text flex flex-col justify-start items-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl overflow-y-hidden">A World of choice</h1>
        <p className="w-full lg:w-[60%] text-xl md:text-2xl lg:text-3xl text-center overflow-y-hidden">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
      <div className="images w-full lg:w-[90%] h-full lg:h-[85%] flex flex-col lg:gap-0 lg:flex-row justify-between items-center">
        <div className="left w-full lg:w-[30%] h-full flex flex-col justify-between">
          <div className="left-top w-full h-full lg:h-[50%] flex flex-col items-left mb-4">
            <div className="img relative w-80 lg:w-[90%] h-[14rem] lg:h-[75%] object-cover">
              <Image src="/hotel6.jpg" fill/>
            </div>
            <div className="text mt-0 lg:mt-4">
              <p className="text-sm lg:text-lg text-[#424242] uppercase">4 guests</p>
              <h2 className="text-xl lg:text-4xl font-medium capitalize">Room with epic view</h2>
            </div>
          </div>
          <div className="left-top w-full h-full lg:h-[50%] flex flex-col items-left">
            <div className="img relative  w-80 lg:w-[90%] h-[14rem] lg:h-[75%] object-cover">
              <Image src="/hotel5.jpg" fill/>
            </div>
            <div className="text mt-0 lg:mt-4">
              <p className="text-sm lg:text-lg text-[#424242] uppercase">3 guests</p>
              <h2 className="text-xl lg:text-4xl font-medium capitalize">Medium room</h2>
            </div>
          </div>
        </div>
        <div className="center lg:mt-0 w-full lg:w-[40%] h-full">
          <div className="img relative  w-80 lg:w-[90%] h-[14rem] lg:h-[88%] object-cover">
            <Image src="/hotel7.jpg" fill/>
          </div>
          <div className="text mt-4">
              <p className="text-sm lg:text-lg text-[#424242] uppercase">6 guests</p>
              <h2 className="text-xl lg:text-4xl font-medium capitalize">luxury room</h2>
            </div>
        </div>
        <div className="right w-full lg:w-[30%] h-full lg:h-full flex flex-col justify-between">
          <div className="right-top w-full h-[45%] overflow-y-hidden">
            <div className="img relative  w-80 lg:w-[90%] h-[14rem] lg:h-[75%] object-cover">
              <Image src="/hotel2.jpeg" fill/>
            </div>
            <div className="text mt-4">
              <p className="text-sm lg:text-lg text-[#424242] uppercase">5 guests</p>
              <h2 className="text-xl lg:text-4xl font-medium capitalize">appartment</h2>
            </div>
          </div>
          <div className="right-bottom w-full lg:h-[45%] overflow-y-hidden">
            <div className="img relative  w-80 lg:w-[90%] h-[14rem] lg:h-[75%] object-cover">
              <Image src="/hotel8.jpg" fill/>
            </div>
            <div className="text mt-0 lg:mt-4">
              <p className="text-sm lg:text-lg text-[#424242] uppercase">1 guests</p>
              <h2 className="text-xl lg:text-4xl font-medium capitalize">small room</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Choice