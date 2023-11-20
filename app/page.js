import Hero from "./components/Hero"
import About from "./components/About"
import About1 from "./components/About1"
import HowIWork from "./components/HowIWork"
import Testimonial from "./components/Testimonial"
import RecentBlog from "./components/RecentBlog"
import Subscribe from "./components/Subscribe"
import WhyUs from "./components/about/WhyUs"


export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg-pb:10" />
      <About className="py-16 lg:py-22 overflow-hidden"/>
      <HowIWork className="py-16 !pt-32 lg:py-32"/>
      {/* <Testimonial className="py-6 lg:py-32"/> */}
      <About className="py-16 lg:py-22 overflow-hidden"/>
      <About1 className="lg:py-22 overflow-hidden"/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-orange-300"/>
    </>
  )
}
