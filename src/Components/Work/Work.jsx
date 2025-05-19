import React from 'react';
import workone from '../../assets/work01.png'
import worktwo from '../../assets/work02.png'
import Container from '../Layout/Container';

const Work = () => {
  return (
  <section>
    <Container>
        <div className=''>
      <section>
        <div className='text-center  py-4'>
       <h3 className='w-[121px] text-[#FF7364] leading-[100%] text-[20px] text-center m-auto'>Our Services</h3>
       <p className='w-[304px] text-[#2C2643] text-[46px] leading-[58px] left-[808px] m-auto'>How It Works</p>
     
        </div>
     <div className='flex justify-between'>
           <div>
            <img src= {workone} alt="workone" />
            <h3 className='w-[258px] text-[22px] text-[#2C2643] leading-[34px] top-[80px]'>Plan Product Roadmap</h3>
            <p className='w-[258px] text-[16px] leading-[26px] text-[#645E76]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
            <img src= {worktwo} alt="worktwo" />
        </div>
        <div>
            <img src= {workone} alt="workone" />
            <h3 className='w-[258px] text-[22px] text-[#2C2643] leading-[34px]'>Plan Product Roadmap</h3>
            <p className='w-[258px] text-[16px] leading-[26px] text-[#645E76]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
            <img src= {worktwo} alt="worktwo" />
        </div>
        <div>
            <img src= {workone} alt="workone" />
            <h3 className='w-[258px] text-[22px] text-[#2C2643] leading-[34px]'>Plan Product Roadmap</h3>
            <p className='w-[258px] text-[16px] leading-[26px] text-[#645E76]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
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
