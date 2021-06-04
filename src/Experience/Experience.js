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
top: 22%;
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
  top:15%;
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
padding: 10px 30px;
p{
  letter-spacing: 1px;
}
@media(max-width: 768px){
  width:100%;
}
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
    <section id='experience'>
      <Wrapper>
        <h1>experience</h1>
        <TimeLineWrapperRight>
          <Marker/>
          <TimeLineContent>
            <h3>2011-2014</h3>
            <p>
              I was the manager of the MMA organization Soul Fighting Championships. Im cooperated with TVN turbo and the MMA-master program, in which the two best players from among many candidates got the chance to fight at the MMA event which I organized. The second event was a much larger undertaking. Live broadcast on orange sport television. 4 thousand people in the stands. Very good young MMA players giving great fights. I gained a lot of experience in working with people, managing a lot of tasks, which together allowed me to achieve the goal.
            </p>
          </TimeLineContent>
        </TimeLineWrapperRight>
        <TimeLineWrapperLeft>
          <Marker/>
          <TimeLineContent>
            <h3>2015-2019</h3>
            <p>
              At the end of my studies I went to work in Germany. I worked in the warehouse with newly arrived employees. I guided them through the entire work process. Starting with the presentation of the job specifications. By introducing employees to the "Pick by voice" system. Ending with control and allowing them to work independently. I got there experience of working with people. I spent a lot of time learning German.
            </p>
          </TimeLineContent>
        </TimeLineWrapperLeft>
        <TimeLineWrapperRight>
          <Marker/>
          <TimeLineContent>
            <h3>2020-2021</h3>
            <p>I worked 10 months at Inspiration Vibes. I have used and developed them my skills as web developer</p>
          </TimeLineContent>
        </TimeLineWrapperRight>
      </Wrapper>
    </section>
   );
}

export default Experience;
