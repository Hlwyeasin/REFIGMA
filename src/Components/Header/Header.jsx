import React from 'react'
import Headerimg from "../../assets/Headerimg1.png"

const Header = ({children}) => {
  return <div className=' bg-cover bg-no-repeat bg-center'
  style={{
      backgroundImage: `url(${Headerimg})`,
  }}
  > {children} </div>;
  
};

export default Header;
