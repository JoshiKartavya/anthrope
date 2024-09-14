import Image from "next/image"
import "./Reviews.scss"

const Reviews = () => {
  return (
    <div className="review w-screen h-max px-12 py-10 flex flex-col">
      <div className="title flex flex-row justify-center items-center">
        <hr className="w-[70%] h-4 text-[#222222]" />
        <h1 className="text-[--secondary] overflow-y-hidden">our reviews <i class="ri-gemini-fill"></i></h1>
      </div>

      <div className="testimonials flex flex-col gap-12">
        <div className="review1 mt-12 flex flex-row justify-between items-center w-full h-[80%]">
          <div className="text w-1/2  h-full">
            <h1 className="text-5xl text-[--secondary] font-clash font-medium overflow-y-hidden">"Riviera retreat: exquisite luxury, imapable services. a heaven of tranquility. the perfact escape for discerning travellers seeking opluence and relextaion"</h1>
            </div>
          <div className="img-container w-1/2 h-full flex items-center justify-center">
            <div className="img-1 drop-shadow-2xl">
              <div className="frame bg-[#e1e1e1] h-[22rem] w-[20rem] flex flex-col items-center">
                <div className="frame-img relative mt-10 h-60 w-60 bg-blue-500">
                  <Image src="/user2.jpeg" fill />
                </div>
                <h1 className="text-3xl text-[--secondary] font-clash font-semibold mt-8">John doe</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="review2 mt-12 flex flex-row-reverse justify-between items-center w-full h-[65%]">
          <div className="text w-1/2  h-full">
            <h1 className="text-5xl text-[--secondary] font-clash font-medium text-right overflow-y-hidden">"Riviera retreat: exquisite luxury, imapable services. a heaven of tranquility. the perfact escape for discerning travellers seeking opluence and relextaion"</h1>
          </div>
          <div className="img-container w-1/2 h-full flex items-center justify-center">
            <div className="img-1 drop-shadow-2xl">
              <div className="frame bg-[#e1e1e1] h-[22rem] w-[22rem] flex flex-col items-center">
                <div className="frame-img relative mt-10 h-60 w-60 bg-blue-500">
                  <Image src="/user3.jpeg" fill />
                </div>
                <h1 className="text-3xl text-[--secondary] font-clash font-semibold mt-8">John doe</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="review3 mt-12 flex flex-row justify-between items-center w-full h-[65%]">
          <div className="text w-1/2  h-full">
            <h1 className="text-5xl text-[--secondary] font-clash font-medium overflow-y-hidden">"Riviera retreat: exquisite luxury, imapable services. a heaven of tranquility. the perfact escape for discerning travellers seeking opluence and relextaion"</h1>
          </div>
          <div className="img-container w-1/2 h-full flex items-center justify-center">
            <div className="img-1 drop-shadow-2xl">
              <div className="frame bg-[#e1e1e1] h-[22rem] w-[22rem] flex flex-col items-center">
                <div className="frame-img relative mt-10 h-60 w-60 bg-blue-500">
                  <Image src="/user2.jpeg" fill />
                </div>
                <h1 className="text-3xl text-[--secondary] font-clash font-semibold mt-8">John doe</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
