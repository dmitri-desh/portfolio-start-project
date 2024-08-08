import React, {FC} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "../skills/Skills_Styles";

export const Testimony: FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" alignItems="center">
                    <S.IconWrapper>
                        <Icon iconId="quoteAltRight"/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    position: relative;
    
    background-color: #81ed61;
    min-height: 50vh;
    
    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`;