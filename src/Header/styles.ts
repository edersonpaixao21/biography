import styled from 'styled-components';

export const Container = styled.div `
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 div {
    text-align: center;
    width: 300px;
    margin: 60px auto;
    background-color: #F8F9FE;
 } 

 img.avatar {
     border-radius: 50%;
     width: 130px;
     height: 130px;
     padding: 3.7px;
     border: #364FC7 solid 4px;
 }

 h1 {
     font-family: 'roboto', sans-serif;
     font-weight: 500;
     font-size: 32px;
     color: #00082F;
     margin-top: 10px;
     margin-bottom: 8px;
 }

 p {
     font-family: 'roboto mono', sans-serif;
     font-weight: 400;
     font-size: 18px;
     color: #737375;
     margin-bottom: 35px;
     opacity: 0.80px;
 }

 ul {
     list-style: none;
     margin: 48px 0;
 }

 ul li a {
     height: 53px;
     display: flex;
     align-items: center;
     justify-content: center;
     background: #4263EB;
     font-family: 'roboto', sans-serif;
     font-size: 700;
     color: #fff;
     text-transform: uppercase;
     font-size: 14px;
     text-decoration: none;

     margin-bottom: 16px;
     border-radius: 6px;
     
     transition: background 400ms;
 }

 ul li a:hover {
        background: #00082F;
 }

 img.iconlinkedin {
     width: 27px;
     margin-right: 6px;
 }

 img.iconinstagram {
     width: 40px;
     justify-content: center;
 }

 img.iconfacebook {
     width: 35px;
     margin-right: 3px;
 }

 img.icongit {
     width: 28px;
     margin-right: 6px;
 }
`