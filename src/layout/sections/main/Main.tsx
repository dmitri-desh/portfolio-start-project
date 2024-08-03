import React, {FC} from 'react';
import photo from "../../../assets/images/photo-sdyablo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";

export const Main: FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper alignItems="center" justifyContent="space-around" wrap="wrap">
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Svetlana Dyablo photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
