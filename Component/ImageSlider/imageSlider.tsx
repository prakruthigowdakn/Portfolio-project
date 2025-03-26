"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import city1 from "../../public/Images/SpaceCity1.jpg";
import city2 from "../../public/Images/SpaceCity2.jpeg";
import city3 from "../../public/Images/SpaceCity3.jpeg";
import planet1 from "../../public/Images/planet1.png";
import planet2 from "../../public/Images/planet2.png";
import Sectionheading from "../Helper/sectionheading";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

 
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

 
  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      return updatedIndexes;
    });
  };

  
  const images = [city1, city2, city3, planet1, planet2];

  const positions = ["center", "left1", "left", "right", "right1"];

  
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <Sectionheading>Animated Image Carousel</Sectionheading>
    <div className="flex items-center flex-col justify-center h-screen overflow-hidden relative">
      
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{
            width: "40%",
            position: "absolute",
          }}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            className="rounded-[12px]"
            layout="responsive"
            width={500}
            height={500}
          />
        </motion.div>
      ))}

      
      <div className="flex flex-row gap-3 mt-[450px] z-10">
        <button
          className="text-white bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
