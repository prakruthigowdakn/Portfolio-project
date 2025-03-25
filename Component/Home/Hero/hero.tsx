import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hideen relative'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center gap-12'>
        <div>
          <h1 data-aos='fade-left' className='text-xl md:text-2xl lg:text-3xl mb-4 text-gray-300 font-semibold'>I am {BaseInfo.name} </h1>
          <h1 data-aos = 'fade-right' data-aos-delay = '100' className='text-bg text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
          md:leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.5rem] text-white'> {BaseInfo.position} </h1>
          <p data-aos = 'fade-left' data-aos-delay="200" className='mt-6 text-sm text-white text-opacity-60'> {BaseInfo.description}</p>
          <button data-aos = 'zoom-in' data-aos-delay="300" className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200
          rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'>
            <span>Download CV</span>
            <FaDownload/>
          </button>
        </div>
        <div data-aos = 'zoom-in' data-aos-delay="400" className='hidden sm:block mx-auto lg:block xl:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden'>
          <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={400} height={400}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero

// import { BaseInfo } from '@/Data/data'
// import Image from 'next/image'
// import React from 'react'
// import { FaDownload } from 'react-icons/fa'

// const Hero = () => {
//   return (
//     <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
//       <div className='flex justify-center flex-col w-4/5 h-full mx-auto text-white'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center gap-12'>
//           {/* Text Section */}
//           <div>
//             <h1 data-aos='fade-left' className='text-xl md:text-2xl lg:text-3xl mb-4 text-gray-300 font-semibold'>
//               I am {BaseInfo.name}
//             </h1>
//             <h1
//               data-aos='fade-right'
//               data-aos-delay='100'
//               className='text-bg text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
//             md:leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.5rem] text-white'
//             >
//               {BaseInfo.position}
//             </h1>
//             <p
//               data-aos='fade-left'
//               data-aos-delay='200'
//               className='mt-6 text-sm text-white text-opacity-60'
//             >
//               {BaseInfo.description}
//             </p>
//             <button
//               data-aos='zoom-in'
//               data-aos-delay='300'
//               className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200
//             rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'
//             >
//               <span>Download CV</span>
//               <FaDownload />
//             </button>
//           </div>

//           {/* Image Section */}
//           <div
//             data-aos='zoom-in'
//             data-aos-delay='400'
//             className='hidden sm:block mx-auto lg:block xl:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden'
//           >
//             <Image
//               src={BaseInfo.profilePic}
//               alt={BaseInfo.name}
//               width={400}
//               height={400}
//               className='object-cover'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero
