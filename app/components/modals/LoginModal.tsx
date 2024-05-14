'use client';

import Modal from './Modal';

import React from 'react'
import {useState} from "react";
import useLoginModal from '@/app/hooks/useLoginModal';

const LoginModal = () => {
    // an instance of useLoginModal
    const loginModal = useLoginModal();

    // what we want to show inside the modal window
    const content = (
        <h2 className='mb-6 text-2xl'>Welcome to djangobnb, please log in here</h2>
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
