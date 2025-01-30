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
    background-image: ${MyColors.containerFillColor};
    border-radius: 15px;
    border: 10px solid ${MyColors.borderColor};
`