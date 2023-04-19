import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillLinkedin, AiOutlineClose, AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { SiGmail } from "react-icons/si"
import { RiGithubFill } from "react-icons/ri"
import { DiYii } from "react-icons/di"

const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className="flex justify-between items-center w-full px-2 h-full bg-white 2xl:px-16">
        <span className='text-[#41134c] flex text-xl '><DiYii />Ayushi</span>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='text-sm uppercase ml-10 hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='text-sm uppercase ml-10 hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='text-sm uppercase ml-10 hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='text-sm uppercase ml-10 hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='text-sm uppercase ml-10 hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 w-full h-screen' : ''}>
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-purple-200 p-10 ease-in duration-500" : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-purple-200 p-10 ease-in duration-500"}>
          <div>
            <div className='flex justify-between items-center w-full'>
              <span className='text-[#3f2b49] flex' ><DiYii />Ayushi</span>
              <div onClick={handleNav} className='rounded-full cursor-pointer shadow-lg p-3 shadow-white'>
                <AiOutlineClose />
              </div>
            </div>
            <hr className='border-b my-3 border-white shadow-whit'></hr>
            

          </div>
          <div className='py-4 flex flex-col'>
            <ul className='text-sm uppercase'>
              <Link href='/'>
                <li className='py-4'>Home
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4'>About
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4'>Skills
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4'>Projects
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4'>Contact
                </li>
              </Link>
            </ul>
            <div className='mb-8'>
              <p className='uppercase tracking-widest text-purple-950'>Let's Connect</p>
              <div className='py-3 flex justify-evenly items-center w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg p-3 shadow-white cursor-pointer hover:scale-110 ease-in duration-500'>
                  <AiFillLinkedin size={25} />
                </div>
                <div className='rounded-full shadow-lg p-3 shadow-white cursor-pointer hover:scale-110 ease-in duration-500'>
                  <SiGmail size={25} />
                </div>
                <div className='rounded-full shadow-lg p-3 shadow-white cursor-pointer hover:scale-110 ease-in duration-500'>
                  <RiGithubFill size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar