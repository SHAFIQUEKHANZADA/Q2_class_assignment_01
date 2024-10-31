import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"


const Work = () => {
    return (
        <div className="h-[44vw] flex items-end mt-48 sm:mt-10 md:mt-32 lg:mt-10">
            
            <div className='sm:px-[32px] xl:[220px] px-[20px] sm:h-[75%]  bg-[#043873] relative'>
                <div className="flex justify-center relative ">
                    <Image
                        src="/images/shadow.png"
                        alt="Logo"
                        width={320}
                        height={100}
                        className="absolute sm:right-[20px] right-[0px] sm:w-[18vw] w-[32vw] sm:-top-[9.2vw] -top-[16vw] z-0"
                    />
                </div>
                <div className="flex justify-center relative z-0">
                  <Image
                    src="/svg/Background_1.svg"
                    alt="Logo"
                    width={280}
                    height={100}  
                    className="absolute inset-0 object-cover sm:left-[-10vw] left-[-13vw] overflow-hidden top-[1vw] sm:w-[23vw] w-[38vw] -bottom-[0.3vw] z-0"
                />  
            </div>
                <div className='flex flex-col items-center mt-[8vw] sm:w-[75%]  sm:ml-10 mx-auto sm:text-center justify-center'>
                    <div className='flex flex-col sm:text-center'>
                        <h1 className='text-white sm:text-[4vw] text-[6.9vw] sm:w-[100%] w-[80%] font-bold'>Your work, everywhere <span className="relative inline-block z-10">you are</span></h1>
                        <div className="relative">
                            <Image
                                src="/svg/Element_2.svg"
                                alt="Logo"
                                width={320}
                                height={100}
                                className="absolute  sm:w-[24vw] w-[30vw] sm:left-[50vw] left-[40vw] -bottom-0 z-0"
                            />
                        </div>
                        <p className='text-white sm:text-[1.2vw] text-[2.3vw] sm:w-[100%] w-[70%] font-[300] z-10  mt-[1vw]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>
                        <div className='flex sm:justify-center sm:mb-0 mb-[3.7vw]'>
                            <button className='flex items-center mt-[2.6vw] gap-2 bg-[#4F9CF9] sm:text-[1.1vw] text-[3vw] text-white px-[2.2vw] py-[1.2vw] sm:rounded-[0.5vw] rounded-sm'>Try Taskey <span> <FaArrowRight className='font-[100] sm:text-[1vw] text-[3vw]' /></span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work