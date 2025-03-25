import Sectionheading from "@/Component/Helper/sectionheading";
import { blogs } from "@/Data/data";
import React from "react";
import BlogCard from "./blogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715] ">
      <Sectionheading>Our Blog</Sectionheading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 items-center">
        {blogs.map((blog, index) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${index * 150}`}
              data-aos-anchor-placement="top-center"
              key={blog.id}
              className="h-full flex"
            >
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
