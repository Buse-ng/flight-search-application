import React from 'react'
import FlightForm from '../components/FlightForm';
import homeBackground from "../assets/homeBackground.jpg";

const Home = () => {
  return (
    <div className=''>
        <img src={homeBackground} alt="" className='h-screen w-full' />
        <FlightForm />
    </div>
  )
}

export default Home