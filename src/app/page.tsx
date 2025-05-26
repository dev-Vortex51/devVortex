import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import { FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdColorPalette } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Contact from "./_components/Contact";

function page() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}

export default page;
