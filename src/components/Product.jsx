import React from 'react'

const Product = ({name, price, image}) => {
  return (
    <div className='w-full max-w-xs mx-auto'>
      <div className='border border-gray-200 rounded-lg overflow-hidden'>
        <div className='aspect-w-1 aspect-h-1 w-full'>
          <img src={image} className='w-full h-60 px-10 py-4 object-cover' alt="CRYSTAL AGATE PHONE GRIP"/>
        </div>
        <div className='p-4 flex flex-col items-center'>
          <h3 className='text-lg font-semibold text-center mb-2'>{name}</h3>
          <p className='text-xl font-bold text-center mb-4'>${price}</p>
          <button className="rounded-lg text-lg w-40 h-12 bg-[#70b9fb] text-white justify-center transition-all duration-300 ease-in-out hover:bg-[#5aa0e0] shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product