import React from 'react'
import { GoArrowLeft } from "react-icons/go";
// import { FiAlignJustify } from "react-icons/fi";
import { IoCart } from "react-icons/io5";

const Header = () => {
  return (
    <>
    <nav className='w-full h-[10vh] bg-zinc-300 flex items-center justify-between px-4 lg:bg-zinc-300 lg:px-[5vw]'>
        <span className='flex gap-3 items-center justify-between lg:gap-5'>
          <GoArrowLeft className='text-xl lg:text-2xl' />
          <h2 className='lg:text-xl'>
            My Cart
          </h2>
        </span>
        <span className='relative'>
          <IoCart className='text-[6vw] mr-2 lg:text-[1.5vw]' />
          <span className=' total-items-cart absolute top-[-50%] right-[10%]  flex items-center justify-center text-[3.5vw] lg:text-lg lg:top-[-60%]'>
            5
          </span>
        </span>
      </nav>
    </>
  )
}

export default Header
