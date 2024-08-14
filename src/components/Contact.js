import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white' >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact </p>
                <p className='py-6' >Submmit the form to get in touch with me</p>
            </div>
          <div className='flex justify-center items-center'>
            <form action='' className='flex flex-col w-full md:1-1/2'>
            <input 
            name='text'
            type='text'
            placeholder='enter your name'
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />

        <input 
            name='email'
            type='text'
            placeholder='enter your email'
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />

        <textarea 
            name='message'
            row = '10'
            placeholder='Description'
            className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
        ></textarea>

            <button type='button' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300' >Submmit</button>
            </form>
          </div>

        </div>
      
    </div>
  )
}

export default Contact
