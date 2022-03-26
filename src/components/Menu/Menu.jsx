import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width:70%;
  display:flex;
  align-items:center;
  justify-content:space-around;  
  height:100%;
`
const Linkin = styled(Link)`
  display:flex;
  height:100%;
  justify-content:center;
  align-items:center;
  color:white;
  width:20%;
  text-decoration:none;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  &:hover{
    color:#bbbbbb;
    background-color: #2020207f ;
  }
  &:last-child{
   
    background-color: #4169e1b5;
  }
    &:last-child:hover{
    background-color: #4169e1;
    color:white;
  }
`


export const Menu = props => {
  return (
    <Wrapper>
      <Linkin to="home">Strona główna</Linkin>
      <Linkin to="about">O mnie</Linkin>
      <Linkin to="plan">Plan</Linkin>
      <Linkin to="metamorfozy">Metamorfozy</Linkin>
      <Linkin to="contact">Kontakt</Linkin>
    </Wrapper>
  )

}