import React, {FC} from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

const socialsItemsData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedin"
    }
];

export const Footer: FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction="column" alignItems="center">
                <S.Name>Svetlana</S.Name>
                <S.SocialsList>
                    {socialsItemsData.map((item, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon iconId={item.iconId} height="21px" width="21px" viewBox="0 0 21px 21px"/>
                                </S.SocialLink>
                        </S.SocialItem>
                        )
                    })}
                </S.SocialsList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
