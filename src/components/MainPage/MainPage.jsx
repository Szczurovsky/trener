import react, { Component } from 'react';
import styled from "styled-components"
import { Header } from "../Header/Header"
import Graph from "./Graph"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Page = styled.div`
    width:100%;

    display:flex;
    justify-content:center;
`


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
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
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
            <>

                <Page>
                    {console.log(this.state.width)}
                    <Graph width={this.state.width} />
                </Page>
            </>
            /* <svg width="50vw" height="50vh">
                               <defs>
                                   <clipPath id="myCircle">
                                       <circle cx="250" cy="145" r="125" fill="#000" />
                                   </clipPath>
                               </defs>
                               <image width="500" height="350" clip-path="url(#myCircle)" />
                           </svg> */
            // <Shape
            //     name="Circle"
            //     id="circle-shape-id"
            //     width="300px"
            //     height="300px"
            //     showLabel={true}>
            //     sss
            // </Shape>

        )
    }
}
export default MainPage