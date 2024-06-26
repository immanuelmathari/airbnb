'use client';

import Modal from './Modal';

import React from 'react'
import {useState} from "react";
import useLoginModal from '@/app/hooks/useLoginModal';
import CustomButton from '@/app/components/form/CustomButton';

const LoginModal = () => {
    // an instance of useLoginModal
    const loginModal = useLoginModal();

    // what we want to show inside the modal window
    const content = (
      <>
        <h2 className='mb-6 text-2xl'>Welcome to djangobnb, please log in here</h2>
        <form className='space-y-4'>
        <input type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" placeholder='Your email address'/>
        <input type="password" name="" id="" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" placeholder='Your password'/>
        <div className='p-5 bg-airbnb text-white rounded-xl opacity-80'>Error message</div>
        <CustomButton label="Submit"  onClick={() => {console.log("CLocked")}}/>

        </form>
        </>
    )

  return (
    // <div>LoginModal</div>
    <Modal isOpen={loginModal.isOpen}
    close={loginModal.close}
    label="Log in"
    content = {content} /> 
  )
}

export default LoginModal;
