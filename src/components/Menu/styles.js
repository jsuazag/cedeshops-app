import styled from "styled-components";
import { Theme } from "../../themes/theme";

export const MenuWrapper = styled.section`
    border-top: 2px solid #ccc;
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    bottom: 0;
    left: 0;
    //border: 1px solid red;
`;

export const ItemMenuWrapper = styled.div`
    border-left: 1px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    svg {
        color: ${Theme.secoundary};
        font-size: 1.2em;
    }
    p {
        color: ${Theme.secoundary};
    }
    &:hover {
        cursor: pointer;
        background-color: ${Theme.secoundary};
        svg { color: #fff }
        p { color: #fff }
    }
`;