import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Card} from "./Card"
import zdj1 from "./zdj1.jpg"
import zdj2 from "./zdj2.jpg"
import zdj3 from "./zdj3.jpg"
import zdj4 from "./zdj4.jpg"
const Wrapper = styled.div`
display:flex;
justify-content: center;
`
const Swype = styled(Carousel)`
color:red;
`
export const CardCarousel = props => {
    return (
        <Wrapper>
            {/* w Kartach beda propsy do odpowiednich tekstow itd do pokazania */}
           
            <Swype showThumbs={false} width={1000} centerMode="true" centerSlidePercentage={51} showArrows="true" autoPlay={true} infiniteLoop="true">
                <Card text="Adam Nowak" image={zdj1}/>
                <Card text="Adam Nowak" image={zdj2}/>
                <Card text="Adam Nowak" image={zdj3} />
                <Card text="Adam Nowak" image={zdj4} />
            </Swype>
        </Wrapper>
    )

}