"use client";
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt'

type Props = {
    service: {
    id: number;
    title: string;
    description: string;
    icon: string;
}
bgColor: string
}

const ServiceCard = ({ service, bgColor } : Props) => {
  console.log(service);
  return (
    <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814ced]'
    style={{ backgroundColor: bgColor }}>
        <Image src={service.icon} alt={service.title} width={50} height={50} />
        <h1 className='mt-4 text-sm font-bold text-white'>{service.title}</h1>
        <p className='mt-3 text-sm text-gray-200 text-opacity-80'>{service.description}</p>
    </Tilt>
  )
}

export default ServiceCard