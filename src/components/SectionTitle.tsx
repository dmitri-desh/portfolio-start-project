import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({
        family: "'Josefin Sans', sans-serif",
        weight: 600,
        Fmin: 30,
        Fmax: 36
    })};
    letter-spacing: 5px;
    text-align: center;
    margin-bottom: 90px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        border: 1px solid ${theme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`;