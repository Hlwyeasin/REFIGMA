import React, { useState } from 'react'
import logo from '../../assets/logo (3).png'
import Container from '../Layout/Container';
import { FaListCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";



const Navber = () => {
  const [show, setShow] =useState(false)
  const handleClick = ()=>{
    setShow(true)
    
  }
  return (
    <div className='pt-[32px] absolute top-0 left-0 w-full'>
      <Container>
        <div className='md:flex justify-between items-center'>
          <div className='flex  items-center justify-between '>
            <img src={logo} alt="wsr" />
            <div>
              <FaListCheck onClick={handleClick} className='block md:hidden text-2xl text-white' />
            </div>
          </div>
          <div>
            <ul className=' hidden md:flex gap-x-[50px] font-Secoundariy text-lg font-medium text-white'>
              <li>Home </li>
              <li>Features </li>
              <li>Service </li>
              <li>Pages </li>
              <li>Blog </li>
            </ul>
          </div>
          <div className=' hidden md:flex items-center gap-x-9 '>
            <p className='font-Secoundariy text-lg font-medium text-white'>Login</p>
           <div>
             <a className='font-Secoundariy text-lg font-medium py-5 px-12 bg-secoundry rounded-[6px] inline-block'>Register</a>
           </div>

          </div>
        </div>
      </Container>

    {
      show &&
     <div className='bg-blue-300 w-full h-screen absolute top-0 left-0 flex justify-center items-center z-[999] text-center'>
      
      <div>
        <ImCross onClick={()=>setShow(false)} className='text-2xl text-white' />
      </div>
        <div>
            <ul className=' gap-x-[50px] font-Secoundariy text-lg font-medium text-white'>
              <li className='mt-5'>Home </li>
              <li className='mt-5'>Features </li>
              <li className='mt-5'>Service </li>
              <li className='mt-5'>Pages </li>
              <li>Blog </li>
            </ul>
            <div className=' gap-x-9 '>
            <p className='font-Secoundariy text-lg font-medium text-white mt-5'>Login</p>
           <div className='mt-5'>
             <a className='font-Secoundariy text-lg font-medium py-5 px-12 bg-secoundry rounded-[6px] inline-block'>Register</a>
           </div>

          </div>
          </div>
          


     </div>

     
    }

    </div>
  )
}

export default Navber
