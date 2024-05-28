import React from 'react';
import styled from "styled-components";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";

export const Footer = () => {
    return (
        <StyledFooter>
            <p>Call me:<br/>
                123-456-789</p>
            <p>Email:<br/>
                xxx@xyz.com</p>
            <SocialIcons/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    display: flex;
    justify-content: space-around;
    background-color: #0F1624;
    color: white;
    
    p {
        margin: auto 0;
    }
`