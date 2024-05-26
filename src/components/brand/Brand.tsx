import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Brand = () => {
    return (
        <FlexWrapper align={"center"}>
            <Icon iconId={"briefcase"} viewBox="0 0 512 512"/>
            <BrandName>Portfolio</BrandName>
        </FlexWrapper>
    );
};

const BrandName = styled.span`
    color: white;
`