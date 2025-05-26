import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import { MdDownload } from "react-icons/md";

function Hero() {
  return (
    <main
      className="relative bg-square-pattern bg-repeat bg-50 text-start overflow-hidden"
      id="section1"
    >
      {/* Soft mesh gradient behind content */}
      <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400 opacity-20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex justify-center items-center p-6 min-h-[calc(100vh-80px)] mx-auto">
        <div className="grid grid-cols-1">
          {/* Avatar + Heading */}
          <div className="flex flex-col md:flex-row md:items-center gap-10 pb-8">
            <div className="w-[128px] h-[128px] rounded-full relative">
              <Image
                src="/myavatar.webp"
                fill
                className="w-32 absolute rounded-full"
                alt="myavatar"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl text-dark-from dark:text-neutral-0 lg:text-6xl font-bold tracking-tight">
                Hey, I'm
                <span className="dark:text-neutral-900"> Vortex </span>
                <div className="inline-block">✨</div>
                <br />A
                <span className="dark:text-neutral-900">
                  {" "}
                  Frontend Developer
                </span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl max-w-[750px] text-dark-from dark:text-neutral-0">
            A
            <span className="font-bold dark:text-neutral-900">
              {" "}
              Frontend developer{" "}
            </span>
            with a passion for creating beautiful and functional web
            applications. I love to learn new technologies and improve my
            skills. I am currently looking for new opportunities to work on
            exciting projects.
          </p>

          {/* Buttons + Socials */}
          <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between max-w-[600px] mt-8">
            <div className="flex gap-2 lg:gap-4">
              <a
                href="/My Resume.pdf"
                className="inline-flex items-center gap-4 border-border-light dark:border-dark-from text-dark-from dark:text-neutral-0 dark:bg-dark-from justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shadow-xl"
              >
                <MdDownload />
                <span>Resume</span>
              </a>
              <Link
                href="mailto:qudusbello51@gmail.com"
                className="inline-flex items-center gap-4 border-border-light dark:border-dark-from text-dark-from dark:text-neutral-0 dark:bg-dark-from justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shadow-xl"
              >
                <CiAt />
                <span>Contact me</span>
              </Link>
            </div>

            <div className="shrink-0 w-[1px] bg-foreground h-4 hidden lg:block"></div>

            <div className="flex items-center pb-10 sm:pb-0 px-5 gap-14 md:gap-8 text-xl">
              <a href="https://github.com/dev-Vortex51">
                <BsGithub className="text-bg-dark dark:text-neutral-0" />
              </a>
              <a href="#">
                <BsEnvelope className="text-bg-dark dark:text-neutral-0" />
              </a>
              <a href="https://www.linkedin.com/in/dev-Vortex51">
                <BsLinkedin className="text-bg-dark dark:text-neutral-0" />
              </a>
              <a href="https://twitter.com">
                <BsTwitter className="text-bg-dark dark:text-neutral-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
