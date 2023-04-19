import React from "react";
import Link from "next/link";
import html from '../public/skills/html.png'

export default function Projects() {
    const userData = [
        {
            title: "Tailwind CSS"
        },
        {
            title: "HTML",
        },
        {
            title: "React Js",
            imgUrl: "/portfolio.png",
        },
        {
            title: "Next Js",
            imgUrl: "/covidrescue.png",
        },
        {
            title: "Javascript",
            imgUrl: "/algochurn.png",
        },
        {
            title: "Electron Js",
            imgUrl: "/algochurn.png",
        },

    ]
    return (
        <div id='skills' className='w-full md:h-screen h-auto flex justify-center'>
            <div className='m-auto font-serif'>
                <p className='uppercase text-6xl font-bold tracking-widest text-[#542d58]'>
                    Skills
                </p>

            </div>
            <div className=" m-auto grid grid-cols-2 gap-y-8 gap-x-6">
                {userData.map((project, idx) => (
                    <Skills project={project} key="idx" />
                ))}
            </div>
        </div>
        // <section className="bg-[#F1F1F1] -mt-40 pb-40 ">
        //   <div className="max-w-6xl mx-40">
        //     <div className="flex flex-col md:flex-row justify-between items-center md:pt-40  mx-10">
        //       <h1 className="text-xl lg:text-8xl max-w-lg font-bold text-gray-500 my-50 md:my-10 md:text-white dark:text-gray-600 text-center lg:text-left">
        //         Skills
        //       </h1>

        //     </div>
        //   </div>

        //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto  px-10 justify-center  gap-y-20">

        //     {userData.map((project, idx) => (
        //         <Skills project={project} key="idx" />
        //       ))}
        //   </div>
        // </section>
    );
}

const Skills = ({ project }) => {
    return (
        <div class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span class="relative text-white">{project.title}</span>
        </div>
        // <div className=" bg-white rounded-lg p-2 text-center hover:text-slate-100 hover:te ">

        //     <h1 className="font-semibold text-xl text-violet-900">
        //         {project.title}
        //     </h1>

        // </div>
    );
};
