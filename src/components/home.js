import React from 'react'
import Anish from '../assets/portfolio/Anish.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';



const home = () => {
  return (
    <div name="home" className='h-screen sm:w-full bg-gradient-to-b from-black to-gray-800 text-white'>

   <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className="flex flex-col justify-center h-full">
        <h2 className="text4-4xl sm:text-7xl font-bold text-white">
            Im Frontend Engineer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
            im  front end developer with the experince of 2 years
        </p>
        <div>
            <button className="group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                portfolio

                <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-3' />
                </span>
               

            </button>
        </div>
    </div>
    <div>
        <img src={Anish} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
    </div>
   </div>
    </div>
  )
}

export default home
