import React, { useState }  from "react";
import {FaBars,FaTimes} from "react-icons/fa";



const NavBar = () => { 

    const [nav , setNav] = useState(false);
    
const links = [
       
    {
        id:1,
        links: 'Home'
    },

    {
        id:2,
        links: 'contact us'
    },

    {
        id:3,
        links: 'Experince'
    },
    {
        id:4,
        links: 'Portfolio'
    },

]
    return(

     <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed pointer">
        <div>
            <h1 className="text-5xl font-italic ml-2">Anish </h1>
        </div>


        <ul className="hidden md:flex">
            {links.map( ({id, links})  => (

                <li key={id} className="px-4 crusor-pointer capitalized font-medium text-gray-500 hover:scale-105 duration-500">
                    {links}</li>

            ))}
          

        </ul>

  <div onClick={() => setNav(!nav)} className="crusor-pointer pr-4 z-10 text-gray-500 md:hidden">

    {nav ? <FaTimes size={30} />: <FaBars size={30} />}
  </div>

{nav && (

      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">

      {links.map( ({id, links})  => (

      <li key={id} className="px-4 cursor-pointer capitalized py-6 text-4xl">
          {links}</li>

      ))}

</ul>

)}


     </div>
    );
}

export default  NavBar;