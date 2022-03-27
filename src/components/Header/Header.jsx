import react from "react";
import styled from "styled-components"
import { Menu } from "../Menu/Menu"
const NavBar = styled.header`

    width:100%;
    display:flex;
     height:7vh;
    justify-content:center;
    color:white;
    background-color:black;
`
const Bar = styled.div`
    width:100%;
    display:flex;
      height:7vh;
    justify-content:center;
     background-color:black;
     position:fixed;
     z-index:9999 ;
     top:0;
     left:0;
`

const Wrapper = styled.div`

    width:60%;
    /* margin:6px 0; */
    height:7vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
       flex-direction: row;
        background-color:black;
`

const LeftSide = styled.div`
    font-family: 'Inspiration', cursive;
    font-weight: bold;
    font-size:2.2rem;
    letter-spacing:2px;
`

export const Header = props => {
    return (
        <NavBar>
            <Bar>
                <Wrapper>
                    <LeftSide>Trener Personalny</LeftSide>
                    <Menu />
                </Wrapper>
            </Bar>
        </NavBar>
    )

}