import React from 'react';
import image from '../../src/assets/customer.png'
import Container from '../Components/Layout/Container';

const Customer = () => {
  return (
    <section>
      <Container>
        <div>
       <section className=' mt-[40px] md:mt-[30px] md:m-[140px] text-center '>
       
        
            <img src= {image} alt="image" />
        
       </section>
      
    </div>
      </Container>
    </section>
  )
}

export default Customer
