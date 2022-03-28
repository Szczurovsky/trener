
import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";


const CardWrap = styled.div`


margin-bottom:10px;
justify-content:center;
/* background-color:royalblue; */
background-image: ${props => `url(${props.image})`}
width:400px;
height:400px;
color:white;
`
const Image = styled.img`
    margin:0 auto;
    width:400px;
    height:400px;

`
const Text = styled.p`
position:relative;
/* width:100px;
background-color:royalblue; */
bottom:40px;
z-index:99999;
text-align:center;
`
export const Card = props => {
   
    return (
        <>
        <CardWrap> <Image src={props.image} alt="" /> <Text>{props.text}</Text></CardWrap>
        </>
    )

}