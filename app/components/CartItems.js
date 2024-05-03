"use client"
import React, { useState } from 'react'
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";


const CartItems = ({ Items }) => {

    const [count, setcount] = useState(1)
    const decreament = () => {
        setcount(count - 1)
        if (count <= 0) {
            alert("Items cannot be less than 0!")
            setcount(0)
        }
    }
    const increament = () => {
        setcount(count + 1)
    }
    return (
        <div className='w-[100%] h-[44vw] px-6 lg:h-[11vw] lg:px-[5vw] flex justify-between items-center  border-b-2'>
            <img src={Items.image} className='lg:h-[8vw] lg:w-[8vw] ' />
            <div className='flex flex-col items-end'>

                <h2 className='product-name mb-1 text-xl font-semibold lg:text-[2rem]'>
                    {Items.title}
                </h2>
                <h4 className='price flex gap-2 justify-center items-center'>
                    <span className='text-md font-semibold'>${Items.offerprice}</span>
                    <s>
                        ${Items.oldprice}
                    </s>
                </h4>
                <span className='counter flex items-center gap-4 mt-3'>
                    <HiMiniMinusSmall
                        onClick={decreament}
                        className='cursor-pointer  text-xl bg-zinc-400 h-[5vw] w-[5vw] rounded-full lg:h-[1.5vw] lg:w-[1.5vw]' />
                    <span className='text-lg w-[2vw] h-[2vw] flex justify-center items-center'>
                        {count}
                    </span>
                    <HiMiniPlusSmall
                        onClick={increament}
                        className='cursor-pointer text-xl  bg-zinc-400 h-[5vw] w-[5vw] rounded-full lg:h-[1.5vw] lg:w-[1.5vw]' />
                </span>
            </div>

        </div>
    )
}

export default CartItems
