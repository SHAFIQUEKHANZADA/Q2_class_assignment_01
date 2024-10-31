import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"


const Work = () => {
    return (
        <div className="h-[44vw] flex items-end mt-6 sm:mt-10 md:mt-32 lg:mt-10">
            
            <div className='sm:px-[32px] xl:[220px] px-[20px] h-[75%]  bg-[#043873] relative'>
                <div className="flex justify-center relative ">
                    <Image
                        src="/images/shadow.png"
                        alt="Logo"
                        width={320}
                        height={100}
                        className="absolute right-[20px] w-[18vw] -top-[9.2vw] z-0"
                    />
                </div>
                <div className="flex justify-center relative z-0">
                  <Image
                    src="/svg/Background_1.svg"
                    alt="Logo"
                    width={280}
                    height={100} // Adjust height based on your SVG dimensions
                    className="absolute inset-0 object-cover sm:left-[-10vw] left-[-13vw] overflow-hidden top-[1vw] w-[23vw] -bottom-[0.3vw] z-0"
                />  
            </div>
                <div className='flex flex-col items-center mt-[8vw] w-[75%] sm:ml-10 mx-auto text-center justify-center'>
                    <div className='flex flex-col text-center'>
                        <h1 className='text-white text-[4vw] font-bold'>Your work, everywhere <span className="relative inline-block z-10">you are</span></h1>
                        <div className="relative">
                            <Image
                                src="/svg/Element_2.svg"
                                alt="Logo"
                                width={320}
                                height={100}
                                className="absolute  w-[24vw] left-[50vw] -bottom-0 z-0"
                            />
                        </div>
                        <p className='text-white text-[1.2vw] font-[300] z-10  mt-[1vw]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>
                        <div className='flex justify-center'>
                            <button className='flex items-center mt-[2.6vw] gap-2 bg-[#4F9CF9] text-[1.1vw] text-white px-[2.2vw] py-[1.2vw] rounded-[0.5vw]'>Try Taskey <span> <FaArrowRight className='font-[100] text-[1vw]' /></span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work