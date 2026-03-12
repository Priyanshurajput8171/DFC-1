import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
// import About from '../components/About'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import { Footer } from '../components/Footer'
import Partners from '../components/Partners'
import WhyChooseUs from '../components/WhyChooseUs'
import Review from '../components/Review'
import PopularDishes from '../components/Popular'


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
       <Navbar/>
     <main>
      <HeroSection/>
      <PopularDishes/>
      <Partners/>
      <WhyChooseUs/>
      {/* <About/> */}
      <Gallery/>
      <Review/>
      <Contact/>
     </main>
     <Footer/>
    </div>
  )
}

export default Home
