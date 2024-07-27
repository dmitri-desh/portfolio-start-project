import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" alignItems="center">
                <Name>Svetlana</Name>
                <SocialsList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="instagram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="telegram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="vk" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                </SocialsList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    //background-color: #f16d55;
    min-height: 20vh;
`;

const Name = styled.span`

`;

const SocialsList = styled.ul`
    display: flex;
    gap: 30px;
`;

const SocialItem = styled.li`

`;

const SocialLink = styled.a`

`;

const Copyright = styled.small`

`;