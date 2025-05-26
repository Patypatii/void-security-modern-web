import React from 'react'
import { assets } from '../assets/assets'

const Leftbar = () => {
    return (
        <div className='flex flex-col absolute left-20 top-5 h-[589px] w-[250px] bg-black ml-[20%] rounded-[50px] items-center text-white p-10 gap-5'>
            <h2>Void Services</h2>
            <video className='w-[194px] h-[110px]' src={assets.spiral} autoPlay loop muted></video>
            <div className='flex flex-col items-start text-start gap-2'>
                <p className='font-semibold text-[16px]'>List</p>
                <ul className='flex flex-col text-center gap-2 grid grid-cols-2 text-[12px]'>
                    <li className='border border-white rounded-[50px]'>Monitoring</li>
                    <li className='border border-white rounded-[50px]'>Cybersecurity</li>
                    <li className='border border-white rounded-[50px]'>Assesement</li>
                    <li className='border border-white rounded-[50px]'>Management</li>
                    <li className='border border-white rounded-[50px]'>Audits</li>
                </ul>
            </div>

            <img className='w-[200px] h-[200px]' src={assets.glowingcube} alt="" />
            <p>Customized Solutions
                for Every Threat</p>
        </div>
    )
}

export default Leftbar
