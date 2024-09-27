import Image from "next/image"
import "./ChoiceMob.scss"

const ChoiceMob = () => {
  return (
    <div className='choice-mob block sm:block lg:hidden'>
      <div className="w-screen px-6 py-10 flex flex-col gap-16 items-center mb-20">
        <div className="text flex flex-col justify-start items-center">
          <h1 className="text-3xl md:text-4xl overflow-y-hidden">A World of choice</h1>
          <p className="w-full text-xl md:text-2xl text-center overflow-y-hidden mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div className="images w-full flex flex-col gap-16 items-center">
          <div className="room-block w-full flex flex-col items-center">
            <div className="img relative w-full h-64 object-cover mb-4">
              <Image src="/hotel6.jpg" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="text text-center">
              <p className="text-sm text-[#424242] uppercase">4 guests</p>
              <h2 className="text-xl font-medium capitalize">Room with epic view</h2>
            </div>
          </div>
          <div className="room-block w-full flex flex-col items-center">
            <div className="img relative w-full h-64 object-cover mb-4">
              <Image src="/hotel5.jpg" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="text text-center">
              <p className="text-sm text-[#424242] uppercase">3 guests</p>
              <h2 className="text-xl font-medium capitalize">Medium room</h2>
            </div>
          </div>
          <div className="room-block w-full flex flex-col items-center">
            <div className="img relative w-full h-64 object-cover mb-4">
              <Image src="/hotel7.jpg" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="text text-center">
              <p className="text-sm text-[#424242] uppercase">6 guests</p>
              <h2 className="text-xl font-medium capitalize">Luxury room</h2>
            </div>
          </div>
          <div className="room-block w-full flex flex-col items-center">
            <div className="img relative w-full h-64 object-cover mb-4">
              <Image src="/hotel2.jpeg" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="text text-center">
              <p className="text-sm text-[#424242] uppercase">5 guests</p>
              <h2 className="text-xl font-medium capitalize">Apartment</h2>
            </div>
          </div>
          <div className="room-block w-full flex flex-col items-center">
            <div className="img relative w-full h-64 object-cover mb-4">
              <Image src="/hotel8.jpg" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="text text-center">
              <p className="text-sm text-[#424242] uppercase">1 guest</p>
              <h2 className="text-xl font-medium capitalize">Small room</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChoiceMob