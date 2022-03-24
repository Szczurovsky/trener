import react from "react";
import styled from "styled-components"
import { Menu } from "../Menu/Menu"
const NavBar = styled.header`

    display:flex;
    justify-content:center;
    color:white;
    background-color:black;
`

const Wrapper = styled.div`
    width:60%;
    margin:6px 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction: row;
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
            <Wrapper>
                <LeftSide>Trener Personalny</LeftSide>
                <Menu />
            </Wrapper>
        </NavBar>
    )

}