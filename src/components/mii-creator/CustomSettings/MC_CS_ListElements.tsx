import SVGContainer from '@/components/utils/SVGContainer'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { useSoundsStore } from '@/stores/SoundsStore'
import { MyColors } from '@/styles/colors'
import { MC_StyleContainer } from '@/styles/globalStyles'
import { motion } from 'motion/react'
import { RecordModel } from 'pocketbase'
import React from 'react'
import styled from 'styled-components'

const MC_CS_ListElements = ({list}:{list:RecordModel[]}) => {

  const {getType} = usePocketBaseStore();
  const {play, stop} =useSoundsStore()
  const {selectedElement, changeElement} = useMiiCreatorStore();

  

  return (
    <MainContainer>
        {list.map((element, index)=> {
            const selected = element.id==selectedElement(getType).elementID? "isTrue":"caca"
            return <ElementIcon whileTap={{ scale: 0.95 }} whileHover={{scale:1.05}} onHoverStart={()=> {play('menuHoover')}} onHoverEnd={()=> {stop('menuHoover')}}
            key={index} selected={selected} onClick={()=> {changeElement(element.id,getType)}} >
            <SVGContainer element={element} />
            </ElementIcon>
        })}


    </MainContainer>
  )
}



const ElementIcon = styled(motion.div)<{selected: string}>`
  height: 80px;
  aspect-ratio: 1/1;
  border-radius: 20%;
  background-color: white;
  margin: ${props => props.selected=="isTrue"? "2px" : "7px"};
  border: ${props => props.selected=="isTrue"? "5px solid"+MyColors.darkBlue : "none"};
`


const MainContainer = styled(MC_StyleContainer)`
    width: 80%;

    background-color: ${MyColors.backgroundBlue};
    max-height: 50%;
    display: flex;

    align-items: center;
    flex-wrap: wrap;

    overflow-y: auto;
    white-space: nowrap;

  &::-webkit-scrollbar {
    height: 8px;
    margin-bottom: 5px;
  }
  &::-webkit-scrollbar-track {
    /* background: ${MyColors.borderColor}; */
    /* border-radius: 4px; */
  }
  &::-webkit-scrollbar-thumb {
    background: ${MyColors.darkBlue};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${MyColors.darkBlue};
  }

`

export default MC_CS_ListElements