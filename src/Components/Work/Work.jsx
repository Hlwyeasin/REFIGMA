import React from 'react';
import workone from '../../assets/work01.png'
import worktwo from '../../assets/work02.png'
import Container from '../Layout/Container';
import humanimg from '../../assets/human.png';
import monitorimg from '../../assets/monitor.png';
import perfectimg from '../../assets/perfect.png';

const Work = () => {
  return (
  <section>
    <Container>
        <div className='mt-[140px]'>
      <section>
        <div className='text-center  py-4'>
       <h3 className='w-[121px] text-[#FF7364] leading-[100%] text-[20px] text-center m-auto'>Our Services</h3>
       <p className=' mb-[80px] w-[304px] text-[#2C2643] text-[46px] leading-[58px] left-[808px] m-auto'>How It Works</p>
     
        </div>
     <div className='md:flex justify-between'>
           <div>
            <img src= {workone} alt="workone" />
            <h3 className='mt-[26px] w-[258px] text-[22px] text-[#2C2643] leading-[34px] top-[80px]'>Plan Product Roadmap</h3>
            <p className='mb-[26px] w-[258px] text-[16px] leading-[26px] text-[#645E76]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
            <img src= {worktwo} alt="worktwo" />
        </div>
           <div>
            <img src= {humanimg} alt="humanimg" />
            <h3 className='mt-[26px] w-[258px] text-[22px] text-[#2C2643] leading-[34px] top-[80px]'>Assign Any Work</h3>
            <p className='mb-[26px] w-[258px] text-[16px] leading-[26px] text-[#645E76]'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
            <img src= {worktwo} alt="worktwo" />
        </div>
           <div>
            <img src= {monitorimg} alt="monitorimg" />
            <h3 className='mt-[26px] w-[258px] text-[22px] text-[#2C2643] leading-[34px] top-[80px]'>Monitor Work Progress</h3>
            <p className='mb-[26px] w-[258px] text-[16px] leading-[26px] text-[#645E76]'>Monitor Work ProgressKeeping records and monitoring activities helps people see progress </p>
            <img src= {worktwo} alt="worktwo" />
        </div>
           <div>
            <img src= {perfectimg} alt="perfectimg" />
            <h3 className='mt-[26px] w-[258px] text-[22px] text-[#2C2643] leading-[34px] top-[80px]'>Pertect Intergration</h3>
            <p className='mb-[26px] w-[258px] text-[16px] leading-[26px] text-[#645E76]'>App integration, in a general sense, is the process of resources or capabilities from one application </p>
            <img src= {worktwo} alt="worktwo" />
        </div>



     


     </div>
      </section>
    </div>
    </Container>
  </section>
  )
}

export default Work
