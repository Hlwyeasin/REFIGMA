import React from 'react'
import Container from '../Layout/Container';
import element from "../../assets/Element.png";
import elemegp from "../../assets/ElemGP1.png";
import element01 from '../../assets/element01.png';
import element02 from '../../assets/Element02.png';

function Element() {
  return (
    <div>
      <Container>
        <div className='md:flex justify-between'>
            <div>
                
                <img src= {element} alt="elementimg" />
            </div>
            <div>
                <h3 className=' w-auto md:w-[553px] md:text-center font-primary font-bold  text-[30px] md:text-[46px] text-headingColor leading-[58px]'>We provide features for your Business</h3>

               <div className='md:flex justify-between mt-[64px]'>
                 <div>
                    <img src= {elemegp} alt="elemegp" />
                    <h6 className='font-primary font-bold text-[22px] text-headingColor mt-[10px] mb-[6px]'>Fast and Easy to use</h6>
                    <p className=' font-Secoundariy text-lg text-pColor w-[220px]'>Easily to convert API with just a few clicks</p>
                </div>
                <div>
                    <img src= {element01} alt="element01" />
                    <h6 className='font-primary font-bold text-[22px] text-headingColor mt-[10px] mb-[6px]'>Safely Security</h6>
                    <p className=' font-Secoundariy text-lg text-pColor w-[220px]'>All customer data is encrypted</p>
                </div>
               </div>
               <div className='md:flex justify-between mt-[40px]'>
                 <div>
                    <img src= {element02} alt="element02" />
                    <h6 className='font-primary font-bold text-[22px] text-headingColor mt-[10px] mb-[6px]'>Get Organized</h6>
                    <p className=' font-Secoundariy text-lg text-pColor w-[220px]'>From lists to boards, organize work your way. </p>
                </div>
                <div className=' mt-[30px] md:mt-[96px]'>
                     <a className=' text-white font-Secoundariy text-lg font-medium py-5 px-12 bg-primary rounded-[6px]'>Get Started</a>

                </div>
               </div>

            </div>
        </div>
      </Container>
    </div>
  )
}

export default Element
