import React from 'react'
import Container from '../Layout/Container';
import { AiFillStar } from "react-icons/ai";
import starimge from '../../assets/stargroup.png';
import AboutSlider from './AboutSlider';

const About = () => {
  return (
    <section className='py-[200px] bg-[#F4FAFA]'>
      <Container>
        <div className=' md:flex'>
          <div>
            <div>
              <h2 className='w-[390px] md:w-[594px] font-primary font-bold text-[46px] text-pColor'> What they are talking about us?</h2>
              <p className='w-[350px] md:w-[400px]  font-Secoundariy  text-lg text-[#645E76] mt-[20px] mb-[40px] leading-[32px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
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
                <p className='md:w-[154px] text-[18px] text-[#645E76] leading[32px]'>280k Total Review</p>
              </div>
            </div>



          </div>

          

          <div>
            <AboutSlider></AboutSlider>
          </div>


        </div>






      </Container>

    </section>
  )
}

export default About
