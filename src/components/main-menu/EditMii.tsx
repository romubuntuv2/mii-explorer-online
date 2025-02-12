import { useMainMenuStore } from '@/stores/MainMenuStore'
import { FullPageContainer } from '@/styles/globalStyles';
import { AnimatePresence } from 'motion/react';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import MC_CustomSettings from '../mii-creator/MC_CustomSettings';
import MC_Menu from '../mii-creator/MC_Menu';
import { usePocketBaseStore } from '@/stores/PocketBaseStore';
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore';

const EditMii = () => {

    const {isCustomMii} = useMainMenuStore();

    const {fetch, getInitIdByElement, types, isLoading} = usePocketBaseStore()
    const {initMii} = useMiiCreatorStore();
    
    useEffect(()=>{
    fetch();
    },[])

    useEffect(()=> {
        if(isLoading) return
        initMii(getInitIdByElement, types[0].id);
    },[isLoading])


  return <AnimatePresence> {isCustomMii() && 
  <PageContainer>

    <Absolute_MC_Menu>
    <MC_Menu  />
    </Absolute_MC_Menu>
  
  <Absolute_MC_CustomSettings >
      <MC_CustomSettings />
    </Absolute_MC_CustomSettings>
  
</PageContainer>}
  </AnimatePresence>
}


const Absolute_MC_CustomSettings = styled.div`
  z-index: 2;
  position: absolute;
  height: 85vh;
  width: 70vw;
  top: 10vh;
  left: 30vw;
  display: flex;
  pointer-events: none;
  /* background-color: red; */
`

const Absolute_MC_Menu = styled.div`
  z-index: 2;
  position: absolute;
  height: 10vh;
  width: 96vw;
  top: 0;
  left: 2vw;
  /* pointer-events: none; */
`

const PageContainer = styled(FullPageContainer)`
  /* pointer-events: none; */
`

export default EditMii