import React from 'react';

import styled from 'styled-components';
import {Link} from 'react-scroll';

const Ul = styled.ul`
ul{
  display:flex;
  flex-wrap: nowrap;
  list-style:none;
  li{
    padding: 18px 10px;
  }
}
@media (max-width: 1024px){
    flex-direction:column;
    background-color:#353943;
    position:fixed;
    top:0;
    right:0;
    width: 300px;
    height:100vh;
    padding-top: 70px;
    transition: transform .3s ease;
    transform: ${({open}) => open? 'translateX(0)': 'translateX(100%)'};
    li{
      padding: 25px 0;
    }
  }
@media (max-width: 820px){
  flex-direction:column;
  background-color:#353943;
  position:fixed;
  top:0;
  right:0;
  width: 300px;
  height:100vh;
  padding-top: 70px;
  transition: transform .3s ease;
  transform: ${({open}) => open? 'translateX(0)': 'translateX(100%)'};
  li{
    padding: 20px 0;
  }
}
`
const style={
  textDecoration:'none',
  color:'#f4f4f4',
}


const RightNav = ({open}) => {
  return (
    <Ul open={open}>
      <li><Link style={style} smooth={true} to='navBar' offset={-100} href='#'>home</Link></li>
      <li><Link style={style} smooth={true} to='aboutMe' offset={-110} href='#'>about me</Link></li>
      <li><Link style={style} smooth={true} to='experience' offset={-120} href='#'>experience</Link></li>
      <li><Link style={style} smooth={true} to='portfolio' offset={-130} href='#'>portfolio</Link></li>
      <li><Link style={style} smooth={true} to='contactMe' offset={-110} href='#'>contact</Link></li>
    </Ul>
   );
}

export default RightNav;
