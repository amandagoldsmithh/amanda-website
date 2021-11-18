
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-gray-50 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Amanda Goldsmith
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-cyan-400 hover:text-gray-50">
            Get to Know
          </a>
          <a href="#skills" className="mr-5 text-cyan-400 hover:text-gray-50">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 text-cyan-400 hover:text-gray-50">
            Posts
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-cyan-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-50 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}