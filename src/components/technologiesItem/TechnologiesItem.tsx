import React from 'react';
import styled from "styled-components";

type TechnologiesItemPropsType = {
    name?: string
    percents?: string
}

type StyledPartOfLine = {
    percents?: string
}

export const TechnologiesItem = (props: TechnologiesItemPropsType) => {
    return (
        <StyledTechnologiesItem>
            <TechnologiesName>{props.name || "Item"}</TechnologiesName>
            <TechnologyLine>
                <PartOfLine percents={props.percents}/>
            </TechnologyLine>
        </StyledTechnologiesItem>
    );
};

const StyledTechnologiesItem = styled.div`

`

const TechnologiesName = styled.h3`

`

const TechnologyLine = styled.div`
    width: 90%;
    height: 10px;
    background-color: gray;
    border-radius: 83px;
`

const FullLine = styled.div`
    background-color: dimgrey;
    width: 100%;
    height: 100%;
`

const PartOfLine = styled.div<StyledPartOfLine>`
    width: ${props => props.percents || "10%"};
    height: 100%;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 83px;
`