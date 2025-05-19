import React from 'react';
import image from '../../src/assets/customer.png'
import Container from '../Components/Layout/Container';

const Customer = () => {
  return (
    <section>
      <Container>
        <div>
       <section className=' m-[140px] text-center '>
       
        
            <img src= {image} alt="image" />
        
       </section>
      
    </div>
      </Container>
    </section>
  )
}

export default Customer
