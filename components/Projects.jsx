import React from "react";
import Link from "next/link";

export default function Projects() {
    const userData =  [
        {
          title: "Tailwind Master Kit",
          description: "The hero section lets you grab people's attention. If you do it right, it can help you land your first job.",
          link: "https://tailwindmasterkit.com",
          imgUrl: "/tmk.jpg",
        },
        {
          title: "PlaceholderTech",
          link: "https://placeholdertech.in",
          imgUrl: "/placeholdertech.png",
        },
        {
          title: "Portfolio",
          link: "https://manuarora.in",
          imgUrl: "/portfolio.png",
        },
       
      ]
  return (
    <section className="bg-[#F1F1F1] -mt-40 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40  mx-10">
          <h1 className="text-4xl lg:text-9xl max-w-lg font-bold text-gray-500 my-50 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left">
            Projects
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {/* Single github Repo */}

        {userData.map((project, idx) => (
            <Project project={project} key="idx" />
          ))}
      </div>
    </section>
  );
}

const Project = ({ project }) => {
  return (
    <div className="github-repo bg-white rounded-lg p-2">
      <h1 className="font-semibold text-xl text-gray-700">
        {project.title}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {project.description}
      </p>
    </div>
  );
};