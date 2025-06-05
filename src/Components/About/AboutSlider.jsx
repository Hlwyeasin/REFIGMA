import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import starimge from '../../assets/stargroup.png';
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";



   

const AboutSlider = () => {
  function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div
      
      className='w-[58px] h-[58px] rounded-full bg-blue-500  absolute top-[60%] left-[-20px]'
      onClick={onClick}
    />
  );
}

                  

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
   className='w-[58px] h-[58px] rounded-full bg-blue-100 absolute top-[60%] right-[-30px] z-[9999]'
     
      onClick={onClick}
    />
  );
}

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    Arrows: true,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />
   
    
 

  };


  return (
    <div className='W-full max-w-[650px] '>
      <Slider {...settings}>

        <div className='relative mt-[137px]'>

        <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] border-[10px] border-[#F7F7FC]'>
         </div>



         <div className=' w-[687px] px-[60px] pt-[64px] pb-[50px] bg-white shadow-[0_5px_5px_0px_rgba(0,0,0,0.25)] rounded-[20px]'>


    <p className='w-[550px] text-[22px] font-Secoundariy text-[#6C6E81] leading-[44px] mb-[37px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <div className='flex justify-between'>
              <div>
                <h2 className='w-128px text-[24px] leading-[36px] text-[#30344E] font-primary font-bold'>Robert Fox</h2>
                <p className='w-[120px] text-[16px] leading-[26px] font-Secoundariy  text-[#30344E]'>Digital Marketer</p>
              </div>

              <div>
                <img src={starimge} alt="starimge" />
              </div>

            </div>

          </div>

        </div>

        <div className='relative mt-[137px]'>

          <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] border-[10px] border-[#F7F7FC]'>
          </div>



          <div className=' w-[687px] px-[60px] pt-[64px] pb-[50px] bg-white shadow-[0_5px_5px_0px_rgba(0,0,0,0.25)] rounded-[20px]'>


            <p className='w-[550px] text-[22px] font-Secoundariy text-[#6C6E81] leading-[44px] mb-[37px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <div className='flex justify-between'>
              <div>
                <h2 className='w-128px text-[24px] leading-[36px] text-[#30344E] font-primary font-bold'>Robert Fox</h2>
                <p className='w-[120px] text-[16px] leading-[26px] font-Secoundariy  text-[#30344E]'>Digital Marketer</p>
              </div>
              <div>
                <img src={starimge} alt="starimge" />
              </div>

            </div>

          </div>

        </div>



        <div className='relative mt-[137px]'>

          <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] border-[10px] border-[#F7F7FC]'>
          </div>



          <div className=' w-[687px] px-[60px] pt-[64px] pb-[50px] bg-white shadow-[0_5px_5px_0px_rgba(0,0,0,0.25)] rounded-[20px]'>


            <p className='w-[550px] text-[22px] font-Secoundariy text-[#6C6E81] leading-[44px] mb-[37px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <div className='flex justify-between'>
              <div>
                <h2 className='w-128px text-[24px] leading-[36px] text-[#30344E] font-primary font-bold'>Robert Fox</h2>
                <p className='w-[120px] text-[16px] leading-[26px] font-Secoundariy  text-[#30344E]'>Digital Marketer</p>
              </div>
              <div>
                <img src={starimge} alt="starimge" />
              </div>

            </div>

          </div>

        </div>


      </Slider>
    </div>

  )
}

export default AboutSlider;
