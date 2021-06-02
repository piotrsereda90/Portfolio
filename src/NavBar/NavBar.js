import React from 'react';

import styled from 'styled-components';
import Burger from './Burger';
import logo from '../assets/logo.jpg';

const Nav = styled.nav`
display:flex;
position:fixed;
top:0;
width:0;
z-index:4;
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
  padding-top:5px;
  border-top: 2px solid #353943;
  text-transform:uppercase;
  transition: .3s;
  :hover{
    cursor:pointer;
    border-top: 2px solid #FAA90B;
  }
  a:focus{
    padding-top:5px;
    border-top: 2px solid #FAA90B;;
  }
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
    <section id='navBar'>
      <Nav>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <Burger/>
      </Nav>
    </section>
   );
}
export default NavBar;
