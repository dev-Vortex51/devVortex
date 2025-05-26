"use client";

import Link from "next/link";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { useAppContext } from "../_contexts/AppContext";
import { useClickOutside } from "../_hooks/useClickOutside";

function SmallNav() {
  const { isOpenSidebar, setIsOpenSidebar } = useAppContext();

  function handleClose() {
    setIsOpenSidebar(false);
  }

  const ref = useClickOutside(handleClose);
  return (
    <div
      ref={ref}
      className={`fixed z-[10000] gap-4 bg-neutral-0 p-6 shadow-lg transition-all duration-300 ease-in-out md:hidden inset-x-0 border-b border-border-light dark:border-border dark:bg-bg-dark/75 backdrop-blur-sm
        ${
          isOpenSidebar
            ? "top-0 opacity-100 pointer-events-auto"
            : "top-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="flex flex-col space-y-2 text-center sm:text-left">
        <div className="text-sm text-muted-foreground">
          <nav className="flex flex-col gap-6 text-lg py-[60px]">
            <Link
              href="/"
              onClick={() => setIsOpenSidebar(false)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand h-10 px-4 py-2 dark:text-neutral-0"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpenSidebar(false)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand h-10 px-4 py-2 dark:text-neutral-0"
            >
              Projects
            </Link>
            <a
              href="#contact"
              onClick={() => setIsOpenSidebar(false)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand h-10 px-4 py-2 dark:text-neutral-0"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      <button
        className="absolute text-bg-dark dark:text-neutral-0 right-4 top-4 rounded-sm opacity-70  transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none  text-xl cursor-pointer"
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      >
        <IoIosClose className="text-lg" />
      </button>
    </div>
  );
}

export default SmallNav;
