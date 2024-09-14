import Image from "next/image"
import "./Services.scss"

const Services = () => {
  return (
    <div className="h-[130vh] w-screen  overflow-x-hidden">
      <div className="text w-full h-[30vh] flex flex-row items-center justify-center">
        <h1 className="overflow-y-hidden px-12 py-8 w-[80%] text-center text-5xl">"indulge in comfort and cheris unforgettable moments at our hotel, where hospitality meets excellence in every stay."</h1>
      </div>
      <div className="services-main h-screen w-screen flex flex-col gap-8">
        <div className="title pl-12 text-5xl"><h1>Our services <i class="ri-gemini-fill"></i></h1></div>
        <div className="content flex flex-row">
          <div className="left h-[80vh] flex flex-col justify-center items-center gap-12 w-1/2 pl-28">
            <div className="serv text-[--secondary] flex flex-col gap-2 bg-transparent">
              <h2 className="text-[--primary] bg-[--secondary] w-12 h-12 flex flex-col justify-center items-center text-center text-3xl rounded-full overflow-y-hidden">1</h2>
              <h1 className="text-4xl">Provide the best choice of Room</h1>
              <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis et natus ipsa reiciendis quia ad sunt?</p>
            </div>

            <div className="serv text-[--secondary] flex flex-col gap-2 bg-transparent">
              <h2 className="text-[--primary] bg-[--secondary] w-12 h-12 flex flex-col justify-center items-center text-center text-3xl rounded-full overflow-y-hidden">2</h2>
              <h1 className="text-4xl">Low price with Best Quality</h1>
              <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis et natus ipsa reiciendis quia ad sunt?</p>
            </div>

            <div className="serv text-[--secondary] flex flex-col gap-2 bg-transparent">
              <h2 className="text-[--primary] bg-[--secondary] w-12 h-12 flex flex-col justify-center items-center text-center text-3xl rounded-full overflow-y-hidden">3</h2>
              <h1 className="text-4xl">Resturant Services</h1>
              <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis et natus ipsa reiciendis quia ad sunt?</p>
            </div>
          </div>
          <div className="right w-1/2 h-[80vh] ">
              <div className="container flex items-center justify-end relative">
                <Image className=" overflow-y-hidden" src="/hotel2.jpeg" width={550} height={800} />
                <Image className=" absolute right-40" src="/hotel1.jpeg" width={500} height={500} />
                <div className="user absolute z-30 right-8 bg-slate-400 w-36">
                  <Image className="absolute right-0" src="/user1.jpeg" width={100} height={100} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
