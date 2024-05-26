import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../button/StyledButton";
import CardPicture from "../../assets/projectImg.png"

type ProjectCardPropsType = {
    title?: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            <StyledPicture src={CardPicture} alt={"Project"}/>
            <CardTitle>{props.title}</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
            <StyledButton>Look it Up</StyledButton>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
    width: 45%;
    height: 670px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const CardTitle = styled.h2`
    text-align: center;
`

const CardText = styled.p`

`

const StyledPicture = styled.img`
    width: 500px;
    height: 280px;
    align-self: center;
`