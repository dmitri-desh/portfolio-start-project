import React, {FC} from 'react';
import {Link} from "../../../../components/Link";
import {S} from "../Works_Styles";

export type TabStatusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
    tabsItems: Array<{ status: TabStatusType, title: string }>,
    changeFilterStatus: (value: TabStatusType) => void,
    currentFilterStatus: string
};

export const TabMenu: FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <Link as={"button"} active={item.status === props.currentFilterStatus} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </S.ListItem>
                })}
            </ul>
        </S.TabMenu>
    );
};

