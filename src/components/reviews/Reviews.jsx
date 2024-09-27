import Image from "next/image"
import "./Reviews.scss"

const Reviews = () => {
  return (
    <div className="review w-screen h-max px-8 py-6 lg:px-12 lg:py-10 flex flex-col">
      <div className="title flex flex-row justify-center items-center">
        <hr className="lg:w-[70%] lg:h-4 text-[#222222]" />
        <h1 className="text-4xl md:text-6xl lg:text-6xl text-[--secondary] overflow-y-hidden">our reviews <i className="ri-gemini-fill"></i></h1>
      </div>

      <div className="testimonials flex flex-col gap-12">
        <div className="review1 mt-6 md:mt-9 lg:mt-12 flex flex-col-reverse lg:flex-row justify-between items-center lg:w-full lg:h-[80%]">
          <div className="text lg:w-1/2 lg:h-full">
            <h1 className="text-sm md:text-xl lg:text-5xl text-[--secondary] font-clash font-medium overflow-y-hidden text-center lg:text-left">"Riviera retreat: exquisite luxury, imapable services. a heaven of tranquility. the perfact escape for discerning travellers seeking opluence and relextaion"</h1>
          </div>
          <div className="img-container lg:w-1/2 h-full flex items-center justify-center">
            <div className="img-1 drop-shadow-2xl">
              <div className="frame bg-[#e1e1e1] lg:h-[22rem] lg:w-[20rem] flex flex-col items-center">
                <div className="frame-img relative lg:mt-10 h-40 w-40 md:h-60 md:w-60 lg:h-60 lg:w-60">
                  <Image src="/user2.jpeg" fill />
                </div>
                <h1 className="text-lg md:text-2xl lg:text-3xl text-[--secondary] font-clash font-semibold mt-8">John doe</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="review1 mt-6 md:mt-9 lg:mt-12 flex flex-col-reverse lg:flex-row-reverse justify-between items-center lg:w-full lg:h-[80%]">
          <div className="text lg:w-1/2 lg:h-full">
            <h1 className="text-sm md:text-xl lg:text-5xl text-[--secondary] font-clash font-medium overflow-y-hidden text-center lg:text-left">"Riviera retreat: exquisite luxury, imapable services. a heaven of tranquility. the perfact escape for discerning travellers seeking opluence and relextaion"</h1>
          </div>
          <div className="img-container lg:w-1/2 h-full flex items-center justify-center">
            <div className="img-1 drop-shadow-2xl">
              <div className="frame bg-[#e1e1e1] lg:h-[22rem] lg:w-[20rem] flex flex-col items-center">
                <div className="frame-img relative lg:mt-10 h-40 w-40 md:h-60 md:w-60 lg:h-60 lg:w-60">
                  <Image src="/user3.jpeg" fill />
                </div>
                <h1 className="text-lg md:text-2xl lg:text-3xl text-[--secondary] font-clash font-semibold mt-8">John doe</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="review1 mt-6 md:mt-9 lg:mt-12 flex flex-col-reverse lg:flex-row justify-between items-center lg:w-full lg:h-[80%]">
          <div className="text lg:w-1/2 lg:h-full">
            <h1 className="text-sm md:text-xl lg:text-5xl text-[--secondary] font-clash font-medium overflow-y-hidden text-center lg:text-left">"Riviera retreat: exquisite luxury, imapable services. a heaven of tranquility. the perfact escape for discerning travellers seeking opluence and relextaion"</h1>
          </div>
          <div className="img-container lg:w-1/2 h-full flex items-center justify-center">
            <div className="img-1 drop-shadow-2xl">
              <div className="frame bg-[#e1e1e1] lg:h-[22rem] lg:w-[20rem] flex flex-col items-center">
                <div className="frame-img relative lg:mt-10 h-40 w-40 md:h-60 md:w-60 lg:h-60 lg:w-60">
                  <Image src="/user2.jpeg" fill />
                </div>
                <h1 className="text-lg md:text-2xl lg:text-3xl text-[--secondary] font-clash font-semibold mt-8">John doe</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
