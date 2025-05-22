import { NG } from "country-flag-icons/react/3x2";
import Image from "next/image";
import React from "react";
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="border-t-1 border-border-light dark:border-border text-foreground pt-8 pb-4 px-5 sm:px-20 xl:px-52">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <div>
                <h2 className="text-xl font-bold text-dark-from dark:text-neutral-900">
                  Vortex.dev
                </h2>
                <div className="flex gap-2 items-center">
                  <NG width={25} height={25} />
                  <p className="text-gray-700 dark:text-gray-400">
                    Based in Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <p className="text-gray-700 dark:text-gray-400 max-w-md">
              Built with Next.js , Tailwindcss , TypeSCript and Supabase.
            </p>
          </div>
        </div>
      </div>
      <div className="text-foreground pb-6 px-5 sm:px-20 xl:px-52">
        <div className="mx-auto flex justify-between items-center">
          <p className="text-xs sm:text-sm">
            &copy; 2025 Vortex.
            <br className="block sm:hidden" />
            {""} All rights reserved
          </p>
          <div className="flex items-center gap-8 text-xl text-gray-700 dark:text-gray-500">
            <a href="https://github.com/dev-Vortex51">
              <BsGithub className="text-bg-dark dark:text-neutral-0 " />
            </a>
            <a href="#">
              <BsEnvelope className="text-bg-dark dark:text-neutral-0 " />
            </a>
            <a href="https://www.linkedin.com/in/dev-Vortex51">
              <BsLinkedin className="text-bg-dark dark:text-neutral-0 " />
            </a>
            <a href="https://twitter.com">
              <BsTwitter className="text-bg-dark dark:text-neutral-0 " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
