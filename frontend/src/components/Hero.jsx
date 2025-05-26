import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import Leftbar from './Leftbar'

const Hero = () => {
    return (
        <div className='relative flex items-center justify-center bg-black overflow-hidden h-full w-full'>
            <video className='w-full h-full object-cover' src={assets.background} autoPlay muted loop />
            <Navbar />
            <Leftbar />
        </div>
    )
}

export default Hero
