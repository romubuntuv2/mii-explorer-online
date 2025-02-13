import { MiiElement } from '@/r3f/mii/MiiRendered'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { useSoundsStore } from '@/stores/SoundsStore'
import { MC_StyleContainer } from '@/styles/globalStyles'
import { motion } from 'motion/react'
import React from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

const MC_CS_Color = () => {

    const {getType} = usePocketBaseStore();
    const {play, stop} = useSoundsStore()
    const {changeColor, selectedElement} = useMiiCreatorStore();



return <MainContainer as={motion.div} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onHoverStart={()=> {play('menuHoover')}} onHoverEnd={()=> {stop('menuHoover')}}  >
            <ColorPickerContainer >
                <CustumHexColorPicker
                color={(selectedElement(getType) as MiiElement).color} onChange={(e) => changeColor(e,getType)}  />
            </ColorPickerContainer>
        </MainContainer>
}







const CustumHexColorPicker = styled(HexColorPicker)`
    height:'auto';
    width:"80%"; 
    cursor: none;
.react-colorful {
    cursor: none;
}
.react-colorful__saturation {
    cursor: none;
}
.react-colorful__hue {
    cursor: none;
}
.react-colorful__hue-pointer {
    cursor: none;
}



`

const ColorPickerContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none;

`



const MainContainer = styled(MC_StyleContainer)`
    border-radius: 20px;
    cursor: none;
`

export default MC_CS_Color