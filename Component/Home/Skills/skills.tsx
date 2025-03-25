import Sectionheading from "@/Component/Helper/sectionheading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./skillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <Sectionheading>My Skills</Sectionheading>
      <div className="pt-29 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, index) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-delay={`${index * 150}`}
              data-aos-anchor-placement="top-center"
              key={skill.id}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
