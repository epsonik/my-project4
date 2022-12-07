import React, {useState} from 'react'
import {Link, Outlet} from "react-router-dom";
import {MenuIcon, XIcon} from "@heroicons/react/outline";

import logo from "./assets/pw_data/sygnet_GMN.png";
import {FaFacebook} from "react-icons/fa";
import {IconContext} from "react-icons";

function Layout() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)
  return (
    <>
      <header className="w-screen p-4 dark:bg-gray-800 dark:text-gray-100 fixed">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
              <Link to="/"><img src={logo} alt="/" className="w-25 h-20"/></Link>
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <a rel="noopener noreferrer" href="#"
                   className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><Link to="/">Home</Link></a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#"
                   className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent "><Link
                  to="/kongres">Kongres</Link></a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#"
                   className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><Link to="/balNaukowca">Bal Młodego Naukowca</Link></a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#"
                   className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><Link to="/plakaty">Sesja Posterowa</Link></a>
              </li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">

            <IconContext.Provider value={{size: 42}}>
              <button className='border-none bg-transparent text-black mr-4 '>
                <FaFacebook/>
              </button>
            </IconContext.Provider>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <button className="p-1 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                   className="w-9 h-9 dark:text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button> : <XIcon className='w-10'/>}
          </div>
        </div>


        <ul className={!nav ? 'hidden' : 'absolute dark:bg-zinc-200 dark:text-gray-800 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" smooth={true}
                                                                  duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/kongres" smooth={true}
                                                                  offset={-200}
                                                                  duration={500}>Kongres</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/balNaukowca"
                                                                  smooth={true}
                                                                  offset={-50} duration={500}>Bal Naukowca</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/plakaty" smooth={true}
                                                                  offset={-100} duration={500}>Sesja Posterowa</Link>
          </li>
          <li>
            <IconContext.Provider value={{size: 42}}>
              <button className='border-none bg-transparent text-black mr-4 '>
                <FaFacebook/>
              </button>
            </IconContext.Provider>
          </li>
        </ul>
      </header>
      <Outlet/>
    </>
  );
}

export default Layout
