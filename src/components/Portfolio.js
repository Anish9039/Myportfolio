import React from 'react';
import er from '../assets/portfolio/er.jpeg';
import qw from '../assets/portfolio/qw.jpeg';
import sd from '../assets/portfolio/sd.jpg';
import ty from '../assets/portfolio/ty.jpeg';


const Portfolio = () => {
 

  const portfolio = [
    {
      id:1,
      src:Ecommerce,
      href:"https://github.com/Anish9039/Ecommerce" 
    },
    {
      id:2,
      src:qw
    },

    {
      id:3,
      src:sd
    },
    {
      id:4,
      src:ty
    }



  ]

  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >
        <div className='max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full'>

      <div className='pb-2'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500' >Portfolio</p>

            <p className='py-6'>Check out my work right here </p>  

      </div>

      <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0' >

      {
      portfolio.map(({id,src}) =>(
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg' >
          
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
          <div className='flex items-center justify-center'>
            <button  className='w-12 px-6 py-3 m-4 duration-200 hover:scale-105'  href={portfolio.href ? portfolio.href : "/"}>demo</button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button>

          </div>
            
        </div>

      ))
      
      }

</div>
        </div>
    </div>
  )
}

export default Portfolio

