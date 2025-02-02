'use client'

import CanvaMiiVerseScene from '@/r3f/canvasContainers/CanvaMiiVerseScene'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { FullPageContainer } from '@/styles/globalStyles'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const MiiVersePage = () => {


    const {fetch, isLoading } = usePocketBaseStore()

    useEffect(()=> {
      fetch();
    },[])





  return isLoading ? <></> : 
    <MainContainer>
      <CanvaMiiVerseScene/>
    </MainContainer>
}

const MainContainer = styled(FullPageContainer)`
  background-color: aliceblue;
`

export default MiiVersePage