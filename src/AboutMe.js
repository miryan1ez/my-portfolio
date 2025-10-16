import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BriefcaseIcon, CodeBracketIcon, GlobeAltIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaWordpress, FaFigma, FaGithub, FaSpotify, FaCloud } from "react-icons/fa";
import { SiMysql, SiMongodb, SiAdobeaftereffects, SiIcloud, SiGoogle, SiRapid } from "react-icons/si";
import NavbarOther from "./NavbarOther";
import Loader from "./Loader";
const AboutMe = () => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-poppins flex flex-col items-center px-6 py-16 ">
    <NavbarOther />
      {/* Top Section */}      <div className="w-full max-w-5xl bg-gray-800 rounded-2xl shadow-lg p-10 mt-10 border border-[#e0aaff]/30">
        <h1 className="text-4xl font-bold text-[#e0aaff] mb-6">About Me</h1>
        <p className="text-gray-300 leading-relaxed text-lg">
          Hello! I’m <span className="text-[#e0aaff] font-semibold">Von Voltaire</span>, 
          a passionate web and mobile developer who loves building clean, 
          interactive, and user-friendly digital experiences. I enjoy learning 
          new technologies, experimenting with design, and exploring creative 
          ways to solve problems through code.  
        </p>
        <p className="text-gray-400 mt-4">
          My main focus areas include React, Node.js, and modern API integration.  
          I also enjoy designing interfaces that are both aesthetic and intuitive.
        </p>

        <p className="text-gray-400 mt-6">
          I studied at{" "}
          <span className="text-[#e0aaff] font-medium">
            Technological University of the Philippines
          </span>
          , where I earned recognition as a President’s Lister and represented 
          the university as a varsity player for the Valorant team 
          <span className="text-[#e0aaff] font-medium"> Grayhawks Osmium</span>.  
          I spent four years there studying networking, IT-related systems, 
          Arduino and Raspberry Pi projects, and focusing primarily on web 
          and app development.
        </p>


        <div className="mt-4 rounded-xl overflow-hidden border border-[#e0aaff]/20">
          <Slider {...settings}>
            <img src="https://res.cloudinary.com/dglawxazg/image/upload/v1759869256/received_766800839261202_cqwf6a_1_bbqsrx.jpg" alt="TUP Campus" className="w-full h-72 object-cover object-[center_35%]" />
            <img src="https://res.cloudinary.com/dglawxazg/image/upload/v1759868451/received_271272552586129_bmi4xp.jpg" alt="TUP Activities" className="w-full h-72 object-cover object-[center_30%]" />
            <img src="https://res.cloudinary.com/dglawxazg/image/upload/v1759869428/20240625_1519122_t9thsy.jpg" alt="TUP Grayhawks" className="w-full h-72 object-cover " />
          </Slider>
        </div>

        <p className="text-gray-400 mt-6">
          I have been an intern at{" "}
          <a
            href="https://technoglobalteam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e0aaff] font-medium hover:underline"
          >
            Techno Global Team
          </a>
          , where I served as an auditor responsible for overseeing and managing 
          the company’s hardware inventory system. I was also tasked with 
          checking and testing hardware to ensure quality and functionality.
        </p>

        <div className="mt-4 rounded-xl overflow-hidden border border-[#e0aaff]/20">
          <Slider {...settings}>
            <img src="https://res.cloudinary.com/dglawxazg/image/upload/v1759868572/20250805_082522_suixli.jpg" alt="Techno Global Team Office" className="w-full h-72 object-cover " />
            <img src="https://res.cloudinary.com/dglawxazg/image/upload/v1759868452/20250709_151941_fqdsmj.jpg" alt="Internship Work" className="w-full h-72 object-cover" />
            <img src="https://res.cloudinary.com/dglawxazg/image/upload/v1759868571/20250801_142226_zvdm9s.jpg" alt="Hardware Auditing" className="w-full h-72 object-cover object-[center_70%]" />
          </Slider>
        </div>
      </div>



<div className="w-full max-w-5xl mx-auto mt-12 space-y-6">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-gray-800 rounded-2xl p-6 border border-[#e0aaff]/30 shadow-md flex flex-col items-center">
      <BriefcaseIcon className="w-10 h-10 text-[#e0aaff] mb-3" />
      <h2 className="text-2xl font-semibold text-[#e0aaff] mb-4">Jobs / Projects</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Personal Portfolio Website</li>
        <li>E-commerce Website/App (ReactJS)</li>
        <li>E-commerce Website/App (Laravel)</li>
        <li>Weather Forecast Dashboard</li>
        <li>Wordpress Website</li>
      </ul>
    </div>


    <div className="bg-gray-800 rounded-2xl p-6 border border-[#e0aaff]/30 shadow-md flex flex-col items-center">
      <CodeBracketIcon className="w-10 h-10 text-[#e0aaff] mb-3" />
      <h2 className="text-2xl font-semibold text-[#e0aaff] mb-4">APIs Tried</h2>
      <ul className="text-gray-300 space-y-3 w-full">
  <li className="flex items-center gap-3"><SiGoogle className="text-[#e0aaff] text-xl" /> Google OAuth2 API</li>
  <li className="flex items-center gap-3"><SiRapid className="text-[#e0aaff] text-xl" /> RapidAPI (Movie Database)</li>
  <li className="flex items-center gap-3"><SiIcloud className="text-[#e0aaff] text-xl" /> OpenWeather API</li>
  <li className="flex items-center gap-3"><FaSpotify className="text-[#e0aaff] text-xl" /> Spotify API</li>
  <li className="flex items-center gap-3"><FaCloud className="text-[#e0aaff] text-xl" /> Cloudinary API</li>
</ul>
    </div>


   <div className="bg-gray-800 rounded-2xl p-6 border border-[#e0aaff]/30 shadow-md flex flex-col items-center">
  <GlobeAltIcon className="w-10 h-10 text-[#e0aaff] mb-3" />
  <h2 className="text-2xl font-semibold text-[#e0aaff] mb-4">Software / Websites</h2>
  <ul className="text-gray-300 space-y-3 w-full">
    <li className="flex items-center gap-3">
      <FaFigma className="text-[#e0aaff] text-xl" /> Figma
    </li>
    <li className="flex items-center gap-3">
      <SiAdobeaftereffects className="text-[#e0aaff] text-xl" /> Adobe After Effects
    </li>
    <li className="flex items-center gap-3">
      <SiMongodb className="text-[#e0aaff] text-xl" /> MongoDB / MySQL
    </li>
    <li className="flex items-center gap-3">
      <FaCloud className="text-[#e0aaff] text-xl" /> Cloudinary
    </li>
    <li className="flex items-center gap-3">
      <FaWordpress className="text-[#e0aaff] text-xl" /> WordPress
    </li>
    <li className="flex items-center gap-3">
      <FaGithub className="text-[#e0aaff] text-xl" /> GitHub
    </li>
    <li className="flex items-center gap-3">
      <FaReact className="text-[#e0aaff] text-xl" /> React Tools
    </li>
  </ul>
</div>
  </div>


  <div className="flex flex-col md:flex-row justify-center gap-6">

    <div className="bg-gray-800 rounded-2xl p-6 border border-[#e0aaff]/30 shadow-md flex flex-col items-center md:w-1/3">
      <SparklesIcon className="w-10 h-10 text-[#e0aaff] mb-3" />
      <h2 className="text-2xl font-semibold text-[#e0aaff] mb-4">Skills</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>UI/UX Design</li>
        <li>Responsive Web Design</li>
        <li>API Integration</li>
        <li>Database Management</li>
        <li>Debugging & Optimization</li>
      </ul>
    </div>


    <div className="bg-gray-800 rounded-2xl p-6 border border-[#e0aaff]/30 shadow-md flex flex-col items-center md:w-1/3">
  <CodeBracketIcon className="w-10 h-10 text-[#e0aaff] mb-3" />
  <h2 className="text-2xl font-semibold text-[#e0aaff] mb-4">Languages</h2>

 <ul className="grid grid-cols-2 gap-x-6 text-gray-300">
  <li className="flex items-center gap-2"><FaPhp className="text-[#e0aaff]" /> PHP</li>
  <li className="flex items-center gap-2"><FaReact className="text-[#e0aaff]" /> ReactJS</li>
  <li className="flex items-center gap-2"><FaJs className="text-[#e0aaff]" /> JavaScript</li>
  <li className="flex items-center gap-2"><FaHtml5 className="text-[#e0aaff]" /> HTML</li>
  <li className="flex items-center gap-2"><FaCss3Alt className="text-[#e0aaff]" /> CSS</li>
  <li className="flex items-center gap-2"><FaLaravel className="text-[#e0aaff]" /> Laravel</li>
  <li className="flex items-center gap-2"><SiMongodb className="text-[#e0aaff]" /> NoSQL DB</li>
  <li className="flex items-center gap-2"><SiMysql className="text-[#e0aaff]" /> SQL DB</li>
  <li className="flex items-center gap-2"><FaReact className="text-[#e0aaff]" /> React Native</li>
  <li className="flex items-center gap-2"><FaPhp className="text-[#e0aaff]" /> PHP</li>
</ul>

</div>

  </div>
</div>




    </div>
  );
};

export default AboutMe;
