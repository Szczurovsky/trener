import react from "react";
import styled from "styled-components"
import fitness from "./fitness.jpg"
const Wrap = styled.div`
    width:100vw;
    height:93vh;
    position:absolute;
    top:7vh;
    left:0;
    background-image: ${props => `url(${props.image})`}
`
const Text = styled.div`
position:relative;
width:300px;
top:300px;
left:300px;
color:white;

flex-direction:column;
`
const Button = styled.button`
    background-color:#4169e1b5;
    color:white;
    padding:0;
    margin:20px;
    width:120px;
    height:30px;
    border: none;
    cursor:pointer;
`
export const Baner = props => {
    return (
        <Wrap image={fitness}>
            <Text><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores a facilis aliquid debitis modi libero commodi aperiam temporibus
                laudantium vitae iste voluptate, quibusdam fugit mollitia tenetur minima necessitatibus ?</p>
                <Button>Zamów już teraz</Button>
            </Text>
          
        </Wrap>
    )

}

