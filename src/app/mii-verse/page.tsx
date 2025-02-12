'use client'

import LoadingPage from '@/components/loading/LoadingPage'
import MainHUD from '@/components/mii-verse/MainHUD'
import CanvaMiiVerseScene from '@/r3f/canvasContainers/CanvaMiiVerseScene'
import { socket } from '@/socket/socket'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'
import { SocketUser, useSocketStore } from '@/stores/SocketStore'
import { useSoundsStore } from '@/stores/SoundsStore'
import { FullPageContainer } from '@/styles/globalStyles'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const MiiVersePage = () => {

    const router = useRouter()
    const {fetch, isLoading } = usePocketBaseStore()
    const {playLoop} = useSoundsStore()
    const {localMii} = useSocketStore()

    useEffect(()=> {
      if(localMii == null) {
        router.push('/')
      } else {
        playLoop('explorer')
        fetch();
      }
    },[])



  



  return isLoading ? <LoadingPage/> : 
  <MainContainer>
      <MainHUD/>
      <CanvaMiiVerseScene/>
    </MainContainer>
}

const MainContainer = styled(FullPageContainer)`

`



export default MiiVersePage