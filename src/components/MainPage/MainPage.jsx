import react, { Component } from 'react';
import styled from "styled-components"
import { Header } from "../Header/Header"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Page = styled.div`
    width:100vw;

    display:flex;
    justify-content:center;
`

class MainPage extends Component {
    render() {
        return (
            // <BrowserRouter>
            //     <Routes>

            <Page>

            </Page>
            //     </Routes>
            // </BrowserRouter>
        )
    }
}
export default MainPage