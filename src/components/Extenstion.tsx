import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"



const Extenstion = () => {
    return (
        <div className='sm:px-[32px] xl:[220px] px-[20px]  bg-[#043873]'>

            <div className='sm:flex  items-center md:h-[620px] sm:w-full md:py-0 py-16'>

                <div className='flex-1 sm:text-start text-center'>
                    <h1 className='text-white text-[8vw] sm:text-[50px] lg:text-[60px] font-bold sm:leading-[64px]'>Use as <span className="relative inline-block z-10">Extension</span></h1>
                        <div className="flex justify-center relative ">
                            <Image
                                src="/svg/Element_5.svg"
                                alt="Logo"
                                width={320}
                                height={100} // Adjust height based on your SVG dimensions
                                className="absolute lg:right-[120px] md:right-[40px] sm:right-[90px] right-0  sm:w-[24vw] w-[200px] sm:-bottom-3 -bottom-0 z-0"
                            />
                        </div>
                    <p className='text-white lg:text-[18px] text-[14px] font-[300]  mt-6'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                    <div className='flex sm:justify-start justify-center sm:mb-0 mb-20'>
                        <button className='flex  items-center mt-12 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-4 rounded-md'>Let&apos;s Go <span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center sm:justify-end items-center lg:ml-3 md:mb-16">
                    <div className="lg:w-[42vmax] sm:h-[30vmax]  sm:w-[42vw] w-[80vw] h-full">
                        <Image
                            src="/images/dev.png"
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

export default Extenstion