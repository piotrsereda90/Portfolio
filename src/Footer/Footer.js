import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
background-color: #000;
padding-left: 100px;
padding-right: 700px;
padding-top: 50px;
padding-bottom: 50px;
color: #aaa;
@media(max-width: 823px){
  flex-direction:column;
  padding-right: 0px;
  padding-left: 0px;
}
`
const MyData = styled.div`
display:flex;
flex-wrap:wrap;
letter-spacing: 1px;
@media(max-width: 823px){
  text-align:center;
}
a{
  display:block;
  width: 100%;
  text-decoration:none;
  padding: 5px 30px;
  color: #aaa;
  @media(max-width: 823px){
    padding: 10px 30px;
  }
}
p{
  padding: 5px 30px;
  width: 100%;
  @media(max-width: 823px){
    padding: 10px 30px;
  }
}

`
const Nav = styled.div`
display:flex;
flex-wrap:wrap;
@media(max-width: 823px){
  text-align:center;
}
a{
  display:block;
  text-decoration:none;
  width: 130px;
  color: #aaa;
  padding: 5px 30px;
  @media(max-width: 823px){
    width: 100%;
    padding: 10px 30px;
  }
}
`

const Footer = () => {
  return (
    <section id='footer'>
      <Container>
        <Nav>
          <a href="">Home</a>
          <a href="">About me</a>
          <a href="">Experience</a>
          <a href="">Portfolio</a>
          <a href="">Contacts</a>
        </Nav>
        <MyData>
          <a href="#">+48501229627</a>
          <a href="#">+4915166093511</a>
          <p>piotrsereda90@gmail.com</p>
          <p>{new Date().getFullYear()}&nbsp; Junior | All Rights Reserved</p>
        </MyData>
      </Container>
    </section>
   );
}
export default Footer;
