import React from 'react';
import html from '../assets/portfolio/html.png';
import javscript from '../assets/portfolio/javascript.png';
import next from '../assets/portfolio/next.png';
import react from '../assets/portfolio/react.png';
import tailwind from '../assets/portfolio/tailwind.png';
import github from '../assets/portfolio/github.webp';






const Experince = () => {

   const techs = [

    {
        id: 1,
        src: html,
        skillset: "HTML",
        style: "shadow-orange-500"

    },

    {
        id: 2,
        src: javscript,
        skillset: "Javascript",
        style: "shadow-yellow-500"

    },
    {
        id: 3,
        src: github,
        skillset: "github",
        style: "shadow-gray-500"

    },
    {
        id: 4,
        src: tailwind,
        skillset: "Tailwind",
        style: "shadow-orange-500"

    },
    {
        id: 5,
        src: react,
        skillset: "React",
        style: "shadow-blue-500"

    },


   ]

  return (
    <div className='bg-gradient-to-b  from-gray-800 to-black w-full h-screen' >

        <div name="Experience" className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white' >
           
           <div  >
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experince</p>

            <p className='py-8' >These are technology i've worked with </p>
           </div>
           <div className='w-full grid grid-cols sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0' >

          { techs.map(({id,src,skillset,style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}> 
                        <img src={src} alt='' className='w-20 mx-auto ' />
                        <p className='mt-4' >{skillset}</p>
                    </div>
               

            ))}
     </div>
      

        </div>
      
    </div>
  )
}

export default Experince
