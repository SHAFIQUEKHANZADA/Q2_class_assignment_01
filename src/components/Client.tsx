"use client";
 
import Image from "next/image"
import MultipleItems from "./Cerocel";

const Client = () => {
    
    return (
        <div> 
        <div className="flex flex-col sm:gap-10 sm:px-[32px]  px-[20px]">
            <div className="flex justify-center relative sm:my-20 my-16">
                <h1 className="text-[9vw] text-center sm:text-[50px] lg:text-[60px] font-bold sm:leading-[64px] z-10">
                    What Our  <span className="relative inline-block z-10">Clients Says</span>
                </h1>
                <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                        src="/svg/Element_5.svg"
                        alt="Logo"
                        width={320}
                        height={100}
                        className="absolute sm:right-[25vw]  right-[20vw]   md:w-[24vw] sm:w-[26vw] w-[200px] sm:-bottom-3 -bottom-0 z-0"
                    />
                </div>
            </div>

            <div>
                {/* cards on desktop */}
                 

            </div>
        </div>

        <MultipleItems/>
        </div>
    )
}

export default Client