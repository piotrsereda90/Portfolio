import React from 'react';

import author from '../assets/ja.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
padding-top: 50px;
@media(max-width: 768px){
  flex-direction: column;
  align-items:center;
}

`
const ImgContainer = styled.div`
width: 50%;
text-align:center;
@media(max-width: 768px){
  width: 60%;
}
img{
  width: 30%;
  padding:5px;
  border-radius: 50%;
  border: 3px solid #FAA90B;
  @media(max-width: 768px){
    width: 70%;
    margin-bottom: 50px;
  }
}
`
const Description = styled.div`
width: 50%;
padding-top:10px;
padding-bottom:10px;
padding-left:30px;
padding-right:300px;
p{
  letter-spacing: 1px;
}


@media(max-width: 768px){
  width: 100%;
  padding:10px 30px;
}
h2{
width: 100%;
color:#FAA90B;
text-transform:uppercase;
margin-bottom: 20px;
@media(max-width: 768px){
  text-align:center;
  margin-bottom: 30px;
}}`

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <Wrapper>
        <ImgContainer>
          <img src={author} alt="" />
        </ImgContainer>
        <Description>
          <h2>about me</h2>
          <p>
            Hello! I am Piotr Sereda and I live in Magdeburg.I graduated in management and economics. I interested in IT and programming.  At first, I treated it as fun. It gave me a lot of pleasure. I started doing different online courses. I focused on getting to know the frontend programming languages well. Now I'm a Front-End Web Developer. I have been developing commercial websites for ten months. I love programming and love to learn something new. The technologies I use are JavaScript and ReactJS. My passion is still improve me skills as web developer.
          </p>
        </Description>
      </Wrapper>
    </section>
   );
}
export default AboutMe;
