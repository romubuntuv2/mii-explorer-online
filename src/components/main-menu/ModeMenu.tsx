
import React from 'react'
import styled from 'styled-components'
import ResortButton from '../utils/ResortButton'
import { TextStyle } from '@/styles/globalStyles'
import { Titles } from '@/svgs/main-menu/MM_TitlesSVG'
import { useMainMenuStore } from '@/stores/MainMenuStore'
import { AnimatePresence, motion } from 'motion/react'
import { enterTransition } from '@/styles/motions'


const ModeMenu = () => {

  const {isModeMenu, changeMenu} = useMainMenuStore();


  const handleClickExplorer = () => {
    changeMenu("Transition")
    setTimeout(()=> {
      changeMenu("Exploration");
    },2000)
  }

  const handleMainMenu = ()=> {
    changeMenu("Transition")
    setTimeout(()=> {
      changeMenu("StartMenu");
    },2000)
  }


  return <AnimatePresence>{isModeMenu() &&
    <>
      <TwoModeContainer>
        <ModeContainer onClick={()=> handleClickExplorer()}
              initial={{opacity:0}}
              animate={{opacity:1, transition:enterTransition}}
              exit={{opacity:0, transition:enterTransition}}
              whileHover={{scale:1.1}}
        >
          <ModeText>Explorer the Wuhu Island</ModeText>
          <ModeImgContainer></ModeImgContainer>
        </ModeContainer>
        <ModeContainer
              initial={{opacity:0}}
              animate={{opacity:1, transition:enterTransition}}
              exit={{opacity:0, transition:enterTransition}}
              whileHover={{scale:1.1}}
        >
        <ModeText>Create your own Mii</ModeText>
        <ModeImgContainer></ModeImgContainer>
        </ModeContainer>
      </TwoModeContainer>


      <TitleButton onClick={()=> handleMainMenu()}
      initial={{opacity:0}}
      animate={{opacity:1, transition:enterTransition}}
      exit={{opacity:0, transition:enterTransition}}
      whileHover={{scale:1.2}}
      >
        <Titles  haveStroke={true} scale={0.14} />
        <TextStyle style={{fontSize:'36px'}} >Main Menu</TextStyle>
      </TitleButton>


      <ResortButtonDiv>
      <ResortButton back={false} scale={0.9} text='Settings' />
      </ResortButtonDiv>
    </>}
    </AnimatePresence>
}

const TitleButton = styled(motion.div)`
  position: absolute;
  z-index: 8;
  top: 80vh;
  left: 10vw;
  border: 5px solid white;
  border-radius: 20px;
  background-color:rgba(94,185,229,0.4);
  height: 8vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ResortButtonDiv = styled.div`
  position: absolute;
  top: 75vh;
  left: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TwoModeContainer = styled.div`
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
`

const ModeText = styled(TextStyle)`
color: #55C2C9;
font-size: 36px;
text-align: center;
`

const ModeImgContainer = styled.div`
  height: 65%;
  width: 80%;
  background: red;
`

const ModeContainer = styled(motion.div)`
  height: 70%;
  width: 20%;
  border-radius: 15px;
  box-shadow: 0px 10px rgba(20,20,20,0.4);
  background-color: rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`

export default ModeMenu