import React from 'react';

import styled from 'styled-components';
import Burger from './Burger';
import logo from '../assets/logo.jpg';

const Nav = styled.nav`
display:flex;
position:absolute;
top:0;
width:0;
z-index:2;
width: 100%;
height: 15vh;
padding-left:150px;
background-color:#353943;
justify-content:space-between;
.logo{
  height: 100%;
  img{
  height: 100%;
  }
}
ul{
  display:flex;
  flex-grow:1;
  flex-wrap: nowrap;
  justify-content:space-evenly;
  align-items:center;
  list-style:none;
   margin-left: 300px;
}
li{
  color:#9C9FA5;
  font-size: 21px;
  border-top: 2px solid #353943;
  text-transform:uppercase;
  :hover{
    cursor:pointer;
    border-top: 2px solid yellow;
  }
}
@media (max-width: 1240px){
  padding-right:50px;
  padding-left:0px;
}
@media (max-width: 820px){
  padding-right:0px;
  padding-left:0px;
}

`
const NavBar = () => {

  return (
    <Nav>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <Burger/>
    </Nav>
   );
}
export default NavBar;
