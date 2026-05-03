import React from 'react'
import Hero from '../components/home/Hero';
import Feature from '../components/home/Feature';
import Testimonials from '../components/home/Testimonials';
import CallToActions from '../components/home/CallToActions';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Feature/>
        <Testimonials/>
        <CallToActions/>
        <Footer/>
    </div>
  )
}

export default Home;