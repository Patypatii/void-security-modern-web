import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='flex justify-between w-3xl text-white absolute left-[40%] top-5'>
            <div className='flex items-center justify-between gap-20 px-20 bg-white text-black rounded-[50px]'>
                <img className='w-[60px] rounded-full' src={assets.logo} alt="" />
                <p className='font-bold '>VOID</p>
                <img src={assets.menu} alt="" />
            </div>

            <p className=' mx-20 text-right'>Eliminate threats,<br />
                protect what matters</p>
        </div>
    )
}

export default Navbar
