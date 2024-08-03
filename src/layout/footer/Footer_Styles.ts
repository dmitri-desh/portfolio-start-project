import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`;

const Name = styled.span`
    ${font({
    family: "'Josefin Sans', sans-serif",
    weight:700,
    Fmin: 16,
    Fmax: 22
})};
    letter-spacing: 3px;
`;

const SocialsList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`;

const SocialItem = styled.li`

`;

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`;

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
`;

export const S = {
    Footer,
    Name,
    SocialsList,
    SocialItem,
    SocialLink,
    Copyright
}