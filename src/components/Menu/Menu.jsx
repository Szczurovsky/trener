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
`


export const Menu = props => {
  return (
    <Wrapper>
      <Linkin to="home">Strona główna</Linkin>
      <Linkin to="about">O mnie</Linkin>
      <Linkin to="plan">Plan</Linkin>
      <Linkin to="contact">Kontakt</Linkin>
      <Linkin to="metamorfozy">Metamorfozy</Linkin>
    </Wrapper>
  )

}