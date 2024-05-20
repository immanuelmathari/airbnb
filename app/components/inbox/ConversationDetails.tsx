'use client';

import React from 'react'
import CustomButton from '../form/CustomButton'

export default function ConversationDetails() {
  return (
    <>
    <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className='w-[80%] py-4 px-6 rounded-xl bg-gray-200'>
            <p className="font-bold text-gray-500">
                John Doe
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ut illum excepturi. Ipsa reiciendis quia quisquam repellendus eos est quo aliquam ratione cumque, fugiat voluptate vel laborum nostrum debitis! Alias!
            </p>
        </div>
        <div className='w-[80%] py-4 px-6 rounded-xl bg-blue-200 ml-[20%]'>
            <p className="font-bold text-gray-500">
                Immanuel Mathari
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ut illum excepturi. Ipsa reiciendis quia quisquam repellendus eos est quo aliquam ratione cumque, fugiat voluptate vel laborum nostrum debitis! Alias!
            </p>
        </div>
    </div>
    <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input type="text" placeholder='Type your message here' className="w-full p-2 bg-gray-200 rounded-xl" />
        <CustomButton label="send" onClick={() => console.log("clickedd")} className=" w-[100px] "/>
    </div>
    </>
  )
}
