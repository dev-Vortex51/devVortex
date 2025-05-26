"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useAppContext } from "../_contexts/AppContext";

export default function Header() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { handleToggle, isDarkMode, setIsOpenSidebar } = useAppContext();

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} style={{ height: 1 }} aria-hidden="true" />
      <header
        className={`flex place-items-center sticky top-0 z-100 py-4 h-[80px] backdrop-blur-2xl bg-transparent dark:bg-transparent-gradient ${
          scrolled
            ? "border-border-light dark:border-border border-b-1"
            : "border-0"
        }`}
      >
        <div className="w-full mx-auto flex justify-between items-center px-5 sm:px-20 xl:px-52">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2">
              <Image
                width={50}
                height={50}
                src={"/logo-vortex.png"}
                alt="logo"
              />
              <h2 className="text-2xl font-bold dark:text-neutral-900">
                Vortex
              </h2>
            </Link>
            <nav className="hidden md:flex gap-10">
              <Link
                href="/"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand h-10 px-4 py-2 text-dark-from dark:text-neutral-0"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand h-10 px-4 py-2 text-dark-from dark:text-neutral-0"
              >
                Projects
              </Link>
              <a
                href="mailto:qudusbello51@gmail.com"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand h-10 px-4 py-2 text-dark-from dark:text-neutral-0"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="inline-flex hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand items-center cursor-pointer text-dark-from dark:text-neutral-0 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-light dark:border-border hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-gradient-gray"
              onClick={handleToggle}
            >
              {!isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </button>
            <button
              className="inline-flex hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand items-center cursor-pointer text-dark-from dark:text-neutral-0 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-light dark:border-border hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden bg-gradient-gray"
              onClick={() => setIsOpenSidebar(true)}
            >
              <BiMenu />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

// https://fra.cloud.appwrite.io/v1
// 6831e501002f46f377ab

// standard_9396fe69fd9d907a816e282f0d5990524e9e683f90d43fc704da13decc5916f840b69a2f098835b3f3b6b0131e14ab81eccd5f6c75f40776577e63c93781d81b2c3cefb5b19a983e03ad2b168adcd5d6ef16e583ab8a593d4fb9bd578f76c139290e1dccc038f8559f884056894fcfec9e6be45c6ad005445258ccc2726a6bc7
