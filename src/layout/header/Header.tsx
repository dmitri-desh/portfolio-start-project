import React, {useState, useEffect, FC} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";

export const Header: FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems="center">
                    <Logo/>
                    {width < breakpoint
                        ? <MobileMenu />
                        : <DesktopMenu />
                    }
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};