import react, { useEffect, useRef } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { BiDumbbell } from "react-icons/bi"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { Stage, Layer, Rect, Circle, Line, Text, Image, } from "react-konva";
import { Html as Pokazsie } from "react-konva-utils"
import pokaz from "./dumbbell-solid.svg"
import { ReactComponent as Ciezar } from "./dumbbell-solid.svg"
import useImage from "use-image"
import Konva from "konva"
const Page = styled.div`
    flex-direction: column;
    display:flex;
    justify-content:space-between;

`
// const MyImage = () => {
//     const [image] = useImage('https://konvajs.org/assets/lion.png')
//     return <Image image={image} />
// }

const Graph = props => {
    const url = "../MainPage/pokaz.png"
    const [image, status] = useImage(pokaz)
    console.log(image, status)

    return (
        //Wersja PC

        <Page>
            {console.log(props.width)}
            {props.width >= 1000 ? <svg width="1200" height="140">
                <line x1="300" x2="900" y1="80" y2="80" stroke="royalblue" />
                <circle cx="300" cy="80px" r="40" fill="royalblue" />
                <Text x="220px" y="140px" scaleToFit="true" width="10px" >lorem ipsum dolor sit amet,ssssssss consectetur adipis</Text>
                <BiDumbbell fontSize="30px" x="286" y="65" color="white" />

                <circle cx="600" cy="80px" r="40" fill="royalblue" />
                <BiDumbbell fontSize="30px" x="586" y="65" color="white" />
                <circle cx="900" cy="80px" r="40" fill="royalblue" />
                <BiDumbbell fontSize="30px" x="886" y="65" color="white" />
            </svg> : "prawda"}
            <Stage width={1200} height={100}>
                <Layer>
                    {/* <Line x={300} y={80} points={[0, 0, 600, 0]} fill="royalblue" stroke="royalblue" />
                    <Circle x={300} y={80} radius={40} fill="royalblue"></Circle>

                    <Circle x={600} y={80} radius={40} fill="royalblue"></Circle>
                    <Circle x={900} y={80} radius={40} fill="royalblue"></Circle> */}

                    <Text x={250} y={0} text="To jest przykladowy tekst ma sie dzaiala" fill="black" width="100" textAlign="center" />
                    {console.log(pokaz)}
                    {/* <Image x={286} y={60} width={50} height={50} image={pokaz} /> */}
                    {/* <BiDumbbell fontSize="30px" x="886" y="65" color="white" /> */}
                    {/* <Pokazsie position="relative">
                        <BiDumbbell top="100" />
                    </Pokazsie> */}

                </Layer>
            </Stage>
            napisz sie

        </Page>
    )

}

export default Graph;