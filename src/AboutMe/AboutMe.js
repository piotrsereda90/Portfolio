import React from 'react';

import author from '../assets/ja.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
padding-top: 50px;
@media(max-width: 768px){
  flex-direction: column;
}

`
const ImgContainer = styled.div`
width: 50%;
text-align:center;
@media(max-width: 768px){
  width: 100%;
}
img{
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
padding:10px 30px;
@media(max-width: 768px){
  width: 100%;
}
h2{
width: 100%;
color:#FAA90B;
text-transform:uppercase;
margin-bottom: 10px;
@media(max-width: 768px){
  text-align:center;
  margin-bottom: 30px;
}

}
`

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <Wrapper>
        <ImgContainer>
          <img src={author} alt="" />
        </ImgContainer>
        <Description>
          <h2>about me</h2>
          <p>Hello! I am Piotr Sereda. I have been developing websites for half years. I'm a Front-End Web Developer. I love programming and love to learn something new. The technologies I use are  ReactJS. My passion is still improve me skills as web developer.</p>
        </Description>
      </Wrapper>
    </section>
   );
}
export default AboutMe;
