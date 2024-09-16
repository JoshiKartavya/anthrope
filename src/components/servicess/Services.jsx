import Image from "next/image"
import "./Services.scss"

const Services = () => {
  return (
    <div className="h-max w-screen overflow-x-hidden flex flex-col gap-8">
      <div className="text w-full sm:h-[30vh] flex flex-row items-center justify-center">
        <h1 className="overflow-y-hidden sm:px-12 sm:py-8 w-[90%] sm:w-[80%] lg:w-[80%] text-center text-xl lg:text-5xl">"indulge in comfort and cheris unforgettable moments at our hotel, where hospitality meets excellence in every stay."</h1>
      </div>
      <div className="services-main h-full lg:h-screen w-screen flex flex-col gap-0 lg:gap-8">
        <div className="title pl-8 lg:pl-12 text-2xl lg:text-5xl"><h1>Our services <i class="ri-gemini-fill"></i></h1></div>
        <div className="content flex flex-col lg:flex-row">
          <div className="left h-[60vh] lg:h-[80vh] flex flex-col justify-center items-center gap-12 w-full lg:w-1/2 pl-8 lg:pl-28">
            <div className="serv text-[--secondary] flex flex-col gap-2 bg-transparent">
              <h2 className="text-[--primary] bg-[--secondary] w-8 h-8 lg:w-12 lg:h-12 flex flex-col justify-center items-center text-center text-xl lg:text-3xl rounded-full overflow-y-hidden">1</h2>
              <h1 className="text-xl lg:text-4xl">Provide the best choice of Room</h1>
              <p className="text-sm lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis et natus ipsa reiciendis quia ad sunt?</p>
            </div>

            <div className="serv text-[--secondary] flex flex-col gap-2 bg-transparent">
              <h2 className="text-[--primary] bg-[--secondary] w-8 h-8 lg:w-12 lg:h-12 flex flex-col justify-center items-center text-center text-xl lg:text-3xl rounded-full overflow-y-hidden">2</h2>
              <h1 className="text-xl lg:text-4xl">Low price with Best Quality</h1>
              <p className="text-sm lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis et natus ipsa reiciendis quia ad sunt?</p>
            </div>

            <div className="serv text-[--secondary] flex flex-col gap-2 bg-transparent">
              <h2 className="text-[--primary] bg-[--secondary] w-8 h-8 lg:w-12 lg:h-12 flex flex-col justify-center items-center text-center text-xl lg:text-3xl rounded-full overflow-y-hidden">3</h2>
              <h1 className="text-xl lg:text-4xl">Resturant Services</h1>
              <p className="text-sm lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis et natus ipsa reiciendis quia ad sunt?</p>
            </div>
          </div>
          <div className="right w-full lg:w-1/2 h-[60vh] lg:h-[80vh] ">
              <div className="container flex items-center justify-end relative">
                <div className="img-1 relative w-[420px] h-[300px] lg:w-[550px] lg:h-[650px]">
                  <Image src="/hotel2.jpeg" fill />
                </div>
                <div className="image-2 hidden lg:block absolute right-[240px]">
                  <div className="img-2 relative w-[500px] h-[450px] ">
                    <Image className=" absolute right-40" src="/hotel1.jpeg" fill />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
