import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" alignItems="center">
                <Name>Svetlana</Name>
                <SocialsList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="instagram" height="21px" width="21px" viewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="telegram" height="21px" width="21px" viewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="vk" height="21px" width="21px" viewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" height="21px" width="21px" viewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>
                </SocialsList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`;

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
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