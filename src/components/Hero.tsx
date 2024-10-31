import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
    return (
        <div
        className="sm:px-[32px] px-[20px] lg:h-screen bg-[#043873] relative"
        style={{
            backgroundImage: `url('/svg/Element.svg')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'calc(100vw + 50%)',
          }}
        >
        <div className="sm:flex items-center sm:h-[656px] sm:w-full sm:pt-0 pt-40">
          {/* Text Section */}
          <div className="flex-1 sm:text-start text-center sm:pt-20">
            <h1 className="text-white text-[12vw] sm:text-[50px] lg:text-[65px] font-bold sm:leading-[72px]">
              Get More Done with Whitepace
            </h1>
            <p className="text-white lg:text-[18px] text-[18px] font-[300] mt-6">
              Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
            </p>
  
            {/* Desktop Button */}
            <button className="sm:flex hidden items-center sm:mt-12 gap-2 bg-[#4F9CF9] text-[14px] text-white px-4 py-[14px] rounded-md">
              Try Whitepace free <FaArrowRight className="font-[100] text-[12px]" />
            </button>
  
            {/* Mobile Button */}
            <div className="flex sm:justify-start justify-center sm:mb-0 mb-20">
              <button className="flex sm:hidden items-center mt-12 gap-2 bg-[#4F9CF9] text-[14px] text-white px-6 py-4 rounded-md">
                Try Taskey free <FaArrowRight className="font-[100] text-[12px]" />
              </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="flex-1 flex justify-center sm:justify-end items-center">
            <div className="lg:w-[48vmax] sm:h-[30vmax] sm:w-[42vw] w-[80vw] h-full lg:mt-10 sm:mb-0 mb-20">
              <Image
                src="/images/pro.png"
                alt="banner-image"
                layout="responsive"
                width={670}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero