import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

function MultipleItems() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 638,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 3,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };
    return (

        <div className="slider-container sm:px-[32px] px-[20px] mb-20">
            <Slider {...settings}>
                {/* 1 */}
                <div className='mb-10'>
                    <div
                        className={`p-[20px] justify-center sm:h-[34vw] h-fit sm:ml-[1.5vw] sm:py-[4vw] py-[8vw] sm:px-[2.1vw] px-[4vw] sm:w-[29vw] w-[90%] mx-auto rounded-lg bg-[#4F9CF9] hover:shadow-2xl  flex flex-col gap-[2vw] group transform transition-transform duration-300 hover:bg-white`}
                    >
                        <div className="group sm:w-[6.4vw] sm:h-[6.4vw] w-[18vw] h-[18vw]">
                            <div className="transition-colors  w-full h-full text-white group-hover:text-[#043873]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 92.81"
                                    className="w-full h-full fill-current"
                                >
                                    <g>
                                        <path
                                            d="M106.97,92.81H84.89c-8.5,0-15.45-6.95-15.45-15.45c0-31.79-8.12-66.71,30.84-76.68 c17.65-4.51,22.25,14.93,3.48,16.27c-11.45,0.82-13.69,8.22-14.04,19.4h17.71c8.5,0,15.45,6.95,15.45,15.45v25.09 C122.88,85.65,115.72,92.81,106.97,92.81L106.97,92.81z M38.23,92.81H16.15c-8.5,0-15.45-6.95-15.45-15.45 c0-31.79-8.12-66.71,30.84-76.68C49.2-3.84,53.8,15.6,35.02,16.95c-11.45,0.82-13.69,8.22-14.04,19.4H38.7 c8.5,0,15.45,6.95,15.45,15.45v25.09C54.14,85.65,46.98,92.81,38.23,92.81L38.23,92.81z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="sm:text-[1.3vw] text-[4.1vw] group-hover:text-black text-white"> Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                        </div>

                        <div className="border-t-[0.2vw] sm:mt-0 mt-[5vw] border-gray-300 group-hover:border-gray-500"></div>


                        <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-[1.2vw] sm:mt-[2vw] mt-[5vw]">
                            <div className="rounded-full sm:w-[6.1vw] sm:h-[6.1vw] w-[15.4vw] h-[15.4vw]"><Image src={"/images/shafiq.jpeg"} alt="shafiq" className="rounded-full" width={100} height={100} /></div>
                            <div className='sm:mt-0 mt-[4vw]'>
                                <h1 className="text-[#043873] group-hover:text-black sm:text-[1.8vw] text-[5.3vw] font-semibold">Shafique Ur Rehman</h1>
                                <p className="sm:text-[1.3vw] text-[3.8vw] text-white group-hover:text-black">Cloud Native Appled GenAI Engineer</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* 2 */}
                <div className='mb-10'>
                    <div
                        className={`p-[20px] justify-center sm:h-[34vw] h-fit sm:ml-[1.5vw] sm:py-[4vw] py-[8vw] sm:px-[2.1vw] px-[4vw] sm:w-[29vw] w-[90%] mx-auto rounded-lg bg-[#4F9CF9] hover:shadow-2xl  flex flex-col gap-[2vw] group transform transition-transform duration-300 hover:bg-white`}
                    >
                        <div className="group sm:w-[6.4vw] sm:h-[6.4vw] w-[18vw] h-[18vw]">
                            <div className="transition-colors  w-full h-full text-white group-hover:text-[#043873]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 92.81"
                                    className="w-full h-full fill-current"
                                >
                                    <g>
                                        <path
                                            d="M106.97,92.81H84.89c-8.5,0-15.45-6.95-15.45-15.45c0-31.79-8.12-66.71,30.84-76.68 c17.65-4.51,22.25,14.93,3.48,16.27c-11.45,0.82-13.69,8.22-14.04,19.4h17.71c8.5,0,15.45,6.95,15.45,15.45v25.09 C122.88,85.65,115.72,92.81,106.97,92.81L106.97,92.81z M38.23,92.81H16.15c-8.5,0-15.45-6.95-15.45-15.45 c0-31.79-8.12-66.71,30.84-76.68C49.2-3.84,53.8,15.6,35.02,16.95c-11.45,0.82-13.69,8.22-14.04,19.4H38.7 c8.5,0,15.45,6.95,15.45,15.45v25.09C54.14,85.65,46.98,92.81,38.23,92.81L38.23,92.81z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="sm:text-[1.3vw] text-[4.1vw] group-hover:text-black text-white"> Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                        </div>

                        <div className="border-t-[0.2vw] sm:mt-0 mt-[5vw] border-gray-300 group-hover:border-gray-500"></div>


                        <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-[1.2vw] sm:mt-[2vw] mt-[5vw]">
                            <div className="rounded-full sm:w-[6.1vw] sm:h-[6.1vw] w-[15.4vw] h-[15.4vw]"><Image src={"/images/bilal.jpeg"} alt="shafiq" className="rounded-full" width={100} height={100} /></div>
                            <div className='sm:mt-0 mt-[4vw]'>
                                <h1 className="text-[#043873] group-hover:text-black sm:text-[1.8vw] text-[5.3vw] font-semibold">Muhammad Bilal</h1>
                                <p className="sm:text-[1.3vw] text-[3.8vw] text-white group-hover:text-black">Cloud Native Appled GenAI Engineer</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* 3 */}
                <div className='mb-10'>
                    <div
                        className={`p-[20px] justify-center sm:h-[34vw] h-fit sm:ml-[1.5vw] sm:py-[4vw] py-[8vw] sm:px-[2.1vw] px-[4vw] sm:w-[29vw] w-[90%] mx-auto rounded-lg bg-[#4F9CF9] hover:shadow-2xl  flex flex-col gap-[2vw] group transform transition-transform duration-300 hover:bg-white`}
                    >
                        <div className="group sm:w-[6.4vw] sm:h-[6.4vw] w-[18vw] h-[18vw]">
                            <div className="transition-colors  w-full h-full text-white group-hover:text-[#043873]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 92.81"
                                    className="w-full h-full fill-current"
                                >
                                    <g>
                                        <path
                                            d="M106.97,92.81H84.89c-8.5,0-15.45-6.95-15.45-15.45c0-31.79-8.12-66.71,30.84-76.68 c17.65-4.51,22.25,14.93,3.48,16.27c-11.45,0.82-13.69,8.22-14.04,19.4h17.71c8.5,0,15.45,6.95,15.45,15.45v25.09 C122.88,85.65,115.72,92.81,106.97,92.81L106.97,92.81z M38.23,92.81H16.15c-8.5,0-15.45-6.95-15.45-15.45 c0-31.79-8.12-66.71,30.84-76.68C49.2-3.84,53.8,15.6,35.02,16.95c-11.45,0.82-13.69,8.22-14.04,19.4H38.7 c8.5,0,15.45,6.95,15.45,15.45v25.09C54.14,85.65,46.98,92.81,38.23,92.81L38.23,92.81z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="sm:text-[1.3vw] text-[4.1vw] group-hover:text-black text-white"> Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                        </div>

                        <div className="border-t-[0.2vw] sm:mt-0 mt-[5vw] border-gray-300 group-hover:border-gray-500"></div>


                        <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-[1.2vw] sm:mt-[2vw] mt-[5vw]">
                            <div className="rounded-full sm:w-[6.1vw] sm:h-[6.1vw] w-[15.4vw] h-[15.4vw]"><Image src={"/images/asharib.jpeg"} alt="shafiq" className="rounded-full" width={100} height={100} /></div>
                            <div className='sm:mt-0 mt-[4vw]'>
                                <h1 className="text-[#043873] group-hover:text-black sm:text-[1.8vw] text-[5.3vw] font-semibold">Asharib Ali</h1>
                                <p className="sm:text-[1.3vw] text-[3.8vw] text-white group-hover:text-black">Cloud Native Appled GenAI Engineer</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* 4 */}
                <div className='mb-10'>
                    <div
                        className={`p-[20px] justify-center sm:h-[34vw] h-fit sm:ml-[1.5vw] sm:py-[4vw] py-[8vw] sm:px-[2.1vw] px-[4vw] sm:w-[29vw] w-[90%] mx-auto rounded-lg bg-[#4F9CF9] hover:shadow-2xl  flex flex-col gap-[2vw] group transform transition-transform duration-300 hover:bg-white`}
                    >
                        <div className="group sm:w-[6.4vw] sm:h-[6.4vw] w-[18vw] h-[18vw]">
                            <div className="transition-colors  w-full h-full text-white group-hover:text-[#043873]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 92.81"
                                    className="w-full h-full fill-current"
                                >
                                    <g>
                                        <path
                                            d="M106.97,92.81H84.89c-8.5,0-15.45-6.95-15.45-15.45c0-31.79-8.12-66.71,30.84-76.68 c17.65-4.51,22.25,14.93,3.48,16.27c-11.45,0.82-13.69,8.22-14.04,19.4h17.71c8.5,0,15.45,6.95,15.45,15.45v25.09 C122.88,85.65,115.72,92.81,106.97,92.81L106.97,92.81z M38.23,92.81H16.15c-8.5,0-15.45-6.95-15.45-15.45 c0-31.79-8.12-66.71,30.84-76.68C49.2-3.84,53.8,15.6,35.02,16.95c-11.45,0.82-13.69,8.22-14.04,19.4H38.7 c8.5,0,15.45,6.95,15.45,15.45v25.09C54.14,85.65,46.98,92.81,38.23,92.81L38.23,92.81z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="sm:text-[1.3vw] text-[4.1vw] group-hover:text-black text-white"> Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                        </div>

                        <div className="border-t-[0.2vw] sm:mt-0 mt-[5vw] border-gray-300 group-hover:border-gray-500"></div>


                        <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-[1.2vw] sm:mt-[2vw] mt-[5vw]">
                            <div className="rounded-full sm:w-[6.1vw] sm:h-[6.1vw] w-[15.4vw] h-[15.4vw]"><Image src={"/images/daniyal.jpeg"} alt="shafiq" className="rounded-full" width={100} height={100} /></div>
                            <div className='sm:mt-0 mt-[4vw]'>
                                <h1 className="text-[#043873] group-hover:text-black sm:text-[1.8vw] text-[5.3vw] font-semibold">Daniyal Nagori</h1>
                                <p className="sm:text-[1.3vw] text-[3.8vw] text-white group-hover:text-black">Cloud Native Appled GenAI Engineer</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* 5 */}
                <div className='mb-10'>
                    <div
                        className={`p-[20px] justify-center sm:h-[34vw] h-fit sm:ml-[1.5vw] sm:py-[4vw] py-[8vw] sm:px-[2.1vw] px-[4vw] sm:w-[29vw] w-[90%] mx-auto rounded-lg bg-[#4F9CF9] hover:shadow-2xl  flex flex-col gap-[2vw] group transform transition-transform duration-300 hover:bg-white`}
                    >
                        <div className="group sm:w-[6.4vw] sm:h-[6.4vw] w-[18vw] h-[18vw]">
                            <div className="transition-colors  w-full h-full text-white group-hover:text-[#043873]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 92.81"
                                    className="w-full h-full fill-current"
                                >
                                    <g>
                                        <path
                                            d="M106.97,92.81H84.89c-8.5,0-15.45-6.95-15.45-15.45c0-31.79-8.12-66.71,30.84-76.68 c17.65-4.51,22.25,14.93,3.48,16.27c-11.45,0.82-13.69,8.22-14.04,19.4h17.71c8.5,0,15.45,6.95,15.45,15.45v25.09 C122.88,85.65,115.72,92.81,106.97,92.81L106.97,92.81z M38.23,92.81H16.15c-8.5,0-15.45-6.95-15.45-15.45 c0-31.79-8.12-66.71,30.84-76.68C49.2-3.84,53.8,15.6,35.02,16.95c-11.45,0.82-13.69,8.22-14.04,19.4H38.7 c8.5,0,15.45,6.95,15.45,15.45v25.09C54.14,85.65,46.98,92.81,38.23,92.81L38.23,92.81z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="sm:text-[1.3vw] text-[4.1vw] group-hover:text-black text-white"> Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                        </div>

                        <div className="border-t-[0.2vw] sm:mt-0 mt-[5vw] border-gray-300 group-hover:border-gray-500"></div>


                        <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-[1.2vw] sm:mt-[2vw] mt-[5vw]">
                            <div className="rounded-full sm:w-[6.1vw] sm:h-[6.1vw] w-[15.4vw] h-[15.4vw]"><Image src={"/images/zayan.jpeg"} alt="shafiq" className="rounded-full" width={100} height={100} /></div>
                            <div className='sm:mt-0 mt-[4vw]'>
                                <h1 className="text-[#043873] group-hover:text-black sm:text-[1.8vw] text-[5.3vw] font-semibold">Zayan Ahmed</h1>
                                <p className="sm:text-[1.3vw] text-[3.8vw] text-white group-hover:text-black">Cloud Native Appled GenAI Engineer</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* 6 */}
                <div className='mb-10'>
                    <div
                        className={`p-[20px] justify-center sm:h-[34vw] h-fit sm:ml-[1.5vw] sm:py-[4vw] py-[8vw] sm:px-[2.1vw] px-[4vw] sm:w-[29vw] w-[90%] mx-auto rounded-lg bg-[#4F9CF9] hover:shadow-2xl  flex flex-col gap-[2vw] group transform transition-transform duration-300 hover:bg-white`}
                    >
                        <div className="group sm:w-[6.4vw] sm:h-[6.4vw] w-[18vw] h-[18vw]">
                            <div className="transition-colors  w-full h-full text-white group-hover:text-[#043873]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 92.81"
                                    className="w-full h-full fill-current"
                                >
                                    <g>
                                        <path
                                            d="M106.97,92.81H84.89c-8.5,0-15.45-6.95-15.45-15.45c0-31.79-8.12-66.71,30.84-76.68 c17.65-4.51,22.25,14.93,3.48,16.27c-11.45,0.82-13.69,8.22-14.04,19.4h17.71c8.5,0,15.45,6.95,15.45,15.45v25.09 C122.88,85.65,115.72,92.81,106.97,92.81L106.97,92.81z M38.23,92.81H16.15c-8.5,0-15.45-6.95-15.45-15.45 c0-31.79-8.12-66.71,30.84-76.68C49.2-3.84,53.8,15.6,35.02,16.95c-11.45,0.82-13.69,8.22-14.04,19.4H38.7 c8.5,0,15.45,6.95,15.45,15.45v25.09C54.14,85.65,46.98,92.81,38.23,92.81L38.23,92.81z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="sm:text-[1.3vw] text-[4.1vw] group-hover:text-black text-white"> Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>

                        </div>

                        <div className="border-t-[0.2vw] sm:mt-0 mt-[5vw] border-gray-300 group-hover:border-gray-500"></div>


                        <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-[1.2vw] sm:mt-[2vw] mt-[5vw]">
                            <div className="rounded-full sm:w-[6.1vw] sm:h-[6.1vw] w-[15.4vw] h-[15.4vw]"><Image src={"/images/Avater.png"} alt="shafiq" className="rounded-full" width={100} height={100} /></div>
                            <div className='sm:mt-0 mt-[4vw]'>
                                <h1 className="text-[#043873] group-hover:text-black sm:text-[1.8vw] text-[5.3vw] font-semibold">Ali Aftab</h1>
                                <p className="sm:text-[1.3vw] text-[3.8vw] text-white group-hover:text-black">Cloud Native Appled GenAI Engineer</p>
                            </div>
                        </div>

                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default MultipleItems;
