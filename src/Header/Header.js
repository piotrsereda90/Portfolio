import React from 'react';

import styled from 'styled-components';
import Typed from 'react-typed';
import background from '../assets/background.jpg';
import{Link} from 'react-scroll';


const Wrapper = styled.div`
  position:relative;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  margin-top: 15vh;
  height: 90vh;
`
const Info = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  align-items:center;
  z-index:2;
  .type{
    margin-top: 40px;
    font-size: 30px;
    color:red;
    font-family:bold;
    color:#f1f1f1;
  }
  a{
    text-decoration: none;
    padding: 5px 20px;
    color: #f1f1f1;
    text-transform: uppercase;
    margin-top : 30px;
    border-radius: 10px;
    background-color:#ff4400;
    letter-spacing:1px;
    &:hover{
      cursor:pointer;
      background-color:#ff4400;
    }
  }
    `
const H1 = styled.h1`
  width: 90vw;
  text-align:center;
  color:#FAA90B;
  text-transform: uppercase;
  font-weight: bold;
`

const Header = () => {
  return (
    <header id='header'>
      <Wrapper>
        <Info>
          <H1>web development and promotions</H1>
          <Typed className='type'
            strings={['Web Design','Web Development','Build Amazing Web Apps']}
            typeSpeed={40}
            backSpeed={50}
            loop
            >
          </Typed>
          <Link  to='contactMe' smooth={true} offset={-90}  href='#'>contact me</Link>
        </Info>
      </Wrapper>
    </header>
   );
}
export default Header;
