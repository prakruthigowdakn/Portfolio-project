import Sectionheading from "@/Component/Helper/sectionheading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709] ">
      <Sectionheading>About Me</Sectionheading>
      <div data-aos = "fade-left" data-aos-anchor-placement = "top-center" className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <div>
          <h1 className="text-bg text-[26px] sm:text-xl md:text-4xl lg:text-[40px] font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-sm text-gray-500">{aboutInfo.description}</p>

          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-5 h-5 bg-blue-900 flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-5 h-5 bg-orange-900 flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-5 h-5 bg-green-900 flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        <div  data-aos = "zoom-in" data-aos-anchor-placement = "top-center" className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.client}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Satisfied Customers</p>
          </div>
          
          <div>
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Years experienced</p>
          </div>
          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.project}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Completed Project</p>
          </div>
          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.website}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Website Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
