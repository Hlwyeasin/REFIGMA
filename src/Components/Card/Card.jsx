import React from 'react'
import Container from '../Layout/Container'
import cardicon from '../../assets/cardicon.png'

const Card = () => {
  return (
    <div className="md:pt-[336px] pb-[160px]">
      <Container>
        <div className='md:px-[60px]'>
            <div className='md:flex justify-between'> 
            <h3 className='w-auto md:w-[504px] leading-[30px] md:leading-[58px] font-primary font-bold text-[30px] md:text-[46px] text-headingColor text-center md:text-left'>How simple is it to use our platform?</h3>
        <p className=' w-auto md:w-[530px]  font-Secoundariy text-lg text-pColor leading-[32px] text-center md:text-left'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
        </div>
        <div className='md:flex justify-between mt-[116px]'>
            <div className='w-auto md:w-[300px] flex flex-col justify-center text-center mb-[30px] md:mb-0'>
                <img className='w-[110px] m-auto' src= {cardicon} alt="cardicon" />
                <h4 className='font-primary font-bold text-[24px] text-headingColor pt-[26px] pb-3'>Login or sign up to be able use our platform</h4>
                <p className='font-Secoundariy text-lg text-pColor leading-[32px]'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div>
            <div className='w-[300px] flex flex-col justify-center text-center'>
                <img className='w-[110px] m-auto' src= {cardicon} alt="cardicon" />
                <h4 className='font-primary font-bold text-[24px] text-headingColor pt-[26px] pb-3'>Login or sign up to be able use our platform</h4>
                <p className='font-Secoundariy text-lg text-pColor leading-[32px]'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div>
            <div className='w-[300px] flex flex-col justify-center text-center'>
                <img className='w-[110px] m-auto' src= {cardicon} alt="cardicon" />
                <h4 className='font-primary font-bold text-[24px] text-headingColor pt-[26px] pb-3'>Login or sign up to be able use our platform</h4>
                <p className='font-Secoundariy text-lg text-pColor leading-[32px]'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div>
        </div>

        </div>
        
      </Container>
    </div>
  )
}

export default Card
