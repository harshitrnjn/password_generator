import React from 'react'
import CartItems from './CartItems'
import Products from './Productlist.json'

const CartSection = () => {

  return (

    <div className='relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-[50%] lg:-translate-y-[50%] cart-section lg:w-[85%] 
    lg:h-[65%] overflow-y-scroll border-2 border-zinc-300 lg:rounded-[7px] w-[100%] h-[100%]'  >
      {Products.map((items, id) => (
        <CartItems Items={items} key={id} />
      ))
      }


    </div>

  )
}

export default CartSection
