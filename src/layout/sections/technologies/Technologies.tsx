import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {TechnologiesItem} from "../../../components/technologiesItem/TechnologiesItem";

export const Technologies = () => {
    return (
        <StyledTechnologies>
            <SectionTitle>Technologies</SectionTitle>
            <Container>
                <FlexWrapper direction={"column"}>
                    <TechnologiesItem name={"GitHub"} percents={"55%"}/>
                    <TechnologiesItem/>
                    <TechnologiesItem/>
                    <TechnologiesItem/>
                </FlexWrapper>
            </Container>

            <SectionTitle align={"center"}>Additional technologies and skills</SectionTitle>
            <FlexWrapper gap={"30px"} justify={"center"}>
                <Icon width="100" height="100" viewBox="0 0 100 100" iconId={"gitTechnologies"}/>
                <Icon width="100" height="100" viewBox="0 0 100 100" iconId={"githubTechnologies"}/>
                <Icon width="100" height="100" viewBox="0 0 100 100" iconId={"figmaTechnologies"}/>
            </FlexWrapper>
        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.div`
    background-color: pink;
    min-height: 70vh;
`

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
`