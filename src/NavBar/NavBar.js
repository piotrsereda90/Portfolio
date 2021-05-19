import React from 'react';

import styled from 'styled-components';
import Burger from './Burger';
import logo from '../assets/logo.jpg';

const Nav = styled.nav`
display:flex;
width: 100%;
height: 15vh;
border-bottom: 2px solid #f1f1f1;
padding-right:150px;
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
  flex-wrap: nowrap;
  align-items:center;
  list-style:none;
  margin-left: auto;
}
li{
  color:#9C9FA5;
  padding:5px 18px;
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
