import { MiiFaceElement } from '@/r3f/mii/MiiRendered'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { MC_StyleContainer } from '@/styles/globalStyles'
import { FindMovesSVG } from '@/svgs/mii-creator/movesSVG'
import React from 'react'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'

const MC_CS_ColorAndSliders = () => {

    const {selectedElement, changeColor, changeVerticalPos} = useMiiCreatorStore();


return <MainContainer>
            <ColorPickerContainer>
                <CustumHexColorPicker onChange={(e) => changeColor(e)}  />
            </ColorPickerContainer>

            <SlidersContainer>
                <Slider startIcon='down' endIcon='up' value={(selectedElement() as MiiFaceElement).verticalPos} onChangeFunction={changeVerticalPos} />
                {/* <Slider startIcon='min' endIcon='max' onChangeFunction={()=>{}}/>
                <Slider startIcon='near' endIcon='far' onChangeFunction={()=>{}}/>
                <Slider startIcon='rotClock' endIcon='rotAntiClock' onChangeFunction={()=>{}}/>
                <Slider startIcon='shrink' endIcon='stretch' onChangeFunction={()=>{}}/> */}

            </SlidersContainer>
        </MainContainer>
}


const Slider = ({startIcon, endIcon, value, onChangeFunction}:{startIcon:string, endIcon:string,value:number,onChangeFunction:(value:number) => void}) => {
    
    return <SliderContainer>
        <SVGContainer>
            <SVG viewBox='0 0 50 50'><FindMovesSVG text={startIcon} /></SVG>
        </SVGContainer>

    <InputSliderContainer> 
        <InputSlider type='range' value={value*100} onChange={(e) => {onChangeFunction(Number(e.target.value)/100)}}  min={0} max={100}/>
    </InputSliderContainer>
    <SVGContainer>
         <SVG viewBox='0 0 50 50'  ><FindMovesSVG text={endIcon} /></SVG>
    </SVGContainer>
    </SliderContainer>

}

const SlidersContainer = styled.div`
    flex:3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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
`






const InputSlider = styled.input`
  appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 9999px;
  background: #ffffff;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 40px;
    border-radius: 9999px;
    background: #007759;
    box-shadow: none;
  }

  &::-moz-range-thumb {
    border: none;
    width: 24px;
    height: 53px;
    border-radius: 9999px;
    background: #007759;
    box-shadow: none;
  }
`;





const CustumHexColorPicker = styled(HexColorPicker)`
    height:'auto';
    width:"80%"; 
    /* aspect-ratio:1; */
`

const ColorPickerContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;

`



const MainContainer = styled(MC_StyleContainer)`
    width: 80%;
    height: 30%;
    display: flex;
`

export default MC_CS_ColorAndSliders