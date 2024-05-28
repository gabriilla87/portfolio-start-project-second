import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>Experience</SectionTitle>
            <YearsList>
                <ul>
                    <li>
                        <span>2017</span>
                        <TimeSpot/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</p>
                    </li>
                    <li>
                        <span>2019</span>
                        <TimeSpot/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</p>
                    </li>
                    <li>
                        <span>2021</span>
                        <TimeSpot/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</p>
                    </li>
                    <li>
                        <span>2023</span>
                        <TimeSpot/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</p>
                    </li>
                </ul>
            </YearsList>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    min-height: 50vh;
    background-color: #fff1a1;
`
const TimeSpot = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
`

const YearsList = styled.div`
    
    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }
    
    ul li div{
        margin: 0 auto;
    }
    
    ul li {
        text-align: center;
    }
`






















// const TimeLineWrapper = styled.div`
//     width: 50%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 25px;
//     background-color: gray;
//     margin: 0 auto;
// `
//
// const TimeLine = styled.div`
//     width: 100%;
//     height: 8px;
//     border-radius: 83px;
//     background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
// `
//

//
// const TimeSpotText = styled.p`
//
// `