import React from 'react'
import Container from '../Layout/Container';
import element from "../../assets/Element.png";
import elemegp from "../../assets/ElemGP1.png"

function Element() {
  return (
    <div>
      <Container>
        <div className='flex justify-between'>
            <div>
                
                <img src= {element} alt="elementimg" />
            </div>
            <div>
                <h3 className='w-[553px] font-primary font-bold text-[46px] text-headingColor leading-[58px]'>We provide features for your Business</h3>

               <div className='flex justify-between mt-[64px]'>
                 <div>
                    <img src= {elemegp} alt="elemegp" />
                    <h6 className='font-primary font-bold text-[22px] text-headingColor mt-[10px] mb-[6px]'>Fast and Easy to use</h6>
                    <p className=' font-Secoundariy text-lg text-pColor w-[220px]'>Easily to convert API with just a few clicks</p>
                </div>
                <div>
                    <img src= {elemegp} alt="elemegp" />
                    <h6 className='font-primary font-bold text-[22px] text-headingColor mt-[10px] mb-[6px]'>Fast and Easy to use</h6>
                    <p className=' font-Secoundariy text-lg text-pColor w-[220px]'>Easily to convert API with just a few clicks</p>
                </div>
               </div>
               <div className='flex justify-between mt-[40px]'>
                 <div>
                    <img src= {elemegp} alt="elemegp" />
                    <h6 className='font-primary font-bold text-[22px] text-headingColor mt-[10px] mb-[6px]'>Fast and Easy to use</h6>
                    <p className=' font-Secoundariy text-lg text-pColor w-[220px]'>Easily to convert API with just a few clicks</p>
                </div>
                <div className='mt-[96px]'>
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
