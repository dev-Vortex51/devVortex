import Link from "next/link";
import React from "react";
import { FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdColorPalette } from "react-icons/io";

function Services() {
  return (
    <section
      className="flex flex-col border-t-1 border-border-light dark:border-border px-5 sm:px-20 xl:px-52 bg-background min-h-[500px] py-20"
      id="section2"
    >
      <div className="">
        <h1 className="text-4xl font-bold mb-2 text-dark-from dark:text-neutral-0">
          Building Digital Experiences.
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          I specialize in creating stunning user interfaces and developing
          high-quality applications that stand out.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12 pt-12">
        <div className="flex flex-col border-1 border-border-light dark:border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl">
          <div className="flex pb-4 items-center">
            <div className="text-3xl md:text-4xl text-dark-from dark:text-neutral-0 mr-5">
              <FaLaptopCode />
            </div>
            <h1 className="text-2xl font-bold text-center text-dark-from dark:text-neutral-0">
              What I can do
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 pb-4">
            I can help develop solutions that will help you grow your business:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-dark-from dark:text-neutral-0">
            <li className="font-medium">UI/UX Design</li>
            <li className="font-medium">Fullstack Web Development</li>
            <li className="font-medium">Mobile App Development</li>
            <li className="font-medium">Database Design</li>
            <li className="font-medium">API Integration</li>
          </ul>
        </div>
        <div className="flex flex-col border-1 border-border-light dark:border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl">
          <div className="flex pb-4 items-center">
            <div className="text-3xl md:text-4xl text-dark-from dark:text-neutral-0 mr-5">
              <FaLayerGroup />
            </div>
            <h1 className="text-2xl font-bold text-center text-dark-from dark:text-neutral-0">
              Tools I use
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 pb-4">
            I use the latest tools and technologies to build functional and
            scalable products:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-dark-from dark:text-neutral-0">
            <li>
              <h2 className="font-medium ">Frontend:</h2>
              <p className="text-gray-600 dark:text-gray-400">
                JavaScript, React, Next js , Tailwindcss and TypeScript
              </p>
            </li>
            <li>
              <h2 className="font-medium0">Backend: </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Node.js, Express, Supabase, PostgreSQL, AppWrite
              </p>
            </li>
            <li>
              <h2 className="font-medium ">Design: </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Figma, Framer, Gsap
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col border-1 border-border-light dark:border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl">
          <div className="flex pb-4 items-center">
            <div className="text-3xl md:text-4xl text-dark-from dark:text-neutral-0 mr-5">
              <IoMdColorPalette />
            </div>
            <h1 className="text-2xl font-bold text-center text-dark-from dark:text-neutral-0">
              UI/UX Design
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 pb-4">
            I am a designer first, developer second. I can help design clean and
            modern interfaces:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li className="font-medium text-dark-from dark:text-neutral-0">
              User-Centered Design
            </li>
            <li className="font-medium text-dark-from dark:text-neutral-0">
              Modern & Clean UI
            </li>
            <li className="font-medium text-dark-from dark:text-neutral-0">
              Responsive Layouts
            </li>
            <li className="font-medium text-dark-from dark:text-neutral-0">
              Wireframes & Prototypes
            </li>
            <li className="font-medium text-dark-from dark:text-neutral-0">
              Smooth and Sleek Animations
            </li>
          </ul>
        </div>
      </div>
      <Link
        href="/projects"
        className="inline-flex items-center border-border-light dark:border-dark-from text-dark-from dark:text-neutral-0 dark:bg-dark-from justify-center whitespace-nowrap text-sm font-medium gap-4 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 mt-12 ml-auto bg-gradient-gray shadow-lg"
      >
        <GrProjects />
        <span>View Projects</span>
      </Link>
    </section>
  );
}

export default Services;
