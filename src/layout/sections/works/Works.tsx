import React, {FC} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {TabMenu} from "./tabMenu/TabMenu";
import socialsImg from "../../../assets/images/social-network.png";
import timerImg from "../../../assets/images/timer.png";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";

const menuItems = ["All", "landing page", "React", "spa"];

const workData = [
    {
        title: "Social Network",
        src: socialsImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    }
];

export const Works: FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={menuItems}/>
                <FlexWrapper justifyContent="space-between" alignItems="flex-start" wrap="wrap">
                    {workData.map((item, index) => {
                        return <Work key={index} title={item.title} text={item.text} src={item.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
