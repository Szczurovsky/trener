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
const NavBar = styled.header`
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
                <NavBar>
                    <Wrapper>
            <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="about" element={<About />} />
            <Route path="plan" element={<Plan />} /> 

        
                        </Routes>
                        </Wrapper>
                  </NavBar>  
            </Router>
            </>
    );
}

export default App;
