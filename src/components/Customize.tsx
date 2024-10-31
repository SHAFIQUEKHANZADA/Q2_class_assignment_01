import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"



const Customize = () => {
    return (
        <div className='sm:px-[32px]   px-[20px] bg-[#FEFEFE]'>

            <div className='sm:flex items-center md:h-[656px] sm:w-full md:py-0 py-16 sm:gap-6'>
                <div className="flex-1 flex justify-center sm:justify-end items-center">
                    <div className="lg:w-[34vmax] lg:mr-20 sm:h-[30vmax] sm:w-[42vw] w-[80vw] h-full  ">
                        <Image
                            src="/images/custumize.jpg"
                            alt="banner-image"
                            layout="responsive"
                            width={670}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className='flex-1 sm:text-start text-center sm:mt-20'>
                    <h1 className='text-[7vw] sm:text-[5vw] sm:pt-0 pt-9 md:text-[50px] lg:text-[60px] font-bold sm:leading-[64px]'>Customise it to <span className="relative inline-block z-10">your needs</span></h1>
                     
                        <div className="flex justify-center relative ">
                            <Image
                                src="/svg/Element_5.svg"
                                alt="Logo"
                                width={320}
                                height={100} // Adjust height based on your SVG dimensions
                                className="absolute lg:left-[0px] md:left-[80px] sm:left-[10px] left-16  md:w-[24vw]  sm:w-[26vw]  w-[200px] md:-bottom-3 -bottom-0 z-0"
                            />
                        </div>
                    <p className='lg:text-[18px] text-[14px] font-[300] sm:mt-3  md:mt-6'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <div className='flex sm:justify-start justify-center sm:mb-0 mb-20 sm:pt-0 pt-7'>
                        <button className='flex items-center md:mt-12 sm:mt-7 gap-2 bg-[#4F9CF9] sm:text-[16px] text-[14px] text-white px-7 py-4 rounded-md'>Let&apos;s Go <span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Customize