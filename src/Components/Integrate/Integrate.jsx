import React from 'react'
import inTefgretd from '../../assets/Integrate01.png';
import Intergprant from '../../assets/intelegentprandt.png';
import Container from '../Layout/Container';
import inBge   from "../../assets/intreaBG.png";

const Integrate = () => {
  return (
   <section>
    <Container>
      <div className='mt-[50px]'>
      <div className='bg-[#F4FAFA] p-[20px] m-auto'>
     
     <div className='md:flex justify-between m-auto'>
        <div className=''>
            <h2 className='w-[114px] text-[20px] font-medium text-[#FF7364]'>Integrations</h2>
        <h2 className=' w-auto md:w-[587px] text-[#2C2643] text-[30px] md:text-[46px] leading-[58px] font-[Chivo] bottom-[20px] '>Easily integrate with your favorite apps</h2>
        <p className='mb-[40px] mt-[20px] text-[#645E76] text-[18px] leading-[32px] md:w-[533px] left-[255px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>

      <div className='left-[255px] mb-[50px] md:mb-0'>
          <a className=' text-white font-Secoundariy text-lg font-medium py-5 px-12 bg-primary rounded-[6px]'>Get Started</a>
      </div>
        </div>

      <div>
        <img src= {inTefgretd} alt="inttegravt" />
      </div>

     </div>


    </div>
    {/* <img src= {Intergprant} alt="Integratedprand" /> */}
   
   </div>
    </Container>
   </section>
  )
}

export default Integrate
