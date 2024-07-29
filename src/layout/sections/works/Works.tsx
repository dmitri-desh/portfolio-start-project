import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {TabMenu} from "./tabMenu/TabMenu";
import socialsImg from "../../../assets/images/social-network.png";
import timerImg from "../../../assets/images/timer.png";
import {Container} from "../../../components/Container";

const items = ["All", "landing page", "React", "spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={items}/>
                <FlexWrapper justifyContent="space-between" alignItems="flex-start" wrap="wrap">
                    <Work title="Social Network"
                          src={socialsImg}
                          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    />
                    <Work title="Timer"
                          src={timerImg}
                          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`;