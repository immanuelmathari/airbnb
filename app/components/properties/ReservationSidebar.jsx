import React from 'react'

export default function ReservationSidebar() {
  return (
     <aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl mt-6">
        <h2 className="mb-5 text-2xl">Ksh 20,000 per night</h2>
        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
            <label className="block font-bold text-xs">Guests</label>
            <select className='w-full -ml-1'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>

            </select>
            
        </div>
        <div className='w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark'>Book</div>
            <div className='mb-4 flex justify-between align-center'>
                <p>Ksh. 20,000 x 4 nights</p>
                <p>Ksh 80,000</p>
            </div>
            <div className='mb-4 flex justify-between align-center'>
                <p>Djangobnb fee</p>
                <p>Ksh 4,000</p>
            </div>
            <hr/>
            <div className='mb-4 font-bold flex justify-between align-center'>
                <p>Total</p>
                <p>Ksh 84,000</p>
            </div>
     </aside>
  )
}
