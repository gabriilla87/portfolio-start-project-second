import React from 'react';
import styled from "styled-components";
import {ProjectCard} from "../../../components/projectCard/ProjectCard";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                <ProjectCard title={"Project 1"}/>
                <ProjectCard title={"Project 2"}/>
                <ProjectCard title={"Project 3"}/>
                <ProjectCard title={"Project 4"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 50vh;
    background-color: #ffc77f;
`