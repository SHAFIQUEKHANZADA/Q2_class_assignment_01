import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className="navbar z-50 2xl:px-[220px] sm:px-[32px] px-[20px] bg-[#043873] text-white fixed sm:py-[14px]  py-0">
            <div className="navbar-start">

                {/* <Link href={"/"} className="  text-xl"><Image src={"/images/main-logo.png"} alt='main-logo' width={100} height={100} className='lg:w-[15vw] w-[22vmax]'/></Link> */}
                <div className='flex items-center sm:gap-5 gap-9'>
                <div className='sm:w-[30px] w-[15px]'>
                <svg width="40" height="40" viewBox="0 0 69 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9_16248)">
                        <path d="M0 4.76544V17.2196C0 21.0128 4.62192 23.0358 7.44642 20.3806L20.927 7.9264C23.8799 5.20798 21.9541 0.40332 17.9099 0.40332H4.42934C1.98999 0.40332 0 2.36311 0 4.76544Z" fill="white" />
                        <path d="M63.8078 0.40332H50.3273C46.3473 0.40332 44.3573 5.20798 47.3102 7.9264L60.7908 20.3806C63.6153 22.9726 68.2372 21.0128 68.2372 17.2196V4.76544C68.2372 2.36311 66.2472 0.40332 63.8078 0.40332Z" fill="white" />
                        <path d="M37.1679 30.8125L60.791 52.6864C63.6155 55.2783 68.2374 53.3186 68.2374 49.5254V36.9448C68.2374 35.7436 67.7239 34.6057 66.8252 33.7838L37.1679 6.2835C35.4347 4.70302 32.8028 4.70302 31.0695 6.2835L1.41225 33.7838C0.513546 34.6057 0 35.7436 0 36.9448V49.5254C0 53.3186 4.62192 55.3416 7.44642 52.6864L31.0695 30.8125C32.8028 29.2321 35.4347 29.2321 37.1679 30.8125Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_9_16248">
                            <rect width="68.2374" height="53.4834" fill="white" transform="translate(0 0.40332)" />
                        </clipPath>
                    </defs>
                </svg>
                </div>
                <h1 className='text-[27px] text-white font-bold'>whitepace</h1>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 text-[1.2vw]">
                    <li>
                        <details>
                            <summary>Products</summary>
                            <ul className="p-2 text-[#043873]">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Solutions</summary>
                            <ul className="p-2 text-[#043873]">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2 text-[#043873]">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Pricing</summary>
                            <ul className="p-2 text-[#043873]">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
                <div className='gap-4 hidden md:flex'>
                    <button className='bg-[#FFE492] text-[#043873] text-[1.1vw] font-[500] px-7 py-3 rounded-md'>Login</button>
                    <button className='flex items-center gap-2 bg-[#4F9CF9] text-[1.1vw] text-white px-4 py-3 rounded-md'>Try Whitepace free <span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="sm:ml-2 text-[50px] lg:hidden">
                        <IoIosMenu className='text-[50px] lg:text-black/35 font-light' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <details>
                                <summary className='text-[#043873]'>Products</summary>
                                <ul className="p-2 text-[#043873]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className='text-[#043873]'>Solutions</summary>
                                <ul className="p-2 text-[#043873]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className='text-[#043873]'>Resources</summary>
                                <ul className="p-2 text-[#043873]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className='text-[#043873]'>Pricing</summary>
                                <ul className="p-2 text-[#043873]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar