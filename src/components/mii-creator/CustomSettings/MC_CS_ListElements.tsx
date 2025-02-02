import SVGContainer from '@/components/utils/SVGContainer'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { MyColors } from '@/styles/colors'
import { MC_StyleContainer } from '@/styles/globalStyles'
import { RecordModel } from 'pocketbase'
import React from 'react'
import styled from 'styled-components'

const MC_CS_ListElements = ({list}:{list:RecordModel[]}) => {

  const {getType} = usePocketBaseStore();
  const {selectedElement, changeElement} = useMiiCreatorStore();

  return (
    <MainContainer>
        {list.map((element, index)=> {
            const selected = element.id==selectedElement(getType).elementID? "isTrue":"caca"
            return <ElementIcon key={index} selected={selected} onClick={()=> {changeElement(element.id,getType)}} >
            <SVGContainer element={element} />
            </ElementIcon>
        })}


    </MainContainer>
  )
}



const ElementIcon = styled.div<{selected: string}>`
  height: 80px;
  aspect-ratio: 1/1;
  border-radius: 20%;
  background-image: ${MyColors.iconFillColor};
  margin: ${props => props.selected=="isTrue"? "2px" : "7px"};
  border: ${props => props.selected=="isTrue"? "5px solid"+MyColors.selectedColor2 : "none"};
`


const MainContainer = styled(MC_StyleContainer)`
    width: 80%;
    max-height: 35%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-wrap: wrap;

    overflow-y: auto;
    white-space: nowrap;

  &::-webkit-scrollbar {
    height: 8px;
    margin-bottom: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${MyColors.borderColor};
    /* border-radius: 4px; */
  }
  &::-webkit-scrollbar-thumb {
    background: ${MyColors.selectedColor2};
    /* border-radius: 4px; */
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${MyColors.selectedColor2};
  }

`

export default MC_CS_ListElements