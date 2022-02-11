import React from "react";

export default function About() {
    return(
        <section id= "About">
        <div className= "bg-cyan-400 body-font mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className= "font-mono sm:text-4xl text-3xl mb-4 font-medium text-gray-50" >
          Hi! I'm Amanda Goldsmith, I'm happy that you're here (:
          <br className="hidden lg:inline-block" /> 
        </h1>
        <p className="mb-8 leading-relaxed font-mono text-cyan-900">
          I like videogames, rainy days, earth, coffee and data. Here you can find out more
          about what I've done and what I'd like to do next. 
        </p>
        <div className="flex bg-white big-opacity-100 justify-center">
          <a
            href="#Contact"
            className="inline-flex-2 text-gray-100 bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-800 rounded text-lg">
            Work With Me
          </a>
          <a
            href="#Projects"
            className="ml-4 inline-flex text-gray-100 bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-800 hover:text-white rounded text-lg">
            See Some Things I've Done
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./gaming.svg"
        />
      </div>
    </div>
  </section> 
);

}