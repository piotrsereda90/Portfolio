import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin-top: 50px;
background-color:#f4f4f4;
overflow:hidden;

h1{
  text-align:center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 24px;
  text-transform:uppercase;
  color:#f9ab00;
}

`
const Marker = styled.div`
position:absolute;
top: 30%;
left:50%;
transform: translate(-45%, -45%);
width:15px;
height:15px;
border-radius:50%;
border:5px solid black;
background-color:#f9ab00;
z-index:2;
@media(max-width: 1240px){
  left:50%;
  top:20%;
 }
@media(max-width: 1024px){
  left:50%;
  top:20%;
 }
@media(max-width: 768px){
  left:0;
  top:25%;
 }
`
const TimeLineWrapperRight = styled.div`
display:flex;
position:relative;
justify-content:flex-end;
padding-top:20px;
margin-right: 100px;
margin-left: 100px;
@media(max-width: 768px){
  justify-content:flex-start;
  margin-right: 50px;
  margin-left: 50px;
}
@media(max-width: 480px){
  margin-right: 20px;
  margin-left: 20px;
   }
`
const TimeLineWrapperLeft = styled.div`
display:flex;
position:relative;
padding-top:20px;
margin-right: 100px;
margin-left: 100px;
@media(max-width: 768px){
  margin-right: 50px;
  margin-left: 50px;
}
@media(max-width: 480px){
  margin-right: 20px;
  margin-left: 20px;
   }
`
const TimeLineContent = styled.div`
width:50%;
@media(max-width: 768px){
  width:100%;
}
padding: 10px 30px;
&:after{
  position:absolute;
  content:'';
  top:0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: grey;
  padding-top:5px;
  padding-bottom:5px;
  z-index:1;
  @media(max-width: 768px){
   left:0;
  }
}
h3{
  color:#ef4035;
  margin-bottom: 10px;
}
`

const Experience = () => {
  return (
    <section>
      <Wrapper>
        <h1>experience</h1>
        <TimeLineWrapperRight>
          <Marker/>
          <TimeLineContent>
            <h3>2015-2016</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet assumenda similique,   odit magni veniam quod dolore ratione laudantium vel recusandae placeat nesciunt pariatur porro eligendi necessitatibus perferendis quidem. Odit.</p>
          </TimeLineContent>
        </TimeLineWrapperRight>
        <TimeLineWrapperLeft>
          <Marker/>
          <TimeLineContent>
            <h3>2017-2018</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet assumenda similique, odit magni veniam quod dolore ratione laudantium vel recusandae placeat nesciunt pariatur porro eligendi necessitatibus perferendis quidem. Odit.</p>
          </TimeLineContent>
        </TimeLineWrapperLeft>
        <TimeLineWrapperRight>
          <Marker/>
          <TimeLineContent>
            <h3>2019-2020</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet assumenda similique, odit magni veniam quod dolore ratione laudantium vel recusandae placeat nesciunt pariatur porro eligendi necessitatibus perferendis quidem. Odit.</p>
          </TimeLineContent>
        </TimeLineWrapperRight>
        <TimeLineWrapperLeft>
          <Marker/>
          <TimeLineContent>
            <h3>2020-2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet assumenda similique, odit magni veniam quod dolore ratione laudantium vel recusandae placeat nesciunt pariatur porro eligendi necessitatibus perferendis quidem. Odit.</p>
          </TimeLineContent>
        </TimeLineWrapperLeft>
      </Wrapper>
    </section>
   );
}

export default Experience;
