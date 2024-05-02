import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
            </div>
        </div>
    </nav>
  )
}
