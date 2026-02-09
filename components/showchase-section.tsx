"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Weather App",
    description: "A clean and responsive weather app that displays real-time weather conditions using modern APIs.",
    image: "/projects/three.png",
    href: "https://www.shecodes.io/cohorts/2036/projects/2395496",
  },
  {
    id: 2,
    title: "Alternative R&B",
    description: "A music-focused web experience exploring the sound and evolution of Alternative R&B.",
    image: "/projects/two.png",
    href: "https://www.shecodes.io/cohorts/2023/projects/2332865",
  },
  {
    id: 3,
    title: "World Clock",
    description: "A world clock application that shows current time across multiple global time zones.",
    image: "/projects/four.png",
    href: "https://www.shecodes.io/cohorts/2130/projects/2407435",
  },
  {
    id: 4,
    title: "Poem Generator",
    description: "An AI-powered poem generator that creates playful three-stanza poems based on any topic.",
    image: "/projects/one.png",
    href: "https://gamegaindashboard.netlify.app/",
  },
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Changed to 0 for first item

  return (
    <div
      id="projects"
      className="flex flex-col bg-muted items-center justify-center text-black w-full py-8 min-h-[90vh] overflow-hidden relative px-4"
    >
      <header className="w-full text-center py-4 z-10">
        <h2 className="text-3xl md:text-[42px] lg:text-5xl font-bold text-primary leading-tight">
          Our Projects
          <span className="block text-secondary">A showcase of work.</span>
        </h2>
      </header>

      {/* Container with fixed height to prevent jumping */}
      <div className="flex gap-2 my-6 sm:my-10 w-full max-w-[1100px] z-10 h-[450px] md:h-[500px]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setActiveIndex(index)}
            className={`relative transition-all duration-500 ease-in-out rounded-3xl overflow-hidden shadow-md cursor-pointer 
              ${activeIndex === index 
                ? "flex-[5] md:flex-[4] opacity-100" // Active grows
                : "flex-1 md:flex-[0.5] opacity-60" // Inactive shrinks
              }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover object-top transition-transform duration-500"
            />
            
            {/* Gradient Overlay for better text readability */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`absolute bottom-0 left-0 right-0 z-50 p-4 md:p-8 transition-all duration-500 transform ${
                activeIndex === index 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-lg lg:text-2xl font-bold text-white whitespace-nowrap">
                {project.title}
              </h3>
              
              <p className="text-white/90 text-xs lg:text-sm mt-2 line-clamp-2 md:line-clamp-none max-w-md">
                {project.description}
              </p>
              
              <div className="mt-4">
                <Link
                  target="_blank"
                  href={project.href}
                  className="inline-block text-[10px] lg:text-[14px] text-white font-medium hover:text-primary transition-colors underline underline-offset-4"
                >
                  Visit Now....
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;