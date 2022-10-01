import styled from "styled-components";
import { Theme, TOP_BAR_HEIGTH } from "../../themes/theme";

export const TopbarWrapper = styled.div`
    width: 100%;
    height: ${TOP_BAR_HEIGTH}px;
    position: fixed;
    top: 0;
    left: 0;
    background: ${Theme.primary};
    display: flex;
`;


export const CartWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: 6px 10px;
    align-items: center;
    svg {
        color: #fff;
        font-size: 1.8em;
    }
`;

export const LogoWrapper = styled.div`
    padding: 5px;
    img {
        width: 200px;
    }
`;