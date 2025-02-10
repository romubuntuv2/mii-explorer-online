'use client'
import LoadingPage from '@/components/loading/LoadingPage';
import BackgroundCanva from '@/components/main-menu/BackgroundCanva';
import ExplorationMenu from '@/components/main-menu/Exploration';
import ModeMenu from '@/components/main-menu/ModeMenu';
import StartMenu from '@/components/main-menu/StartMenu';
import WiiCursor from '@/components/utils/WiiCursorHook';
import { useMainMenuStore } from '@/stores/MainMenuStore';
import { useProgress } from '@react-three/drei';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'motion/react'
import MainMenuHUD from '@/components/main-menu/MainMenuHUD';

const HomePage = () => {



  const {progress } = useProgress();




  return progress !== 100 ? <LoadingPage progress={progress}/> :
    <Container
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:2}}
    > 
      <WiiCursor/>


      <MainMenuHUD/>
      

      <BackgroundContainerCanva>
      <BackgroundCanva />
      </BackgroundContainerCanva>



    </Container>
  
}



const BackgroundContainerCanva = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`



const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  overflow-x: none;
  overflow-y: none;
`



export default HomePage