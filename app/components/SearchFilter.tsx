import React from 'react'

export default function SearchFilter() {
  return (
    <>
    <div className="h-[64px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="w-[250px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className='text-xs font-semibold'>where</p>
                    <p className="text-sm">Wanted Location</p>
                </div>
                <div className="px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className='text-xs font-semibold'>Checkin</p>
                    <p className="text-sm">Add dates</p>
                </div>
                <div className="px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className='text-xs font-semibold'>Checkout</p>
                    <p className="text-sm">Add dates</p>
                </div>
                <div className="px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className='text-xs font-semibold'>who</p>
                    <p className="text-sm">Add guests</p>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="p-4 bg-airbnb rounded-full text-white lg:p-4 hover:bg-airbnb-dark transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
            </div>
        </div>
    </div>
    </>
  )
}
