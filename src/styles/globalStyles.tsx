import styled from "styled-components";
import { MyColors } from "./colors";

export const FullPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const FullParentContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const MC_StyleContainer = styled.div`
    border-radius: 15px;
    border: 10px solid ${MyColors.borderColor};
`


export const TextStyle = styled.div`
    font-family: var(--font-ubuntu);
    color: #5A5A5A;
    -webkit-text-stroke: 5px #fff;
    paint-order: stroke fill;
    user-select: none;
`


export const Text = styled.p`
    
`