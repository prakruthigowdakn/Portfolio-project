import Sectionheading from "@/Component/Helper/sectionheading";
import { servicesData } from "@/Data/data";
import React from "react";
import ServiceCard from "./serviceCard";

const Services = () => {
  const colors: string[] = ["#814ced", "#f97316", "#f97316", "#3b82f6"];
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <Sectionheading>Services</Sectionheading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service, index) => {
          return (
            <div
              key={service.id}
              data-aos="fade-left"
              data-aos-delay= {`${index*150}`}
              data-aos-anchor-placement="top-center"
            >
              <ServiceCard
                service={service}
                bgColor={colors[index % colors.length]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
