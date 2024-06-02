import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Portrait from "../../../assets/portrait.jpg";
import {Container} from "../../../components/Container";
import {StyledLink} from "../../../components/StyledLink";
import {theme} from "../../../styles/Theme";

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <HeroInfo>
                        <FlexWrapper direction={"column"}>
                            <Name>Lorem ipsum dolor amet</Name>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua.
                            </Text>
                            <StyledLink name={"Let's Begin"}/>
                        </FlexWrapper>
                    </HeroInfo>

                    <ImageWrapper>
                        <StyledPortrait src={Portrait} alt={"It's me!!!"}/>
                    </ImageWrapper>
                </FlexWrapper>
            </Container>
        </StyledHero>
    );
};

const StyledHero = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & {
        padding-top: 225px;
    }
`

const ImageWrapper = styled.div`
    width: 390px;
    height: 460px;
    border-radius: 50px 0;
    background: ${theme.colors.gradient};
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledPortrait = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
    border-radius: 50px 0;
 
`

const HeroInfo = styled.div`
    
`

const Name = styled.h1`
    font-size: 54px;
    font-weight: 600;
`

const Text = styled.span`
    color: #BCBCBC;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    max-width: 482px;
    width: 100%;
    margin: 15px 0 60px;
`