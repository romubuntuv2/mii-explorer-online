'use client'

import CanvaMiiVerseScene from '@/r3f/canvasContainers/CanvaMiiVerseScene'
import { FullPageContainer } from '@/styles/globalStyles'
import React from 'react'
import styled from 'styled-components'

const MiiVersePage = () => {





  return (
    <MainContainer>
      <CanvaMiiVerseScene/>
    </MainContainer>
  )
}

const MainContainer = styled(FullPageContainer)`
  background-color: aliceblue;
`

export default MiiVersePage