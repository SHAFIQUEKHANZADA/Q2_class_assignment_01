import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ProjectManagment = () => {
    return (
        <div className='relative'>
            <div className="flex justify-center relative z-0">
                <Image
                    src="/svg/Background_1.svg"
                    alt="Logo"
                    width={280}
                    height={100} // Adjust height based on your SVG dimensions
                    className="absolute inset-0 object-cover sm:left-[-90px] left-[-120px] overflow-hidden top-[30px] lg:w-[23vw] -bottom-3 z-0"
                /> 
            </div>
            <div className='h-full w-full flex flex-col gap-10 z-30  sm:px-[32px] xl:[220px] px-[20px] sm:py-20 py-14'>


                {/* 1 div */}
                <div className='sm:flex sm:items-center'>
                    <div className='sm:text-start text-center sm:justify-start sm:flex-1'>
                        <h1 className='sm:text-[6vw] text-[40px] font-[700] sm:leading-[85px] leading-tight lg:mt-4'>
                            Project <span className="relative inline-block z-10">Management</span>
                        </h1>

                        <div className="flex justify-center relative ">
                            <Image
                                src="/svg/Element_5.svg"
                                alt="Logo"
                                width={320}
                                height={100} // Adjust height based on your SVG dimensions
                                className="absolute md:right-[70px]  sm:w-[320px] w-[230px] -bottom-3 z-0"
                            />
                        </div>

                        <p className='text-[18px] font-[400] text-[#212529] lg:w-[80%] sm:mt-10 mt-6'>
                            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                        </p>

                        <div className='flex sm:justify-start justify-center'>
                            <button className='flex items-center sm:mt-12 mt-16 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-[14px] rounded-md'>
                                Get Started<span> <FaArrowRight className='font-[100] text-[12px]' /></span>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center sm:justify-end sm:mt-0 mt-11 sm:flex-1">
                        <div className="lg:w-[46vmax]   sm:w-[42vw] w-[80vw] overflow-hidden">
                            <Image
                                src="/images/project.png"
                                alt="banner-image"
                                layout="responsive"
                                width={670}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* 2 div */}
                <div className="flex sm:flex-row sm:items-center sm:justify-center sm:mt-10 flex-col-reverse">
                    <div className='sm:flex-1'>
                        <div className="relative flex items-center sm:justify-start justify-center sm:mt-0 mt-20 sm:pl-4">
                            {/* Outer Dashed Circle */}
                            <div className="relative flex items-center justify-center lg:w-[36vw] lg:h-[36vw] sm:w-[32vw] sm:h-[32vw] w-[50vw] h-[50vw] rounded-full border-2 border-dashed border-[#A7CEFC] rotate-45 z-0">

                                {/* Outer Circle Dots */}
                                {/* 12 o'clock dot */}
                                <div className="absolute sm:top-[-25px] top-[-18px] left-1/2 transform -translate-x-1/2 lg:w-14 lg:h-14 md:w-10 md:h-10 w-[7vw] h-[7vw]  bg-green-500 rounded-full rotate-[-45deg]"><Image src={"/images/p8.png"} alt='p1' width={100} height={100} quality={100} /></div>
                                {/* 3 o'clock dot */}
                                <div className="absolute sm:right-[-18px] right-[-14px] top-[40%] transform -translate-y-1/2 lg:w-14 lg:h-14 md:w-10 md:h-10 w-[7vw] h-[7vw]  bg-blue-400 rounded-full rotate-[-45deg]"><Image src={"/images/p7.png"} alt='p2' width={100} height={100} quality={100} /></div>
                                {/* 6 o'clock dot */}
                                <div className="absolute bottom-[-3px] left-[70%] transform -translate-x-1/2 lg:w-14 lg:h-14 md:w-10 md:h-10 w-[7vw] h-[7vw]  bg-orange-400 rounded-full rotate-[-45deg]"><Image src={"/images/p3.png"} alt='p3' width={100} height={100} quality={100} /></div>
                                {/* 9 o'clock dot */}
                                <div className="absolute sm:left-[-18px] left-[-13px] top-[40%] transform -translate-y-1/2 lg:w-14 lg:h-14 md:w-10 md:h-10 w-[7vw] h-[7vw]  bg-yellow-300 rounded-full rotate-[-45deg]"><Image src={"/images/p9.png"} alt='p3' width={100} height={100} quality={100} /></div>

                                <div className="absolute lg:bottom-[2%] md:bottom-[0%] sm:bottom-[-14%] bottom-[5%] sm:left-[1.5vw] md:left-[3vw] lg:left-[3.7vw] left-[2vw] transform -translate-y-1/2 lg:w-14 lg:h-14 md:w-10 md:h-10 w-[7vw] h-[7vw]  bg-red-400 rounded-full rotate-[-45deg]"><Image src={"/images/p2.png"} alt='p3' width={100} height={100} quality={100} /></div>

                                {/* Inner Dashed Circle */}
                                <div className="relative flex items-center justify-center lg:w-[21vw] lg:h-[21vw] sm:w-[17vw] sm:h-[17vw]  rounded-full border-2 border-dashed border-[#A7CEFC] rotate-[-45deg] w-[32vw] h-[32vw]">
                                    {/* Inner Circle Dots */}
                                    <Image src="/images/logo-mini.png" alt="Center Image" width={100} height={100} className="absolute w-[52%] h-[52%] object-cover rounded-full z-10" />
                                    {/* 12 o'clock dot */}
                                    <div className="absolute sm:top-[-24px] sm:left-1/2  top-[-13px] left-1/2 transform -translate-x-1/2 lg:w-[52px] lg:h-[52px] md:w-[40px] md:h-[40px] w-[7vw] h-[7vw] bg-green-500 rounded-full"><Image src={"/images/p11.png"} alt='p2' width={100} height={100} quality={100} /></div>
                                    {/* 3 o'clock dot */}
                                    <div className="absolute sm:right-[-24px] sm:top-1/2 right-[-13px] top-1/2 transform -translate-y-1/2 lg:w-[52px] lg:h-[52px] md:w-[40px] md:h-[40px] w-[7vw] h-[7vw] bg-blue-400 rounded-full"><Image src={"/images/p5.png"} alt='p2' width={100} height={100} quality={100} /></div>
                                    {/* 6 o'clock dot */}
                                    <div className="absolute sm:bottom-[-24px] sm:left-1/2 bottom-[-13px] left-1/2 transform -translate-x-1/2 lg:w-[52px] lg:h-[52px] md:w-[40px] md:h-[40px] w-[7vw] h-[7vw] bg-orange-400 rounded-full"><Image src={"/images/p10.png"} alt='p2' width={100} height={100} quality={100} /></div>
                                    {/* 9 o'clock dot */}
                                    <div className="absolute sm:left-[-24px] sm:top-1/2 left-[-13px] top-1/2 transform -translate-y-1/2 lg:w-[52px] lg:h-[52px] md:w-[40px] md:h-[40px] w-[7vw] h-[7vw] bg-blue-400 rounded-full"><Image src={"/images/p6.png"} alt='p2' width={100} height={100} quality={100} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sm:text-start text-center sm:justify-start sm:flex-1'>
                        <h1 className='sm:text-[6vw] text-[38px] font-[700] sm:leading-[85px] leading-tight lg:mt-4'>Work <span className="relative inline-block z-10">together</span></h1>
                        <div className="flex justify-center relative ">
                            <Image
                                src="/svg/Element_5.svg"
                                alt="Logo"
                                width={320}
                                height={100} // Adjust height based on your SVG dimensions
                                className="absolute lg:right-[70px]  sm:w-[320px] w-[230px] -bottom-3 z-0"
                            />
                        </div>
                        <p className='text-[18px] font-[400] text-[#212529]  sm:mt-10 mt-6'>With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.
                        </p>
                        <div className='flex sm:justify-start justify-center'>
                            <button className='flex items-center sm:mt-14 mt-16 gap-2 bg-[#4F9CF9] text-[16px] text-white px-8 py-[15px] rounded-md'>Try it now<span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectManagment