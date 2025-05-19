import React from 'react'
import Container from '../Layout/Container'
import laptop from "../../assets/laptop img.png"

const Banner = () => {
  return (
 <section className='relative'>
     <div className='pt-[195px] pb-[558px]  text-white'>
      <Container>
        <div className='text-center'>
          <h1 className=' w-[560px] font-Secoundariy text-[56px] m-auto leading-[64px]'>Get your work done with  Management Tool </h1>
          <p className='w-[467px] font-Secoundariy text-lg m-auto leading-8 mt-5'>The world's first project management platform that connects everything</p>
          <div className='relative mt-8'>
            <input type="text" className='w-[495px] py-5 pl-6 bg-white rounded-[6px] placeholder:text-gray-500 text-gray-500 outline-0' placeholder='Your business email' />
            <a className='absolute top-[1px] right-[490px] bottom-[1px] font-Secoundariy text-lg font-medium py-[15px] px-7 bg-secoundry rounded-[6px] text-black'>Try for free</a>
          </div>
        </div>
      </Container>
    </div>
    <div className='absolute bottom-[-261px] left-[15%] w-full'>
      <img src= {laptop} alt="#laptop" />
    </div>
 </section>
  )
}

export default Banner
