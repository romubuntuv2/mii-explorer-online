import { MyColors } from '@/styles/colors'
import { FullParentContainer } from '@/styles/globalStyles'
import React from 'react'
import styled from 'styled-components'
import SVGContainer from '../utils/SVGContainer'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'





const MC_Menu = () => {

  const {types}= usePocketBaseStore()
  const { selectedTypeID, setSelectedType } = useMiiCreatorStore();


  return (
    <MainContainer>
        <MenuContainer>
          {types.map((type) => {
            const isselected:boolean = (selectedTypeID == type.id)
            return <MenuIcon key={type.id} isselected={isselected.toString()} onClick={()=>{setSelectedType(type.id)}}>
            <SVGContainer element={type}  />
          </MenuIcon>
          })}


        </MenuContainer>

    </MainContainer>
  )
}


const MenuIcon = styled.div<{isselected: string}>`
  height: 70%;
  aspect-ratio: 1/1;
  border-radius: 20%;
  background-image: ${MyColors.iconFillColor};
  margin-left: ${props => props.isselected=="true"? "2px" : "7px"};
  margin-right: ${props => props.isselected=="true"? "2px" : "7px"};
  border: ${props => props.isselected=="true"? "5px solid"+MyColors.selectedColor2 : "none"};
`
const MenuContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 100%;
    width: 60%;
    background-image: ${MyColors.containerFillColor};
    border-radius: 15px;
    border-left: 10px solid ${MyColors.borderColor};
    border-right: 10px solid ${MyColors.borderColor};
    border-bottom: 10px solid ${MyColors.borderColor};

  overflow-x: auto;
  white-space: nowrap;
  
  /* Styles pour la barre de défilement */
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

const MainContainer = styled(FullParentContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default MC_Menu