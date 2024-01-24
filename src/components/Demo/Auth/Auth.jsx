import React from 'react'
import Modal from '../../../utils/Modal'
import { LiaTimesSolid } from "react-icons/lia"
import { FcGoogle } from "react-icons/fc"
import { MdFacebook } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"

const Auth = () => {
  return (
    <Modal>
      <section className='z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadow'>
        <button className='absolute top-8 right-8 text-2xl hover:opacity-50'>
          <LiaTimesSolid />
        </button>
        <div className='flex flex-col justify-center items-center gap-[3rem]'>
          <>
            <h2 className='text-2xl pt-[5rem]'>Welcome Back</h2>
          </>
        </div>
      </section>
    </Modal>
  )
}

export default Auth