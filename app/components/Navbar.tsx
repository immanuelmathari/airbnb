import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchFilter from './SearchFilter';
import UserNav from './UserNav';
import AddProperty from './AddProperty';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
        <div className="max-w-[1500px] mx-auto px-6">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image
                    src="/airbnb.png"
                    alt=""
                    width = {45}
                    height = {38}
                    >

                    </Image>
                </Link>
                <div className='flex hidden md:block space-x-6'>
                  <SearchFilter/>

                </div>
                <div className="flex items-center space-x-6">
                  <AddProperty />
                  <UserNav />
                </div>
            </div>
        </div>
    </nav>
  )
}
