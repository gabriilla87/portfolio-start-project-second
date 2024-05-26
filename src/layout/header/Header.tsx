import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Brand} from "../../components/brand/Brand";
import {Menu} from "../../components/menu/Menu";

const LinksList = ["Projects", "Technologies", "About me"]

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={"space-around"}>
                <Brand/>
                <Menu menuItems={LinksList}/>
                <SocialIcons>
                    <SocialLink href={"#"}>
                        <Icon iconId={"github"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                    </SocialLink>
                    <SocialLink href={"#"}>
                        <Icon iconId={"linkedin"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                    </SocialLink>
                    <SocialLink href={"#"}>
                        <Icon iconId={"telegram"} viewBox={"0 0 35 30"} height={"30"} width={"35"}/>
                    </SocialLink>
                </SocialIcons>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #0F1624;
`

const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`

const SocialLink = styled.a`

`