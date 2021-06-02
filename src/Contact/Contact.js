import React,{useState} from 'react';

import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Wrapper = styled.div`
margin-top: 40px;
background-color: #353943;
padding:50px 0;
`
const Title = styled.div`
@media(max-width: 768px){
  padding-left:30px;
  padding-right:30px;
}
h1{
  text-align:center;
  width: 100%;
  color: #F9AB00;
  font-size: 24px;
  text-transform:uppercase;
}
p{
  text-align:center;
  color: #9C9FA5;
  padding-top: 30px;
}
`
const LeftSection = styled.div`
display:flex;
width: 50%;
flex-direction:column;
align-items:flex-end;
padding-right: 20px;
@media(max-width: 768px){
  width: 100%;
  align-items:center;
  padding-right: 0;
}
input{
  width: 70%;
  background:none;
  resize:none;
  border: 0;
  border-bottom: 2px solid #5a5a63;
  margin-top:30px;
  padding-bottom:5px;
  outline:0;
  color: #f9ab00;
  text-transform:uppercase;
}
input:focus{
  border-bottom: 2px solid #F9AB00;
}

`
const RightSection = styled.div`
display:flex;
width: 50%;
flex-direction:column;
padding-left: 20px;
div {
width: 70%;
text-align:right;
@media(max-width:768px){
  text-align:center;
}
}
textarea {
 width: 70%;
 background:none;
 resize:none;
 border: 0;
 border-bottom: 2px solid #5a5a63;
 padding: 25px 5px ;
 outline:0;
 color: #f9ab00;
 text-transform:uppercase;
 height:100%;
 font-size: 16px;
 @media(max-width: 768px){
  padding-top:30px;
  padding-bottom:5px;
 }
}
textarea:focus{
 border-bottom: 2px solid #F9AB00;
}
 @media(max-width: 768px){
  width: 100%;
  padding-left: 0;
  align-items:center;
}
`
const BtnWrapper = styled.div`
width: 50%;
margin-left: auto;
padding-left: 20px;
margin-top: 20px;
@media(max-width: 768px){
width: 100%;
text-align:center;
padding-left: 0px;
margin-top: 40px;
}
button{
  width: 70%;
  height: 40px;
  background:#C53906;
  outline:0;
  border:none;
  text-transform:uppercase;
  font-size: 16px;
  color: #f1f1f1;
  letter-spacing:1px;
  border-radius: 10px;
  &:hover{
    background-color: black;
    transition: .8s;
  }
}
`
const Form = styled.form`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:50px 0;
@media(max-width: 768px){
  flex-direction:column;
}
`
const MessageSuccess = styled.div`
text-align:center;
margin-top: 30px;
color:green;
`
const Contact = () => {

  const[successMessage, setSuccessMessage] = useState('')

  const {register, handleSubmit,formState:{errors}} = useForm();

  const serviceId = 'service_ID';
  const templateId = 'template_ID';
  const userId ='user_L1InkAhmSJQRY1yHaYyg6';
  const regex= /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2})$/;

  const onSubmit = (data,e) => {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email:data.email,
        subject: data.subject,
        description: data.description
      },
      userId
      )
      e.target.reset()
  }

  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs.send(serviceId, templateId, variables, userId)
      .then(() => {
          setSuccessMessage("Form send successfully ! I'll contact you as soon as possible.");
      }).catch(err=> console.error(`Something went wrong ${err}`));
  }

  return (
    <section id='contactMe'>
      <Wrapper>
        <Title>
          <h1>Contact Me</h1>
          <p>Please fill out the form and describe you need. I'll contact you as soon as possible.</p>
        </Title>
        <MessageSuccess>{successMessage}</MessageSuccess>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LeftSection>
            <input type='text'
            placeholder='Name'
            name='name'
              {...register('name',{
                required: 'Please enter your name',
                maxLength:{
                  value: 20,
                  message: 'Please enter a name with fewer than 20 characters'
                }
              })
            }
            />
            <div><span>{errors.name&&errors.name.message}</span></div>
            <input type='text'
            placeholder='Phone'
            name='phone'
            {...register('phone',{
              required: 'Please enter your phone',
              maxLength:{
                value: 20,
                message: 'Please enter a phone with fewer than 20 characters'
              }
            })
          }
            />
            <div><span>{errors.phone&&errors.phone.message}</span></div>
            <input type='text'
            placeholder='Email'
            name='email'
            {...register('email',{
              required: 'Please enter your email',
                pattern:{
                value: regex,
                message: 'Invalid email adress'
                },
              maxLength:{
                value: 20,
                message: 'Please enter a email with fewer than 20 characters'
              }
            })
          }
            />
            <div><span>{errors.email&&errors.email.message}</span></div>
            <input type='text'
            placeholder='Subject'
            name='subject'
            {...register('subject',{
              required: 'OOPS, you forget to add the subject',
              maxLength:{
                value: 20,
                message: 'Please enter a email with fewer than 20 characters'
              }
            })
          }
            />
            <div><span>{errors.subject&&errors.subject.message}</span></div>
          </LeftSection>
          <RightSection>
            <textarea type='text'
            placeholder='Please put your question here'
            name='description'
            {...register('description',{
              required: 'Please describe shortly what you needs...',
              maxLength:{
                value: 20,
                message: 'Please enter a name with fewer than 20 characters'
              }
            })
          }
            ></textarea>
            <div><span>{errors.description&&errors.description.message}</span></div>
          </RightSection>
          <BtnWrapper>
            <button type='submit'>Contact Me</button>
          </BtnWrapper>
        </Form>
      </Wrapper>
    </section>
   );
}
export default Contact;
