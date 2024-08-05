import React, {FC, useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";

export const MobileMenu: FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {

    const [menuIsOpen,setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen);

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={onBurgerBtnClick} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup onClick={() => setMenuIsOpen(false)} isOpen={menuIsOpen}>
                <Menu menuItems={props.menuItems} />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
