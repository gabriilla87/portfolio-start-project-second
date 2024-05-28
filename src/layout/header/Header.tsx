import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";
import {Icon} from "../../components/icon/Icon";

const LinksList = ["Projects", "Technologies", "About me"]

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={"space-around"}>
                <Icon iconId={"brand"} width="185" height="48" viewBox="0 0 185 48"/>
                <Menu menuItems={LinksList}/>
                <SocialIcons/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #0F1624;
`