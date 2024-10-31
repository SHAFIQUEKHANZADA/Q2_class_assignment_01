import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"


const Favorite = () => {
    return (
        <div className='sm:px-[32px] flex sm:gap-0 gap-14 sm:flex-row flex-col xl:[220px] px-[20px] lg:py-[134px] py-[90px]  bg-[#043873]  mt-32'
            style={{
                backgroundImage: `url('/svg/Element.svg')`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'calc(60vw + 50%)',
            }}>

            <div className="flex-1 justify-center mx-auto items-center text-cente">
                <div className="lg:w-[36vmax] sm:h-[20vmax] sm:w-[42vw] w-[80vw]">
                    <Image
                        src="/svg/Apps.png"
                        alt="banner-image"
                        layout="responsive"
                        width={670}
                        height={400}
                        className="object-cover"
                    />
                </div>
            </div>

            <div className='flex-1 sm:text-start sm:justify-start  items-center text-center'>
                <h1 className='text-white text-[8vw] sm:text-[40px] lg:text-[60px] font-bold sm:leading-[64px]'>Work with Your Favorite Apps Using whitepace</h1>

                <p className='text-white lg:text-[18px] text-[18px] font-[300]  mt-6'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                </p>
                <div className='flex sm:justify-start justify-center'>
                    <button className='flex  items-center mt-12 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-4 rounded-md'>Let&apos;s Go <span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                </div>
            </div>

        </div>
    )
}

export default Favorite