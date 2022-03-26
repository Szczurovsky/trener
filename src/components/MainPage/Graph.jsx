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


        <Page>

            {/* Wersja Big/wide */}
            {props.width >= 1000 ?
                (<>
                    <svg width="1200" height="140">
                        <line x1="300" x2="900" y1="80" y2="80" stroke="royalblue" />
                        <circle cx="300" cy="80px" r="40" fill="royalblue" />
                        <Text x="220px" y="140px" scaleToFit="true" width="10px" >lorem ipsum dolor sit amet,ssssssss consectetur adipis</Text>
                        <BiDumbbell fontSize="50px" x="276" y="55" color="white" />

                        <circle cx="600" cy="80px" r="40" fill="royalblue" />
                        <BiDumbbell fontSize="50px" x="576" y="55" color="white" />
                        <circle cx="900" cy="80px" r="40" fill="royalblue" />
                        <BiDumbbell fontSize="50px" x="876" y="55" color="white" />
                    </svg>
                    <Stage width={1200} height={100}>
                        <Layer>
                            <Text x={250} y={0} text="To jest przykladowy tekst ma sie dzaiala" fill="black" width="100" align="center" />
                            <Text x={550} y={0} text="To jest przykladowy tekst ma sie dzaiala" fill="black" width="100" align="center" />
                            <Text x={850} y={0} text="To jest przykladowy tekst ma sie dzaiala" fill="black" width="100" align="center" />
                        </Layer>
                    </Stage>
                </>) : "prawda"}

            napisz sie

        </Page>
    )

}

export default Graph;