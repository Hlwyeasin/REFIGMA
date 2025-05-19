import React from 'react'
import logo from '../../assets/logo (3).png'
import Container from '../Layout/Container'


const Navber = () => {
  return (
    <div className='pt-[32px'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <img src={logo} alt="wsr" />
          </div>
          <div>
            <ul className='flex gap-x-[50px] font-Secoundariy text-lg font-medium text-white'>
              <li>Home </li>
              <li>Features </li>
              <li>Service </li>
              <li>Pages </li>
              <li>Blog </li>
            </ul>
          </div>
          <div className='flex items-center gap-x-9 '>
            <p className='font-Secoundariy text-lg font-medium text-white'>Login</p>
            <a className='font-Secoundariy text-lg font-medium py-5 px-12 bg-secoundry rounded-[6px]'>Register</a>

          </div>
        </div>
      </Container>


    </div>
  )
}

export default Navber
