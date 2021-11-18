// src/components/Testimonials
import React from "react";
import { EmojiHappyIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
export default function Testimonials() 
{
    return (
    <section id= "Testimonials" className="text-gray-100 bg-cyan-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <EmojiHappyIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-mono title-font mb-4 text-white">
            Some Work I've Done
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are a few projects I've worked on: <br /> (Not including the website I built that you're on right now!)
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonials) => (
            <a
              href={testimonials.link}
              key= {testimonials.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src= {testimonials.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                     {testimonials.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                     {testimonials.title}
                  </h1>
                  <p className="leading-relaxed"> {testimonials.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>)
}