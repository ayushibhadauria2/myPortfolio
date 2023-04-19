import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiGithubFill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                
                    <h1 className='py-1 text-gray-900'>
                        Hi, I'm <span className=' bg-gradient-to-l to-purple-300 font-bold from-violet-950 bg-clip-text text-transparent'>Ayushi</span>
                    </h1>
                    <h1 className='uppercase py-1  bg-gradient-to-l to-purple-300 font-bold via-neutral-900 from-violet-600 bg-clip-text text-transparent'>
                        A front end web-devloper
                    </h1>
                    <p className='py-4 text-gray-900 max-w-[70%] m-auto'>
                        I'm a front-end web developer specializing in building (and occassionally designing).
                        I’m focused on building responsive front-end web applications
                        while learning back-end technologies.
                    </p>
                    <div className='flex justify-between items-center max-w-[200px] m-auto py-2'>
                        <div className='rounded-full shadow-lg p-3 shadow-violet-950 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <RiGithubFill size={25} />
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-violet-950 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <AiFillLinkedin size={25} />
                        </div>
                        <div className='rounded-full shadow-lg p-3 shadow-violet-950 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <SiGmail size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main