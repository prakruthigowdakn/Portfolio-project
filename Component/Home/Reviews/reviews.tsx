import Sectionheading from '@/Component/Helper/sectionheading'
import React from 'react'
import Slider from './slider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <Sectionheading>Client Reviews</Sectionheading>
      <div className='w-[90%] sm:w-[80%] mx-auto mt-20 h-full'>
        <Slider/>
      </div>
    </div>
  )
}

export default Reviews