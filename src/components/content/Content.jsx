import Hero from "../hero/Hero"
import Services from "../servicess/Services"
import Choice from "../choice/Choice"
import About from "../about/About"
import Reviews from "../reviews/Reviews"
import Footer from "../footer/Footer"
import './Content.scss'


const Content = () => {
  return (
    <div className="h-screen w-screen bg-[#e1e1e1] text-[#222222] text-6xl absolute z-20 overflow-x-hidden scrollbar-hide">
      <Hero />
      <Services />
      <Choice />
      <About />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Content
