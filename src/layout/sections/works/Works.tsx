import React, {FC, useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import socialsImg from "../../../assets/images/social-network.png";
import timerImg from "../../../assets/images/timer.png";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";

const tabsItems: Array<{ status: TabStatusType, title: string }> = [
    { status: "all", title: "All" },
    { status: "landing", title: "landing page" },
    { status: "react", title: "React" },
    { status: "spa", title: "spa" }
];

const worksData = [
    {
        title: "Social Network",
        src: socialsImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react"
    }
];

export const Works: FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks =  worksData.filter(work => work.type === "landing");
    } else if (currentFilterStatus === "react") {
        filteredWorks =  worksData.filter(work => work.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks =  worksData.filter(work => work.type === "spa");
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justifyContent="space-between" alignItems="flex-start" wrap="wrap">
                    {filteredWorks.map((item, index) => {
                        return <Work key={index} title={item.title} text={item.text} src={item.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
