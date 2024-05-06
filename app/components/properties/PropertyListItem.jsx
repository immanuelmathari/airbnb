import React from 'react'
import Image from 'next/image'

export default function PropertyListItem() {
  return (
    <div className="cursor-pointer">
        <div className="overflow-hidden aspect-square rounded-xl relative">
            <Image fill src='/airbnb 5.jpg' sizes='(max-width: 768px) 768px, (max-width:1200px) : 768px, 768px'
            className='hover:scale-110 object-cover transition h-full w-full' alt='image'
            />
        </div>
        <div className='mt-2'>
            <p className='text-lg font-bold'>Property Name</p>
        </div>
        <div className="mt-2">
            <p className="text-sm">
                <strong>Ksh 20,000</strong> per Night
            </p>
        </div>
    </div>
  )
}