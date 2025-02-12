import { MiiEyes, MiiFaceElement } from '@/r3f/mii/MiiRendered'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { useSoundsStore } from '@/stores/SoundsStore'
import { MyColors } from '@/styles/colors'
import { MC_StyleContainer } from '@/styles/globalStyles'
import { FindMovesSVG } from '@/svgs/mii-creator/movesSVG'
import { motion } from 'motion/react'
import { RecordModel } from 'pocketbase'
import React from 'react'
import styled from 'styled-components'

const MC_CS_Sliders = () => {

    const {getType} = usePocketBaseStore()

    const {selectedElement, selectedTypeID, changeDistBetw, changeVerticalPos, changeRotation, changeShrink, changeScale} = useMiiCreatorStore();


return <MainContainer>
            <SlidersContainer>
                <Slider startIcon='down' endIcon='up' value={(selectedElement(getType) as MiiFaceElement).verticalPos} onChangeFunction={changeVerticalPos} />
                <Slider startIcon='min' endIcon='max' value={(selectedElement(getType) as MiiFaceElement).scale} onChangeFunction={changeScale}/>
                {getType(selectedTypeID)?.name=="Eyes" || getType(selectedTypeID)?.name=="Eyebrows" ?<Slider startIcon='near' endIcon='far' value={(selectedElement(getType)  as MiiEyes).distanceBetween} onChangeFunction={changeDistBetw}/> :<></>} 
                {getType(selectedTypeID)?.name=="Eyes" || getType(selectedTypeID)?.name=="Eyebrows" ?<Slider startIcon='rotClock' endIcon='rotAntiClock'value={(selectedElement(getType) as MiiFaceElement).rotation} onChangeFunction={changeRotation}/>:<></>}
                <Slider startIcon='shrink' endIcon='stretch' value={(selectedElement(getType) as MiiFaceElement).shrink}  onChangeFunction={changeShrink}/>

            </SlidersContainer>
        </MainContainer>
}


const Slider = ({startIcon, endIcon, value, onChangeFunction}:{startIcon:string, endIcon:string,value:number,onChangeFunction:(value:number, getType:(id:string) => (RecordModel|undefined)) => void}) => {
    
    const {play, stop} = useSoundsStore() 
    const {getType} = usePocketBaseStore()

    return <SliderContainer>
        <SVGContainer>
            <SVG viewBox='0 0 50 50'><FindMovesSVG text={startIcon} /></SVG>
        </SVGContainer>

    <InputSliderContainer> 
        <InputSlider whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onHoverStart={()=> {play('menuHoover')}} onHoverEnd={()=> {stop('menuHoover')}} 
        type='range' value={value*100} onChange={(e) => {onChangeFunction(Number(e.target.value)/100,getType)}}  min={0} max={100}/>
    </InputSliderContainer>
    <SVGContainer>
         <SVG  viewBox='0 0 50 50'   ><FindMovesSVG text={endIcon} /></SVG>
    </SVGContainer>
    </SliderContainer>

}

const SlidersContainer = styled.div`
    flex:3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color:${MyColors.backgroundBlue} ;
`

const SliderContainer = styled.div`
    width: 100%;
    display: flex;
    flex:1;
`


const SVG = styled.svg`
    width: 52px;
    height: 52px;
`

const SVGContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InputSliderContainer = styled.div`
    flex:3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none;
`






const InputSlider = styled(motion.input)`
  appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 9999px;
  background: #ffffff;
cursor: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 40px;
    border-radius: 9999px;
    background: ${MyColors.darkBlue};
    box-shadow: none;
    :hover {
        width: 25.2px;
        height: 42px;
    }
  }

  &::-moz-range-thumb {
    border: none;
    width: 24px;
    height: 53px;
    border-radius: 9999px;
    background: ${MyColors.darkBlue};
    box-shadow: none;
    :hover {
        width: 25.2px;
        height: 42px;
    }
  }
`;






const MainContainer = styled(MC_StyleContainer)`
    min-width: 60% ;

    display: flex;
`

export default MC_CS_Sliders