import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components"
import MainPage from "./components/MainPage/MainPage";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import  About  from "./components/About/About"
import { Plan } from "./components/Plan/Plan"
import { Header } from "./components/Header/Header"
import { Metamorfozy } from "./components/Metamorfozy/Metamorfozy"
import { Kontakt } from "./components/Kontakt/Kontakt"

const Content = styled.header`
    width:100%;
    display:flex;
    justify-content:center;


`

const Wrapper = styled.div`
    width:60%;
    display:flex;   
    justify-content:center;

`
function App() {
    return (
    // <div className="App">
        <>
            <Router>
                <Header />
                <Content>
                    <Wrapper>
                        <Routes>
                            <Route path="home" element={<MainPage />}/>
                            <Route path="about" element={<About />} />
                            <Route path="plan" element={<Plan />} /> 
                            <Route path="contact" element={<Kontakt />} /> 
                            <Route path="metamorfozy" element={<Metamorfozy />} /> 

                        </Routes>
                    </Wrapper>
                </Content>  
            </Router>
        </>
    );
}

export default App;
