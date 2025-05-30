import React from 'react';
import Container from '../Layout/Container';
import laptop from "../../assets/laptop img.png";
import Headerimg from "../../assets/Headerimg1.png"

const Banner = () => {
  return (
 <section className='bg-cover bg-no-repeat bg-center pt-[195px] pb-[558px]  text-white'
     style={{
      backgroundImage: `url(${Headerimg})`,
     }}>
     <div>
      <Container>
        <div className='text-center'>
          <h1 className='w-auto md:w-[560px] font-Secoundariy text-[30px] md:text-[56px] m-auto leading-[40px] md:leading-[64px]'>Get your work done with  Management Tool </h1>
          <p className='md:w-[467px] font-Secoundariy text-lg m-auto leading-8 mt-5'>The world's first project management platform that connects everything</p>
          <div className='relative mt-8'>
            <input type="text" className='md:w-[495px] py-5 pl-6 bg-white rounded-[6px] placeholder:text-gray-500 text-gray-500 outline-0' placeholder='Your business email' />
            <a className='absolute top-[1px] right-[490px] bottom-[1px] font-Secoundariy text-lg font-medium py-[15px] px-7 bg-secoundry rounded-[6px] text-black'>Try for free</a>
          </div>
        </div>

 <div className='absolute mt-[98px] '>
      <img src= {laptop} alt="#laptop" className='w-full' />
    </div>


      </Container>
     
    </div>










    
 </section>
  )
}

export default Banner
