import React from 'react'
import Container from '../Layout/Container';
// import imagees from '../../assets/pricingboxpic.png';
import { IoMdCheckmark } from "react-icons/io";


const Pricing = () => {
    return (
        <div>
  <section className='pt-[140px] pb-[160px]'>
 <Container>

<div className='text-center'>
     <h2 className=' w-[648px] font-primary font-bold text-[46px] text-[#2C2643] m-auto '> Pricing Designed To Fit Your Business </h2>
    <p className='font-primary font-bold text-[24px] text-primary mt-[39px]'>Monthly</p>
  </div>

 <div className='mt-[77px]'>
 <div className='flex justify-between'>

{/*////////////////////////////////////// car01 Start//////////////////////////////// */}

<div className='group hover:bg-primary hover:border-primary pricing-box w-[450px] py-[40px] border border-[#DCE7FE] 
     rounded-[20px] shadow-[1px_4px_4px_ opx_ rgba(0,0,0,0.25)]'> 

     <div className=' flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group hover:bg-white m-auto'>


  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="45" cy="45" r="45" fill="#E8F2FA" />
                                        <g clip-path="url(#clip0_2153_156)">
                                            <path d="M44.7145 44.2682C47.3615 44.2682 49.6534 43.3188 51.5266 41.4456C53.3991 39.5727 54.3488 37.2812 54.3488 34.6338C54.3488 31.9873 53.3994 29.6954 51.5263 27.822C49.6531 25.9494 47.3612 25 44.7145 25C42.0671 25 39.7755 25.9494 37.9026 27.8223C36.0298 29.6951 35.0801 31.987 35.0801 34.6338C35.0801 37.2812 36.0298 39.573 37.9026 41.4459C39.7761 43.3184 42.068 44.2682 44.7145 44.2682ZM39.5604 29.4797C40.9974 28.0426 42.6832 27.3441 44.7145 27.3441C46.7454 27.3441 48.4315 28.0426 49.8689 29.4797C51.3059 30.917 52.0048 32.6031 52.0048 34.6338C52.0048 36.665 51.3059 38.3508 49.8689 39.7882C48.4315 41.2256 46.7454 41.9241 44.7145 41.9241C42.6838 41.9241 40.998 41.2253 39.5604 39.7882C38.123 38.3511 37.4241 36.665 37.4241 34.6338C37.4241 32.6031 38.123 30.917 39.5604 29.4797Z" fill="#2290F5" className='group-hover:bg-primary' />
                                            <path d="M61.5725 55.7582C61.5185 54.9788 61.4092 54.1286 61.2484 53.2308C61.0861 52.3262 60.877 51.4711 60.6268 50.6896C60.368 49.8818 60.0167 49.084 59.5819 48.3196C59.1311 47.5261 58.6013 46.8352 58.0068 46.2667C57.3852 45.6719 56.6241 45.1937 55.744 44.8448C54.8669 44.4979 53.8949 44.3221 52.8552 44.3221C52.4469 44.3221 52.052 44.4896 51.2893 44.9861C50.82 45.2922 50.271 45.6462 49.6582 46.0378C49.1342 46.3716 48.4243 46.6844 47.5476 46.9676C46.6922 47.2444 45.8236 47.3848 44.9661 47.3848C44.1092 47.3848 43.2406 47.2444 42.3846 46.9676C41.5088 46.6847 40.7986 46.3719 40.2756 46.0381C39.6686 45.6502 39.1192 45.2962 38.6429 44.9858C37.8808 44.4893 37.4859 44.3218 37.0776 44.3218C36.0376 44.3218 35.0659 44.4979 34.1891 44.8452C33.3096 45.1934 32.5482 45.6716 31.926 46.267C31.3315 46.8358 30.8017 47.5264 30.3513 48.3196C29.917 49.084 29.5654 49.8815 29.3066 50.6899C29.0567 51.4714 28.8477 52.3262 28.6853 53.2308C28.5242 54.1274 28.4152 54.9779 28.3612 55.7591C28.3081 56.523 28.2812 57.318 28.2812 58.1212C28.2812 60.2092 28.945 61.8996 30.2539 63.1462C31.5466 64.3764 33.2568 65.0001 35.3372 65.0001H54.5974C56.6772 65.0001 58.3874 64.3764 59.6804 63.1462C60.9896 61.9005 61.6534 60.2095 61.6534 58.1209C61.6531 57.3149 61.6259 56.5199 61.5725 55.7582ZM58.0642 61.4479C57.21 62.2609 56.076 62.6561 54.5971 62.6561H35.3372C33.858 62.6561 32.724 62.2609 31.8701 61.4482C31.0324 60.6508 30.6253 59.5622 30.6253 58.1212C30.6253 57.3717 30.65 56.6316 30.6995 55.9212C30.7477 55.2242 30.8462 54.4585 30.9924 53.6449C31.1368 52.8414 31.3205 52.0873 31.539 51.4046C31.7487 50.75 32.0346 50.1018 32.3892 49.4774C32.7277 48.8823 33.1171 48.3718 33.5467 47.9604C33.9487 47.5756 34.4553 47.2606 35.0522 47.0244C35.6042 46.8059 36.2247 46.6863 36.8982 46.6683C36.9803 46.7119 37.1264 46.7952 37.3633 46.9496C37.8451 47.2637 38.4006 47.6219 39.0146 48.0141C39.7067 48.4554 40.5984 48.8539 41.6638 49.1979C42.753 49.55 43.8638 49.7289 44.9664 49.7289C46.069 49.7289 47.1801 49.55 48.2687 49.1982C49.335 48.8536 50.2264 48.4554 50.9195 48.0135C51.5478 47.6119 52.0877 47.264 52.5695 46.9496C52.8064 46.7955 52.9525 46.7119 53.0346 46.6683C53.7085 46.6863 54.3289 46.8059 54.8812 47.0244C55.4779 47.2606 55.9844 47.5759 56.3864 47.9604C56.816 48.3715 57.2055 48.882 57.5439 49.4777C57.8988 50.1018 58.1851 50.7503 58.3944 51.4043C58.6132 52.0879 58.7972 52.8417 58.9413 53.6446C59.0872 54.4597 59.186 55.2257 59.2343 55.9215V55.9221C59.284 56.6298 59.309 57.3695 59.3093 58.1212C59.309 59.5625 58.9019 60.6508 58.0642 61.4479Z" fill="#2290F5" className='group-hover:bg-primary' />

                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2153_156">
                                                <rect width="39.9999" height="40" fill="white  " transform="translate(25 25)" />
                                            </clipPath>
                                        </defs>
     </svg>

     </div>


 <div className='text-center'>
 <p className='font-primary font-bold text-[24px] text-primary group hover:text-secoundry mt-[39px]'>Personal</p>
 <h2 className='font-primary font-bold text-[44px] text-pColor  group hover:text-white leading-[56px] mt-[2px] mb-[14px]'>$10/mth</h2>
 <p className='font-Secoundariy font-medium text-lg  text-[#645E76]'>Annual pricing  <span className='text-primary'>(save 20%)</span></p>
 </div>

     <div className=' my-10 px-15'>
                                   <div>
                                     <div className='flex items-center mb-[26px]'>

                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>

                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Calendar View</p>
                                    </div>

                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'> Custom Templates</p>
                                    </div>

                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>

                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>list view</p>
                                    </div>

                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>

                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>board view</p>
                                    </div>

                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>

                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Assignees & Due Dates</p>
                                    </div>
                                   </div>



     <div>
  <button className='text-white font-Secoundariy text-lg font-medium py-5 px-[105px] bg-primary rounded-[6px] mt-5'>Purchase Now</button>
     </div>




 </div>





 </div>
 {/*/////////////////////////////////////////////////// car01  Card End//////////////// */}





     {/*////////////////////////////////////// car02 Start//////////////////////////////// */}                       
     <div className='group hover:bg-primary hover:border-primary pricing-box w-[450px] py-[40px] border border-[#DCE7FE] rounded-[20px]
  shadow-[1px_4px_4px_ opx_ rgba(0,0,0,0.25)]'>


      <div className=' flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group hover:bg-white m-auto'>


                                   
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="45" cy="45" r="45" fill="#ECE8F9"/>
<g clip-path="url(#clip0_2153_79)">
<path d="M49.3333 39.1499L64.0167 42.0666C65.2 42.3166 66 43.3166 66 44.4999V61.4999C66 62.8833 64.8833 63.9999 63.5 63.9999H48.5C48.9667 63.9999 49.3333 63.6333 49.3333 63.1666V62.3333H63.5C63.95 62.3333 64.3333 61.9666 64.3333 61.4999V44.4999C64.3333 44.1166 64.0667 43.7666 63.6833 43.6832L49.3333 40.8499V39.1499Z" fill="#9472F9"/>
<path d="M58.5007 47.333C58.9673 47.333 59.334 47.6997 59.334 48.1663C59.334 48.633 58.9673 48.9997 58.5007 48.9997H55.1673C54.7007 48.9997 54.334 48.633 54.334 48.1663C54.334 47.6997 54.7007 47.333 55.1673 47.333H58.5007Z" fill="#9472F9"/>
<path d="M58.5007 52.333C58.9673 52.333 59.334 52.6997 59.334 53.1663C59.334 53.633 58.9673 53.9997 58.5007 53.9997H55.1673C54.7007 53.9997 54.334 53.633 54.334 53.1663C54.334 52.6997 54.7007 52.333 55.1673 52.333H58.5007Z" fill="#9472F9"/>
<path d="M58.5007 57.333C58.9673 57.333 59.334 57.6997 59.334 58.1663C59.334 58.633 58.9673 58.9997 58.5007 58.9997H55.1673C54.7007 58.9997 54.334 58.633 54.334 58.1663C54.334 57.6997 54.7007 57.333 55.1673 57.333H58.5007Z" fill="#9472F9"/>
<path d="M49.3327 63.1664C49.3327 63.6331 48.966 63.9998 48.4994 63.9998C48.0327 63.9998 47.666 63.6331 47.666 63.1664V62.3331V39.8331C47.666 39.5831 47.7827 39.3497 47.966 39.1831C48.166 39.0331 48.416 38.9664 48.666 39.0164L49.3327 39.1497V40.8497V62.3331V63.1664Z" fill="#9472F9"/>
<path d="M47.6673 62.333V63.1663C47.6673 63.633 48.034 63.9997 48.5007 63.9997H41.834C42.3007 63.9997 42.6673 63.633 42.6673 63.1663V62.333H47.6673Z" fill="#9472F9"/>
<path d="M43.5007 32.333C43.9673 32.333 44.334 32.6997 44.334 33.1663C44.334 33.633 43.9673 33.9997 43.5007 33.9997H40.1673C39.7007 33.9997 39.334 33.633 39.334 33.1663C39.334 32.6997 39.7007 32.333 40.1673 32.333H43.5007Z" fill="#9472F9"/>
<path d="M44.334 38.1663C44.334 38.633 43.9673 38.9997 43.5007 38.9997H40.1673C39.7007 38.9997 39.334 38.633 39.334 38.1663C39.334 37.6997 39.7007 37.333 40.1673 37.333H43.5007C43.9673 37.333 44.334 37.6997 44.334 38.1663Z" fill="#9472F9"/>
<path d="M43.5007 42.333C43.9673 42.333 44.334 42.6997 44.334 43.1663C44.334 43.633 43.9673 43.9997 43.5007 43.9997H40.1673C39.7007 43.9997 39.334 43.633 39.334 43.1663C39.334 42.6997 39.7007 42.333 40.1673 42.333H43.5007Z" fill="#9472F9"/>
<path d="M43.5007 47.333C43.9673 47.333 44.334 47.6997 44.334 48.1663C44.334 48.633 43.9673 48.9997 43.5007 48.9997H40.1673C39.7007 48.9997 39.334 48.633 39.334 48.1663C39.334 47.6997 39.7007 47.333 40.1673 47.333H43.5007Z" fill="#9472F9"/>
<path d="M36 48.1663C36 48.633 35.6333 48.9997 35.1667 48.9997H31.8333C31.3667 48.9997 31 48.633 31 48.1663C31 47.6997 31.3667 47.333 31.8333 47.333H35.1667C35.6333 47.333 36 47.6997 36 48.1663Z" fill="#9472F9"/>
<path d="M35.1667 32.333C35.6333 32.333 36 32.6997 36 33.1663C36 33.633 35.6333 33.9997 35.1667 33.9997H31.8333C31.3667 33.9997 31 33.633 31 33.1663C31 32.6997 31.3667 32.333 31.8333 32.333H35.1667Z" fill="#9472F9"/>
<path d="M35.1667 37.333C35.6333 37.333 36 37.6997 36 38.1663C36 38.633 35.6333 38.9997 35.1667 38.9997H31.8333C31.3667 38.9997 31 38.633 31 38.1663C31 37.6997 31.3667 37.333 31.8333 37.333H35.1667Z" fill="#9472F9"/>
<path d="M35.1667 42.333C35.6333 42.333 36 42.6997 36 43.1663C36 43.633 35.6333 43.9997 35.1667 43.9997H31.8333C31.3667 43.9997 31 43.633 31 43.1663C31 42.6997 31.3667 42.333 31.8333 42.333H35.1667Z" fill="#9472F9"/>
<path d="M40.9993 54.833C40.9993 54.3663 40.616 53.9997 40.166 53.9997H35.166C34.6993 53.9997 34.3327 54.3663 34.3327 54.833V62.333H32.666V54.833C32.666 53.4497 33.7827 52.333 35.166 52.333H40.166C41.5493 52.333 42.666 53.4497 42.666 54.833V62.333H40.9993V54.833Z" fill="#9472F9"/>
<path d="M34.3327 62.333H40.9993H42.666V63.1663C42.666 63.633 42.2993 63.9997 41.8327 63.9997H33.4993C33.0327 63.9997 32.666 63.633 32.666 63.1663V62.333H34.3327Z" fill="#9472F9"/>
<path d="M28.9167 24.3332L47.2333 27.1166C48.45 27.3166 49.3333 28.3499 49.3333 29.5832V39.1499L48.6667 39.0166C48.4167 38.9666 48.1667 39.0332 47.9667 39.1832C47.7833 39.3499 47.6667 39.5832 47.6667 39.8332V29.5832C47.6667 29.1666 47.3667 28.8166 46.9667 28.7499L28.65 25.9832C28.6 25.9666 28.55 25.9666 28.5 25.9666C28.3 25.9666 28.1167 26.0332 27.9667 26.1666C27.7667 26.3332 27.6667 26.5499 27.6667 26.7999V61.4999C27.6667 61.9666 28.05 62.3332 28.5 62.3332H32.6667V63.1666C32.6667 63.6332 33.0333 63.9999 33.5 63.9999H28.5C27.1167 63.9999 26 62.8832 26 61.4999V26.7999C26 26.0666 26.3167 25.3666 26.8833 24.8999C27.45 24.4166 28.1833 24.2166 28.9167 24.3332Z" fill="#9472F9"/>
</g>
<defs>
<clipPath id="clip0_2153_79">
<rect width="40" height="40" fill="white" transform="translate(26 24)"/>
</clipPath>
</defs>
</svg>




        </div>

 <div className='text-center'>
     <p className='font-primary font-bold text-[24px] text-primary group hover:text-secoundry mt-[39px]'>Team</p>
     <h2 className='font-primary font-bold text-[44px] text-pColor  group hover:text-white leading-[56px] mt-[2px] mb-[14px]'>$10/mth</h2>
    <p className='font-Secoundariy font-medium text-lg text-[#645E76]'>Annual pricing  <span className='text-primary'>(save 20%)</span></p>
     </div>
 <div className=' my-10 px-15'>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Timeline Review</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Custom fields</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Custom Templates</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Task dependencies</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Milestones Manage</p>
                                    </div>
                                    <div>
                                        <button className='text-white font-Secoundariy text-lg font-medium py-5 px-[105px] bg-primary rounded-[6px] mt-5'>Purchase Now</button>
                                    </div>


     </div>


                            </div>
{/*////////////////////////////////////// car02 [END]//////////////////////////////// */}




 
 {/*////////////////////////////////////// car03 Start//////////////////////////////// */}

  <div className='group hover:bg-primary hover:border-primary pricing-box w-[450px] py-[40px] border border-[#DCE7FE] rounded-[20px]
  shadow-[1px_4px_4px_ opx_ rgba(0,0,0,0.25)]'>

     <div className=' flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group hover:bg-white m-auto'>


                                   

<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="45" cy="45" r="45" fill="white"/>
<g clip-path="url(#clip0_2153_125)">
<path d="M45.0004 48.411C43.6827 48.411 42.3945 47.9714 41.2989 47.1478C40.2033 46.3242 39.3493 45.1536 38.845 43.7841C38.3408 42.4145 38.2088 40.9074 38.4659 39.4535C38.723 37.9995 39.3575 36.664 40.2893 35.6157C41.2211 34.5675 42.4082 33.8536 43.7006 33.5644C44.993 33.2752 46.3326 33.4237 47.55 33.991C48.7674 34.5583 49.808 35.519 50.5401 36.7516C51.2721 37.9841 51.6629 39.4333 51.6629 40.9157C51.6596 42.9025 50.9566 44.8068 49.7078 46.2116C48.4591 47.6164 46.7664 48.4073 45.0004 48.411ZM45.0004 36.4157C44.2093 36.4157 43.4359 36.6796 42.7781 37.1741C42.1203 37.6686 41.6076 38.3714 41.3049 39.1936C41.0021 40.0159 40.9229 40.9207 41.0773 41.7936C41.2316 42.6665 41.6126 43.4684 42.172 44.0977C42.7314 44.727 43.4441 45.1556 44.22 45.3293C44.996 45.5029 45.8002 45.4138 46.5311 45.0732C47.262 44.7326 47.8867 44.1558 48.3263 43.4158C48.7658 42.6758 49.0004 41.8057 49.0004 40.9157C49.0004 39.7222 48.579 38.5777 47.8288 37.7337C47.0787 36.8898 46.0613 36.4157 45.0004 36.4157Z" fill="#3639A4"/>
<path d="M58.3375 49.9156C57.2818 49.9156 56.2499 49.5635 55.3721 48.9037C54.4944 48.2439 53.8103 47.306 53.4063 46.2088C53.0023 45.1116 52.8966 43.9043 53.1026 42.7395C53.3085 41.5747 53.8169 40.5048 54.5633 39.665C55.3098 38.8252 56.2608 38.2533 57.2962 38.0216C58.3316 37.7899 59.4048 37.9089 60.3801 38.3633C61.3554 38.8178 62.189 39.5874 62.7755 40.5749C63.362 41.5624 63.675 42.7233 63.675 43.9109C63.675 45.5035 63.1127 47.0308 62.1117 48.1569C61.1107 49.283 59.7531 49.9156 58.3375 49.9156ZM58.3375 40.9156C57.8109 40.9156 57.2961 41.0913 56.8583 41.4204C56.4205 41.7496 56.0792 42.2174 55.8777 42.7647C55.6762 43.312 55.6234 43.9143 55.7262 44.4953C55.8289 45.0763 56.0825 45.61 56.4548 46.0289C56.8272 46.4478 57.3016 46.7331 57.8181 46.8487C58.3345 46.9643 58.8699 46.905 59.3564 46.6782C59.8429 46.4515 60.2587 46.0676 60.5513 45.575C60.8439 45.0825 61 44.5034 61 43.9109C60.9967 43.1177 60.7151 42.3579 60.2165 41.797C59.7179 41.2361 59.0426 40.9193 58.3375 40.9156Z" fill="#3639A4"/>
<path d="M31.6637 49.9156C30.608 49.9156 29.5761 49.5635 28.6983 48.9037C27.8206 48.2439 27.1364 47.306 26.7325 46.2088C26.3285 45.1116 26.2228 43.9043 26.4287 42.7395C26.6347 41.5747 27.143 40.5048 27.8895 39.665C28.636 38.8252 29.587 38.2533 30.6224 38.0216C31.6578 37.7899 32.7309 37.9089 33.7062 38.3633C34.6815 38.8178 35.5151 39.5874 36.1016 40.5749C36.6881 41.5624 37.0012 42.7233 37.0012 43.9109C37.0012 45.5035 36.4388 47.0308 35.4379 48.1569C34.4369 49.283 33.0793 49.9156 31.6637 49.9156ZM31.6637 40.9156C31.1371 40.9156 30.6223 41.0913 30.1845 41.4204C29.7466 41.7496 29.4054 42.2174 29.2038 42.7647C29.0023 43.312 28.9496 43.9143 29.0523 44.4953C29.1551 45.0763 29.4086 45.61 29.781 46.0289C30.1534 46.4478 30.6278 46.7331 31.1442 46.8487C31.6607 46.9643 32.1961 46.905 32.6826 46.6782C33.1691 46.4515 33.5849 46.0676 33.8775 45.575C34.17 45.0825 34.3262 44.5034 34.3262 43.9109C34.3229 43.1177 34.0413 42.3579 33.5427 41.797C33.0441 41.2361 32.3688 40.9193 31.6637 40.9156Z" fill="#3639A4"/>
<path d="M53.0008 60.1391C52.6629 60.1364 52.3384 59.9899 52.0926 59.729C51.8468 59.4681 51.6979 59.1122 51.6758 58.7329C51.5639 57.4449 51.0293 56.25 50.1764 55.3816C49.3236 54.5131 48.2136 54.0334 47.0633 54.036H42.9383C41.7879 54.0334 40.678 54.5131 39.8251 55.3816C38.9723 56.25 38.4377 57.4449 38.3258 58.7329C38.2618 59.1003 38.0783 59.4276 37.8112 59.651C37.5441 59.8743 37.2126 59.9776 36.8814 59.9407C36.5503 59.9038 36.2432 59.7293 36.0203 59.4514C35.7973 59.1734 35.6745 58.812 35.6758 58.4376C35.8676 56.4238 36.7162 54.5615 38.0576 53.2109C39.3991 51.8602 41.138 51.117 42.9383 51.1251H47.0633C48.8752 51.1191 50.6239 51.874 51.9671 53.2421C53.3104 54.6102 54.1514 56.493 54.3258 58.5219C54.3429 58.723 54.3238 58.9259 54.2698 59.1185C54.2157 59.3111 54.1277 59.4894 54.0111 59.643C53.8945 59.7965 53.7515 59.9221 53.5908 60.0121C53.4301 60.1022 53.255 60.155 53.0758 60.1673L53.0008 60.1391Z" fill="#3639A4"/>
<path d="M63.6622 59.1267C63.3243 59.124 62.9998 58.9774 62.754 58.7166C62.5082 58.4557 62.3593 58.0998 62.3372 57.7205C62.2746 56.9845 61.969 56.3018 61.4806 55.8071C60.9923 55.3124 60.3568 55.0417 59.6997 55.0486H56.9497C56.6873 55.0499 56.4265 55.0925 56.1747 55.1752C56.0003 55.285 55.8063 55.3495 55.6069 55.3639C55.4075 55.3784 55.2078 55.3423 55.0224 55.2585C54.837 55.1747 54.6706 55.0452 54.5355 54.8796C54.4004 54.7139 54.3001 54.5163 54.2418 54.3013C54.1835 54.0863 54.1688 53.8593 54.1987 53.6371C54.2286 53.4148 54.3024 53.2029 54.4147 53.0169C54.5269 52.831 54.6748 52.6757 54.8474 52.5625C55.02 52.4492 55.213 52.381 55.4122 52.3626C55.9114 52.1965 56.4291 52.1112 56.9497 52.1095H59.6997C61.0197 52.099 62.2955 52.6444 63.2763 53.6385C64.257 54.6325 64.8718 56.0033 64.9997 57.4814C65.0168 57.6825 64.9977 57.8853 64.9437 58.0779C64.8896 58.2705 64.8016 58.4489 64.685 58.6025C64.5683 58.756 64.4254 58.8815 64.2647 58.9716C64.104 59.0617 63.9289 59.1144 63.7497 59.1267H63.6622Z" fill="#3639A4"/>
<path d="M26.3377 59.1266H26.2502C26.071 59.1143 25.8959 59.0616 25.7352 58.9715C25.5745 58.8814 25.4316 58.7559 25.3149 58.6024C25.1983 58.4488 25.1103 58.2704 25.0562 58.0778C25.0022 57.8853 24.9831 57.6824 25.0002 57.4813C25.128 56.0057 25.7409 54.6368 26.719 53.6431C27.6971 52.6494 28.9698 52.1025 30.2877 52.1094H33.0377C33.5583 52.1112 34.076 52.1964 34.5752 52.3626C34.7744 52.3809 34.9674 52.4492 35.14 52.5624C35.3126 52.6756 35.4605 52.8309 35.5727 53.0169C35.685 53.2028 35.7588 53.4147 35.7887 53.637C35.8186 53.8592 35.8039 54.0862 35.7456 54.3012C35.6873 54.5162 35.5869 54.7138 35.4519 54.8795C35.3168 55.0451 35.1504 55.1746 34.965 55.2584C34.7796 55.3423 34.5799 55.3783 34.3805 55.3638C34.1811 55.3494 33.9871 55.2849 33.8127 55.1751C33.5609 55.0924 33.3 55.0498 33.0377 55.0485H30.2877C29.6306 55.0416 28.9951 55.3123 28.5068 55.807C28.0184 56.3017 27.7128 56.9845 27.6502 57.7204C27.6283 58.0973 27.4812 58.4512 27.238 58.7118C26.9948 58.9723 26.6735 59.1204 26.3377 59.1266Z" fill="#3639A4"/>
</g>
<defs>
<clipPath id="clip0_2153_125">
<rect width="40" height="45" fill="white" transform="translate(25 23)"/>
</clipPath>
</defs>
</svg>




 </div>


                                <div className='text-center'>
                                    <p className='font-primary font-bold text-[24px] text-primary group hover:text-secoundry mt-[39px]'>Enterprise</p>
                                    <h2 className='font-primary font-bold text-[44px] text-pColor  group hover:text-white
                            leading-[56px] mt-[2px] mb-[14px]'>$10/mth</h2>
                                    <p className='font-Secoundariy font-medium text-lg text-[#645E76]'>Annual pricing  <span className='text-primary'>(save 20%)</span></p>
                                </div>
                                <div className=' my-10 px-15'>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Data export & deletion</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Block native integrations</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Custom branding</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Lock custom fields</p>
                                    </div>
                                    <div className='flex items-center mb-[26px]'>
                                        <div className='w-6 h-6 bg-[#F4EBFF] rounded-full flex justify-center items-center'>
                                            <IoMdCheckmark className='text-sm font-bold text-primary' />
                                        </div>
                                        <p className='font-Secoundariy font-medium text-lg text-[#645E76] ml-[22px]'>Priority support</p>
                                    </div>
                                    <div>

                                        <button className='text-white font-Secoundariy text-lg font-medium py-5 px-[105px] bg-primary rounded-[6px] mt-5'>Purchase Now</button>
                                    </div>


                                </div>


                            </div>
 {/*////////////////////////////////////// car03 End//////////////////////////////// */}

 </div>
 </div>




 </Container>
 </section>

        </div>
    )
}

export default Pricing
