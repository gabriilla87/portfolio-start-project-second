import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index)=> {
                    return (
                    <li key={index}>
                        <Link href={"#"}>{item}</Link>
                    </li>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    display: block;
    
    ul {
        display: flex;
        gap: 80px;
    }
    
    @media ${theme.media.desktop} {
        display: none;
    }
`

const Link = styled.a`
    font-size: 24px;
    font-weight: 500;
`