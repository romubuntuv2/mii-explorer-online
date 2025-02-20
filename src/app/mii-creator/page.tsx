'use client'

import LoadingPage from '@/components/loading/LoadingPage'
import MC_CustomSettings from '@/components/mii-creator/MC_CustomSettings'
import MC_Menu from '@/components/mii-creator/MC_Menu'
import ResortButton from '@/components/utils/ResortButton'
import WiiCursor from '@/components/utils/WiiCursorHook'
import CanvaMiiCreator from '@/r3f/canvasContainers/CanvaMiiCreator'
import MiiRendered from '@/r3f/mii/MiiRendered'
import { useMainMenuStore } from '@/stores/MainMenuStore'


import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { useSoundsStore } from '@/stores/SoundsStore'
import { FullPageContainer } from '@/styles/globalStyles'
import { useRouter } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'
import styled from 'styled-components'





const MiiCreatorPage = () => {

  const router = useRouter()
  const {menu, changeMenu} = useMainMenuStore()
  const {fetch, getInitIdByElement, types, isLoading} = usePocketBaseStore()
  const {initMii, mii, saveMii} = useMiiCreatorStore();

  const {playLoop, play,stop} = useSoundsStore();
  

  const handleSaveAndBack = () => {
    saveMii(mii);
    play('miiFinished');
    changeMenu("ModeMenu")
    stop('miiCustom')
    router.push('/');
  }




  useEffect(()=>{
    if(menu == "TransitionToCustom") {
      playLoop("miiCustom");
      fetch();
    } else {
      router.push('/')
    }
  },[])



  useEffect(()=> {
    if(isLoading) return
    initMii(getInitIdByElement, types[0].id);
  },[isLoading])

  return isLoading  ? <LoadingPage/>
    : 
    <PageContainer>

      <WiiCursor/>

      <Absolute_MC_Menu>
        <MC_Menu  />
      </Absolute_MC_Menu>


    <Absolute_MC_CustomSettings >
      <MC_CustomSettings />
    </Absolute_MC_CustomSettings>

    <AbsolutePageContainer>
      <CanvaMiiCreator width='100%' height='100%'  >
        <Suspense>
        <MiiRendered mii={mii}  msg='' animationString='directIdle' />
        </Suspense>
      </CanvaMiiCreator>
    </AbsolutePageContainer>


    <ResortButtonDiv onClick={()=> handleSaveAndBack()}  >
    <ResortButton iconID='back' scale={1} text='Save' />
    </ResortButtonDiv>

    </PageContainer>
}

const ResortButtonDiv = styled.div`
  position: absolute;
  top: 80vh;
  left: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AbsolutePageContainer = styled.div`
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
  pointer-events: none;

> * {
  pointer-events: auto;
}
`

const Absolute_MC_CustomSettings = styled.div`
  z-index: 2;
  position: absolute;
  height: 85vh;
  width: 70vw;
  top: 10vh;
  left: 30vw;
  display: flex;
  pointer-events: none;
`






const PageContainer = styled(FullPageContainer)``



export default MiiCreatorPage