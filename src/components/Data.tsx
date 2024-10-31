import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"


const Data = () => {
    return (
        <div className='sm:px-[32px] xl:[220px] px-[20px]'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:h-[646px] sm:w-full md:py-0 py-16'>

                <div className='flex-1 sm:text-start text-center'>
                    <h1 className='text-[10vw] sm:text-[50px] lg:text-[60px] font-bold sm:leading-[64px] z-10'>100% <span className="relative inline-block z-10">your data</span></h1>
                    <div className="flex justify-center relative ">
                        <Image
                            src="/svg/Element_5.svg"
                            alt="Logo"
                            width={320}
                            height={100}
                            className="absolute lg:right-[130px] md:right-[40px] sm:right-[90px] right-10  sm:w-[24vw] w-[150px] sm:-bottom-3 -bottom-0 z-0"
                        />
                    </div>
                    <p className='lg:text-[18px] text-[14px] font-[300]  mt-6'>The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                    </p>
                    <div className='flex sm:justify-start justify-center sm:mb-0 mb-20'>
                        <button className='flex  items-center mt-12 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-4 rounded-md'>Read more<span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center sm:justify-end items-center">
                    <div className="lg:w-[46vmax] sm:h-[30vmax] sm:w-[42vw] w-[80vw] h-full  lg:mt-10 sm:mb-0 mb-20">
                        <Image
                            src="/svg/Element.png"
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

export default Data