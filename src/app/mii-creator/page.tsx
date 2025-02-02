'use client'

import MC_CustomSettings from '@/components/mii-creator/MC_CustomSettings'
import MC_Menu from '@/components/mii-creator/MC_Menu'
import CanvaMiiCreator from '@/r3f/canvasContainers/CanvaMiiCreator'
import MiiRendered from '@/r3f/mii/MiiRendered'


import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { FullPageContainer } from '@/styles/globalStyles'
import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'





const MiiCreatorPage = () => {

  const {fetch, getInitIdByElement, types, isLoading} = usePocketBaseStore()
  const {initMii, mii} = useMiiCreatorStore();


  useEffect(()=>{
    fetch();
  },[])

  useEffect(()=> {
    if(isLoading) return
    initMii(getInitIdByElement, types[0].id);
  },[isLoading])

  return isLoading ? <PageContainer/>
    : 
    <PageContainer>
      <MenuContainer>
        <MC_Menu  />
      </MenuContainer>


      <CustomContainer>
        <LeftContainer>
          <CanvaMiiCreator width='100%' height='100%' position={[0,0,0]} >
            <MiiRendered mii={mii} />
          </CanvaMiiCreator>
        </LeftContainer>

        <RightContainer>
          <MC_CustomSettings />
        </RightContainer>

      </CustomContainer>

    </PageContainer>
}



const MenuContainer = styled.div`
  height: 9%;
`

const CustomContainer = styled.div`
  height: 91%;
  display: flex;

`

const LeftContainer = styled.div`
  flex:1;
`

const RightContainer = styled.div`
  flex: 1.5;
`




const PageContainerAnimation = keyframes`
	0% {
		background-position: 0% 0%;
	}
	25% {
		background-position: 100% 50%;
	}
	50% {
		background-position: 0% 100%;
	}
  75% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
`


const PageContainer = styled(FullPageContainer)`
  /* display: flex; */
  /* flex-direction: column; */
  background-color: #D7FFF1;
  background-size: 400% 400%;
  background-image: radial-gradient(circle farthest-corner at top left, rgba(230, 254, 245,1) 0%, rgba(230, 254, 245,0) 50%),
  radial-gradient(circle farthest-side at top right, rgba(206, 255, 240,1) 0%, rgba(206, 255, 240,0) 10%),
  radial-gradient(circle farthest-corner at bottom right, rgba(207, 255, 239,1) 0%, rgba(207, 255, 239, 0) 33%),
  radial-gradient(circle farthest-corner at top right, rgba(152, 253, 212,1) 0%, rgba(152, 253, 212,0) 50%),
  radial-gradient(ellipse at bottom center, rgba(211, 255, 241,1) 0%, rgba(211, 255, 241, 0) 80%);
  animation-name: ${PageContainerAnimation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`



export default MiiCreatorPage