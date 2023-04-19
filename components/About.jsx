import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='m-auto md:grid max-w-[70%] gap-8'>
                <div className=''>
                    <p className='uppercase text-xl tracking-widest text-[#683c6c]'>
                        About
                    </p>
                    <h2 className='py-4 text-[#683c6c]'>Who I Am</h2>
                    <p className='py-2 text-gray-600 w-2/3'>
                        I specialize in building mobile responsive front-end UI applications
                        that connect with API’s and other backend technologies. I’m
                        passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building front-end applications using HTML, CSS, Javascript, and
                        React, I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.
                    </p>
                    {/* <p className='py-2 text-gray-600'>
                        I started web developement in 2013 managing multiple e-commerce
                        websites on CMS platforms such as WordPress, BigCommerce, and
                        Shopify. I have experience working directly with clients and taking
                        mock wireframes all the way to deployed applications. In my spare
                        time I run Code Commerce, a Youtube channel where I teach web
                        developement and various front-end technologies.
                    </p>
                    <p>Check out some of my latest projects</p> */}
                </div>
                {/* <div className='w-auto h-auto m-auto shadow-xl shadow-gray-950 rounded-xl flex items-center justcen
                p-4 hover:scale-105 sca ease-in-out duration-300' >
                    <Image className='rounded-xl' src="/../public/assets/abc.jpg" alt= "oops" width='300' height='300' />
                </div>  */}
            </div>
        </div>
    )
}

export default About