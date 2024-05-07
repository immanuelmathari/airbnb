import Image from 'next/image'
import React from 'react'

export default function MyReservationsPage() {
    return <main className="max-w-[1500px] mx-auto px-6">
        <div>
            <h1 className='mt-6 mb-2 text-2xl'>My reservations</h1>
            <div className='p-5 mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 shadow-md border border-gray-200 rounded-xl'>
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image src='/airbnb 5.jpg' alt='reservation image' fill className="hover:scale-110 object-cover transition h-full w-full"/>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 space-y-2">
                    <h2 className='mb-4 text-xl'>Property Name</h2>
                    <p><strong>Check In date: </strong> 07/05/24</p>
                    <p><strong>Check In date: </strong> 07/05/24</p>
                    <p><strong>Number of nights: </strong> 30</p>
                    <p><strong>Total price: </strong> Ksh. alot</p>

                    <div className="cursor-pointer py-4 px-6 mt-6 bg-airbnb text-white rounded-xl inline-block">Go To Property</div>

                </div>
            </div>
        </div>
        </main>
}
