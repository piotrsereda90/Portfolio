import React from 'react';

import styled from 'styled-components';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import '../../node_modules/react-popupbox/dist/react-popupbox.css';
import store from '../assets/store.png';
import certificate from '../assets/certificate.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
margin-top: 20px;
`
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
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
    width: 70%;
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
  @media(max-width: 823px){
    width:80%;
  }
  @media(max-width: 768px){
    width:80%;
    margin-left: 20px;
  }
}
div{
  display:flex;
  padding-top: 10px;
}
a {
  color:#f9ab00;
  cursor:pointer;
  padding-left: 10px;
  &:hover{
    color:#ef4035;
  }
}
`
const ImagesWrapper  =styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
@media(max-width: 823px){
  flex-direction:column
}

`
const Portfolio = () => {

  const OpenPopupStore = () => {
    const content =(
      <PopupWrapper>
        <img src={store} alt='Store Project React-Redux' />
        <div>
          <b>GitHub:</b> <a href='https://github.com/piotrsereda90/store' target='blank'> https://github.com/piotrsereda90/store</a>
        </div>
      </PopupWrapper>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Store Project React-Redux',
        },
      },
    });
  }
  const popupboxConfigStore = {
    titleBar:{
      enable:true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  const OpenPopupCertificate = () => {
    const content =(
      <PopupWrapper>
        <img src={certificate} alt='Certificate' />
      </PopupWrapper>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Certificate School Of React',
        },
      },
    });
  }
  const popupboxConfigCertificate = {
    titleBar:{
      enable:true,
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
          <ImagesWrapper>
            <ImgWrapper>
              <ImgContainer onClick={OpenPopupStore}>
                <FontSearch><FontAwesomeIcon icon={faSearchPlus}/></FontSearch>
                <img src={store} alt="store" />
              </ImgContainer>
            </ImgWrapper>
            <ImgWrapper>
              <ImgContainer onClick={OpenPopupCertificate}>
                <FontSearch><FontAwesomeIcon icon={faSearchPlus}/></FontSearch>
                <img src={certificate} alt='certificate' />
              </ImgContainer>
            </ImgWrapper>
          </ImagesWrapper>
        </Container>
      </Wrapper>
      <PopupboxContainer {...popupboxConfigStore}/>
      <PopupboxContainer {...popupboxConfigCertificate}/>
    </section>
   );
}
export default Portfolio;
