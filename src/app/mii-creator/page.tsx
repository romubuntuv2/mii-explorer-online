'use client'

import MC_CustomSettings from '@/components/mii-creator/MC_CustomSettings'
import MC_Menu from '@/components/mii-creator/MC_Menu'
import WiiCursor from '@/components/utils/WiiCursorHook'
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

      {/* <WiiCursor/> */}

{/* <AbsolutePageContainerUP> */}
      <Absolute_MC_Menu>
        <MC_Menu  />
      </Absolute_MC_Menu>
      {/* <CustomContainer>
        <LeftContainer>
        </LeftContainer>
        <RightContainer>
          <MC_CustomSettings />
        </RightContainer>
      </CustomContainer> */}
    {/* </AbsolutePageContainerUP> */}

    <Absolute_MC_CustomSettings >
      <MC_CustomSettings />
    </Absolute_MC_CustomSettings>

    <AbsolutePageContainer>
      <CanvaMiiCreator width='100%' height='100%' position={[0,0,0]} >
            <MiiRendered mii={mii}  msg='' animationString='Idle.001' />
      </CanvaMiiCreator>
    </AbsolutePageContainer>


    </PageContainer>
}

const AbsolutePageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
const AbsolutePageContainerUP = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const Absolute_MC_Menu = styled.div`
  z-index: 2;
  position: absolute;
  height: 10vh;
  width: 96vw;
  top: 0;
  left: 2vw;
`

const Absolute_MC_CustomSettings = styled.div`
  z-index: 2;
  position: absolute;
  height: 85vh;
  width: 70vw;
  top: 10vh;
  left: 30vw;
  display: flex;
  /* background-color: red; */
`




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





const PageContainer = styled(FullPageContainer)`

`



export default MiiCreatorPage