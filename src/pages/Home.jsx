import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import { Footer } from '../components/Footer'


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
     <Navbar/>
     <main>
      <HeroSection/>
      <About/>
      <Gallery/>
      <Contact/>
     </main>
     <Footer/>
    </div>
  )
}

export default Home
