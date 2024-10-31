import Image from "next/image"

const Sponser = () => {
    return (
        <div className="flex flex-col sm:gap-28 gap-12 sm:px-[32px] xl:[220px] px-[20px]">
            <div className="flex justify-center relative">
        <h1 className="text-[10vw] sm:text-[50px] lg:text-[60px] font-bold sm:leading-[64px] z-10">
            Our <span className="relative inline-block z-10">sponsors</span>
        </h1>

        {/* Container for Background SVG */}
        <div className="absolute inset-0 flex justify-center items-center">
            <Image
                src="/svg/Element_5.svg"
                alt="Logo"
                width={320}
                height={100}
                className="absolute sm:right-[30vw]  right-[20vw]   md:w-[24vw] sm:w-[26vw] w-[200px] sm:-bottom-3 -bottom-0 z-0"
            />
        </div>
    </div>

            <div className="flex sm:flex-row items-center sm:gap-0 gap-[18vw] flex-col sm:justify-between">
                <div className="sm:w-[5vmax] w-[14vw] h-[54px] flex items-center justify-center">
                    <Image src={"/images/apple.png"} alt="apple" width={100} height={100} className="object-contain" />
                </div>
                <div className="sm:w-[19vmax] w-[44vw] h-10 flex items-center justify-center">
                    <Image src={"/images/microsoft.png"} alt="microsoft" width={500} height={100} className="object-contain" />
                </div>
                <div className="sm:w-[19vmax] w-[44vw] h-10  flex items-center justify-center">
                    <Image src={"/images/slack.png"} alt="slack" width={500} height={100} className="object-contain" />
                </div>
                <div className="sm:w-[19vmax] w-[60vw] h-10  flex items-center justify-center">
                    <Image src={"/images/google.png"} alt="google" width={500} height={100} className="object-contain" />
                </div>
            </div>

        </div>
    )
}

export default Sponser