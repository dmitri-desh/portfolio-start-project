import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

// Works
const TabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
        //border: 1px solid darkred;
    }
`;

const ListItem = styled.li`
  
`;

const Works = styled.section`
    position: relative;
    
    ${FlexWrapper} {
        gap: 30px;
    }
`;

// Work
const Work = styled.div`
    width: 330px;
    flex-grow: 1;
    background-color: ${theme.colors.secondaryBg};
    
    ${Link} {
        padding: 10px 0;
        
        & + ${Link} {
            margin-left: 20px;
        }
    }
    
    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }
    
    &:hover {        
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;

const Description = styled.div`
    padding: 25px 20px;
`;

const Title = styled.h3`

`;

const Text = styled.p`
    margin: 14px 0 10px;
`;


export const S = {
    TabMenu,
    ListItem,
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text
}