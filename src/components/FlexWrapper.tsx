import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string
    align?: string
    direction?: string
    wrap?: string
    gap?: string
    column?: number
    columnWidth?: string
    margin?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-direction: ${props => props.direction || "row"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"};
    column-count: ${props => props.column || "auto"};
    column-width: ${props => props.columnWidth || "auto"};
`
