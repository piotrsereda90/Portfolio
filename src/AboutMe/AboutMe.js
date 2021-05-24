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

}
`

const AboutMe = () => {
  return (
    <section>
      <Wrapper>
        <ImgContainer>
          <img src={author} alt="" />
        </ImgContainer>
        <Description>
          <h2>about me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente ex a labore ea, iure culpa fuga laborum minima, minus voluptatum odit cupiditate, ab dolores neque quia placeat expedita natus orem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente ex a labore ea, iure culpa fuga laborum minima, minus voluptatum odit cupiditate, ab dolores neque quia placeat expedita natus orem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente ex a labore ea, iure culpa fuga laborum minima, minus voluptatum odit cupiditate, ab dolores neque quia placeat expedita natus orem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente ex a labore ea, iure culpa fuga laborum minima, minus voluptatum odit cupiditate, ab dolores neque quia placeat expedita natus.</p>
        </Description>
      </Wrapper>
    </section>
   );
}
export default AboutMe;
