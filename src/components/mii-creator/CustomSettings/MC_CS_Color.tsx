import { MiiElement } from '@/r3f/mii/MiiRendered'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { MC_StyleContainer } from '@/styles/globalStyles'
import React from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

const MC_CS_Color = () => {

    const {getType} = usePocketBaseStore();
    const {changeColor, selectedElement} = useMiiCreatorStore();


return <MainContainer>
            <ColorPickerContainer>
                <CustumHexColorPicker color={(selectedElement(getType) as MiiElement).color} onChange={(e) => changeColor(e,getType)}  />
            </ColorPickerContainer>
        </MainContainer>
}







const CustumHexColorPicker = styled(HexColorPicker)`
    height:'auto';
    width:"80%"; 

`

const ColorPickerContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;


`



const MainContainer = styled(MC_StyleContainer)`
    border-radius: 20px;
`

export default MC_CS_Color