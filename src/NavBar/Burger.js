import React,{useState} from 'react';

import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
flex-flow:column nowrap;
display:none;
width:32px;
height:32px;
position:fixed;
top:15px;
right:20px;
justify-content:space-around;
z-index: 20;

@media(max-width:820px){
display:flex;
}
@media(max-width:1024px){
  display:flex;
  }


div{
  width: 32px;
  height:4px;
  background-color: ${({open})=>open? '#999': '#f1f1f1'};
  border-radius: 10px;
  transform-origin:1px;
  transition: all 0.3s linear;


  &:nth-child(1){
    transform:${({open}) => open? `rotate(45deg)`:`rotate(0)`};
  }
  &:nth-child(2){
      transform:${({open}) => open ? `translateX(100%)`:`translateX(0)`};
      opacity: ${({open}) => open ? 0: 1}
    }
    &:nth-child(3){
      transform:${({open}) => open ? `rotate(-45deg)`:`rotate(0)`};
    }
}
`
const Burger = () => {

  const [open, setOpen] = useState(false)
  return ( 
    <>
      <StyledBurger open={open} onClick={()=>setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
      <RightNav open={open}/>
    </>
   );
}
 
export default Burger;