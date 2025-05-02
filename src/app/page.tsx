'use client'
import BackgroundCanva from '@/components/main-menu/BackgroundCanva';
import WiiCursor from '@/components/utils/WiiCursorHook';
import React, { Suspense, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'motion/react'
import MainMenuHUD from '@/components/main-menu/MainMenuHUD';
import { useSoundsStore } from '@/stores/SoundsStore';
import useDeviceType from '@/utils/useDevice';

import { MyColors } from '@/styles/colors';
import RMBTIcon from '@/components/utils/RMBTIcon';


const HomePage = () => {

  const {playLoop, initSounds} = useSoundsStore()
  const {isComputer} = useDeviceType()

  const handleStartTitleMusic = () => {
    playLoop('title')
  }

  useEffect(()=> {
    initSounds()
  },[])

  return !isComputer ? 
  <Container
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:2}}
  >
      <RMBTIcon/>
    
    <TutorialContainer  >
        <TutorialContainerElement onClick={()=> window.open("https://me.romubuntu.dev")}>
          <Text> Sorry, this website is made for computers only.</Text>
          <Text>Maybe, I will do a mobile update.</Text>
          <Text>See you again on your computeur.</Text>
          <Text> @romubuntu</Text>
        </TutorialContainerElement>
    </TutorialContainer>

      <BackgroundContainerCanva>
      <Suspense>
      <BackgroundCanva />
      </Suspense>
      </BackgroundContainerCanva>

  </Container>
  : 
  <Container onClick={()=> handleStartTitleMusic()}
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:2}}
    > 
      <WiiCursor/>
      <RMBTIcon/>



      <MainMenuHUD/>
      

      <BackgroundContainerCanva>
      <Suspense>
      <BackgroundCanva />
      </Suspense>
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

const Text = styled(motion.a)`
  text-align: center;
  font-family: var(--font-ubuntu);
    color: #5A5A5A;

    paint-order: stroke fill;
    user-select: none;
`


const TutorialContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const TutorialContainerElement = styled(motion.div)`
  z-index: 10;
  height: 70%;
  width: 60%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 20px;
  outline: 5px solid ${MyColors.backgroundBlue};
  outline-offset: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-ubuntu);
  color: #5A5A5A;
  font-size: 24px;
  -webkit-text-stroke: 5px #fff;
  paint-order: stroke fill;
  user-select: none;
`




export default HomePage