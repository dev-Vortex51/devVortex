"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiOutlineSun } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

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
        className={`flex place-items-center sticky top-0 z-50 py-4 h-[80px] backdrop-blur-2xl bg-transparent dark:bg-transparent-gradient ${
          scrolled
            ? "border-border-light dark:border-border border-b-1"
            : "border-0"
        }`}
      >
        <div className="w-full mx-auto flex justify-between items-center px-5 sm:px-20 xl:px-52">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2">
              <BsCodeSlash />
              <h2 className="text-2xl font-bold dark:text-neutral-900">
                Vortex.dev
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
            <button className="inline-flex items-center cursor-pointer text-dark-from dark:text-neutral-0 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-light dark:border-border hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-gradient-gray">
              <HiOutlineSun />
            </button>
            <button className="inline-flex items-center cursor-pointer text-dark-from dark:text-neutral-0 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-light dark:border-border hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden bg-gradient-gray">
              <BiMenu />
            </button>
          </div>
        </div>

        {/* <h1 className="text-2xl font-bold gradient-text">Vortex.dev</h1>
        <nav>
          <ul className="flex gap-7 items-center">
            <li className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              <Link href="/project">Projects</Link>
            </li>
            <li className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Contact
            </li>
          </ul>
        </nav>
        <button className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-light dark:border-border hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-gradient-gray">
          <HiOutlineSun />
        </button>
      </div> */}
      </header>
    </>
  );
}
