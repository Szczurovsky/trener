import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

export const Menu = props => {
  return (
    <>

      <Link to="about">About</Link>
      <Link to="plan">Plan</Link>
    </>
  )

}