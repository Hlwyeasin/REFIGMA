import React from 'react'
import Container from '../Layout/Container';
import { AiFillStar } from "react-icons/ai";
import starimge from '../../assets/stargroup.png';

const About = () => {
  return (
    <section className='py-[200px] bg-[#F4FAFA]'>
      <Container>
        <div className=' flex'>
          <div>
            <div>
              <h2 className='w-[594px] font-primary font-bold text-[46px] text-pColor'> What they are talking about us?</h2>
              <p className='w-[400px]  font-Secoundariy  text-lg text-[#645E76] mt-[20px] mb-[40px] leading-[32px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
              <div>
                <a className=' text-white font-Secoundariy text-lg font-medium py-5 px-12 bg-primary rounded-[6px]'>Get Started</a>
              </div>
            </div>
            <div className="flex items-center  mt-[80px]">
              <div className='relative '>
                <div className='w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                <div className=' absolute top-0 left-[30px] w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                <div className=' absolute top-0 left-[60px] w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                <div className=' absolute top-0 left-[90px] w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                <div className=' absolute top-0 left-[120px] w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>

              </div>
              <div className='ml-[150px]'>
                <div className='flex items-center'>
                  <h4 className='w-[42px] text-[#52C5B6] text-[24px] font-primary leading-[36px]'>4.5</h4>
                  <span>|</span>

                  <div className='flex'>
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />

                  </div>

                </div>
                <p className='w-[154px] text-[18px] text-[#645E76] leading[32px]'>280k Total Review</p>
              </div>
            </div>



          </div>

          <div className=' w-[687px] py-10px bg-[#F7F7FC]'>

            <div className='w-[124px] h-[124px] rounded-full bg-[#C4C4C4]'>
         </div>
         <p className='w-[550px] text-[22px] font-Secoundariy text-[#6C6E81] leading-[44px] mb-[37px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p> 

         <div className='flex justify-between'>
          <div>
            <h2 className='w-128px text-[24px] leading-[36px] text-[#30344E] font-primary font-bold'>Robert Fox</h2>
            <p className='w-[120px] text-[16px] leading-[26px] font-Secoundariy  text-[#30344E]'>Digital Marketer</p>
          </div>
          <div>
            <img src= {starimge} alt="starimge" />
          </div>

         </div>

          </div>


        </div>






      </Container>

    </section>
  )
}

export default About
