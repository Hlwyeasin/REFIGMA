import React from 'react'
import Container from '../Layout/Container';
import lastlogo from '../../assets/Last logo.png';
import google from '../../assets/google.png';
import twiter from '../../assets/twiter.png';
import instra from '../../assets/instra.png';
import linkinde from '../../assets/linkind.png';
import send from "../../assets/send.png"

const Footer = () => {
  return (
    <section>
      <Container>

        <div className='  bg-[#f7f7fc75] h-[228px] mb-[30px] ml-[255px]'>

         <div className='flex justify-between'>
           <div>
            <div>
              <img src={lastlogo} alt="lastlogo" />
            </div>

            <div>
              <p className='text-[#645E76] w-[212px] font-Secoundariy text-[16px] leading-[28px] mt-[26px]'>Build a modern and creative website with Innovate.</p>
            </div>
            <div className='flex gap-[6px] mt-[24px]'>

              <img src={google} alt="google" />
              <img src={twiter} alt="twiter" />
              <img src={instra} alt="instra" />
              <img src={linkinde} alt="linkinde" />
            </div>


          </div>

          <div>
            <h2 className='mb-5 font-Secoundariy font-medium text-lg text-[#2C2643]'>Product</h2>
             <ul>
              <li>Landingpages</li>
              <li>Pricing</li>
              <li>Benefits</li>
              <li>Features</li>
             </ul>
          </div>


           <div>
            <h3 className='font-Secoundariy font-medium text-lg text-[#2C2643] mb-5'>Company</h3>
             <ul>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Partners</li>
              <li>Contact</li>
             </ul>
           </div>



           <div>
            <h4 className='text-[#2C2643] mb-5 text-lg font-Secoundariy font-medium leading-8'>Resources</h4>
            <ul>
              <li>Guides and resources</li>
              <li>Blog</li>
              <li>Tools</li>
              <li>Support</li>
            </ul>
           </div>


           <div>
            <h5 className='font-Secoundariy font-medium text-lg leading-8 text-[#2C2643] mb-5'>Get Latest Updates</h5>
            <p className='w-[205px] font-Secoundariy text-[16px] leading-[26px] '>Subscribe to our newsletter and get many interesting things every week</p>

            <div className='mt-8 relative'>
              <input className='w-full placeholder:font-secondary placeholder:leading-[1505 placeholder:text-[#A1A2A3] rounded-[5px]  border border-[#D2D2D2] outline-0 py-[14px] px-[18px] ' placeholder='Your Email Address' type="text" name="" id="" />

               <a className='absolute bottom-[8.5px] right-[8.5px]' href="#">
                <img className='w-9 h-9' src={send} alt="send" />
              </a>
            </div>
             
           </div>

         </div>

          <div className='mt-[86px] w-full rounded-full h-[1px] shadow-md bg-[#D2D2D2] mb-6 '></div>
        <a className='text-subtext font-secondary text-[14px] leading-5  ' href="#">© 2024 Innovate - All Right Reserved</a>
           

        </div>

      </Container>

    </section>
  )
}

export default Footer
