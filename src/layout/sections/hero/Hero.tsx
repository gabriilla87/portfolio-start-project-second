import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledButton} from "../../../components/button/StyledButton";
import Portrait from "../../../assets/portrait.jpg";

export const Hero = () => {
    return (
        <StyledHero>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <Container>
                    <h2>Lorem ipsum dolor amet</h2>
                    <h1 >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. </h1>
                    <StyledButton>Let’s Begin</StyledButton>
                </Container>

                <StyledPortrait src={Portrait} alt={"It's me!!!"}/>
            </FlexWrapper>
        </StyledHero>
    );
};

const StyledHero = styled.div`
    min-height: 100vh;
    background-color: lightgreen;
    display: flex;: space-between;
`

const StyledPortrait = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
`

const Container = styled.div`
    width: 50%;
`