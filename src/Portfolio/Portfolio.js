import React from 'react';

import styled from 'styled-components';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import '../../node_modules/react-popupbox/dist/react-popupbox.css';
import store from '../assets/store.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
margin-top: 20px;
`
const Container = styled.div`
display:flex;
flex-direction:column;
width: 100%;
`
const H1 = styled.div`
width: 100%;
h1{
  text-align:center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 50px;
  font-size: 24px;
  text-transform:uppercase;
  color:#f9ab00;
}
`
const ImgWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;

`
const ImgContainer = styled.div`
position:relative;
width: 450px;
height: 200px;
opacity: 1;
background-color: none;
@media(max-width: 768px){
  text-align:center;
}
img{
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 2px solid #f9ab00;
  @media(max-width: 768px){
    width: 80%;
    height: 80%;
  }
}
&:hover{
  opacity: 60%;
  transition: .2s;
  cursor:pointer;
}
&:hover img{
  background-color: #000;
}
&:hover div{
 opacity:1;
 transform:scale(1.2);
}
`
const FontSearch = styled.div`
position:absolute;
top: 50%;
left:50%;
color:#f9ab00;
transform:translate(-50%, -50%);
font-size: 24px;
opacity:0;
transition: .4s;


`
const PopupWrapper = styled.div`
img{
  width: 600px;
  height: auto;
  padding: 20px;
  margin-left: 100px;
  @media(max-width: 823px){
    width:80%;
  }
  @media(max-width: 768px){
    width:80%;
    margin-left: 20px;
  }
}
p{
  margin-bottom: 20px;
}
a {
  padding-top: 10px;
  color:#f9ab00;
  cursor:pointer;
  &:hover{
    color:#ef4035;
  }
}

`
const Portfolio = () => {

  const OpenPopupStore = () => {
    const content =(
      <PopupWrapper>
        <img src={store} alt="Store Giwera Project" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam provident numquam, odit porro excepturi molestias delectus </p>
        <b>GitHub:</b> <a href='https://github.com/piotrsereda90/store' target='blank'> https://github.com/piotrsereda90/store</a>
      </PopupWrapper>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigStore = {
    titleBar:{
      enable:true,
      text: 'Store Project React-Redux',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }
  return (
    <section id='portfolio'>
      <Wrapper>
        <Container>
          <H1>
            <h1>Portfolio</h1>
          </H1>
          <ImgWrapper>
            <ImgContainer onClick={OpenPopupStore}>
              <FontSearch><FontAwesomeIcon icon={faSearchPlus}/></FontSearch>
              <img src={store} alt="store" />
            </ImgContainer>
          </ImgWrapper>
        </Container>
      </Wrapper>
      <PopupboxContainer {...popupboxConfigStore}/>
    </section>
   );
}
export default Portfolio;
