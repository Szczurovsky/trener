import react, { Component } from 'react';
import styled from "styled-components"
import { Header } from "../Header/Header"
import {Baner} from "../Baner/Baner"
import Graph from "./Graph"
import {CardCarousel} from "../CardCarousel/CardCarousel"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Page = styled.div`
     width: 100%;
    display: flex;
    /* justify-content: center; */
   flex-direction: column;
 
`

const Directions = styled.div`

position:relative;
top:100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
`

const Zapchaj = styled.div`
height:2000px;
background-color: blue;
width:100%;
`

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }
    render() {
        return (
        <>
         <Baner/>
            <Directions>    
                <Page>
                        <Graph width={this.state.width} />
                        Nasze przemiany!
                     <CardCarousel />
                </Page>
            </Directions>
        </>
        )
    }
}
export default MainPage