'use client';

import Modal from './Modal';

import React from 'react'
import {useState} from "react";
import CustomButton from '@/app/components/form/CustomButton';
import useSignUpModal from '@/app/hooks/useSignupModal';

const SignupModal = () => {
    // an instance of useSignupModal
    const signupModal = useSignUpModal();

    // what we want to show inside the modal window
    const content = (
      <>
        <h2 className='mb-6 text-2xl'>Welcome to djangobnb, please log in here</h2>
        <form className='space-y-4'>
        <input type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" placeholder='Your email address'/>
        <input type="password" name="" id="" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" placeholder='Your password'/>
        <input type="password" name="" id="" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" placeholder='Repeat password'/>
        <div className='p-5 bg-airbnb text-white rounded-xl opacity-80'>Error message</div>
        <CustomButton label="Submit"  onClick={() => {console.log("CLocked")}}/>

        </form>
        </>
    )

  return (
    // <div>SignupModal</div>
    <Modal isOpen={signupModal.isOpen}
    close={signupModal.close}
    label="Log in"
    content = {content} /> 
  )
}

export default SignupModal;
