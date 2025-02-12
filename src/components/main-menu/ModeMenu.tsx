'use client'
import React from 'react'
import styled from 'styled-components'
// import ResortButton from '../utils/ResortButton'
import { TextStyle } from '@/styles/globalStyles'
import { Titles } from '@/svgs/main-menu/MM_TitlesSVG'
import { useMainMenuStore } from '@/stores/MainMenuStore'
import { AnimatePresence, motion, spring } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useSoundsStore } from '@/stores/SoundsStore'


const transition = {duration:0.8, type:spring}

const ModeMenu = () => {

  const router = useRouter();
  const {play, stop} = useSoundsStore();
  const {isModeMenu, changeMenu} = useMainMenuStore();


  const handleClickExplorer = () => {
    play('menuIn')
    changeMenu("Transition")
    setTimeout(()=> {
      changeMenu("Exploration");
    },800)
  }
  const handleClickCustom = () => {
    play('menuIn')
    changeMenu("TransitionToCustom")
    setTimeout(()=> {  
      stop("title")
      router.push('/mii-creator');
    },800)
  }

  const handleMainMenu = ()=> {
    play('menuOut')
    changeMenu("Transition")
    setTimeout(()=> {
      changeMenu("StartMenu");
    },800)
  }




  return <AnimatePresence>{isModeMenu() &&
    <>
      <TwoModeContainer>
        <ModeContainer onClick={()=> handleClickExplorer()} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
              initial={{opacity:0}}
              animate={{opacity:1, transition:transition}}
              exit={{opacity:0, transition:transition}}
              whileHover={{scale:1.1}} whileTap={{scale:0.9}}
        >
          <ModeText>Explorer the Wuhu Island</ModeText>
          <ModeImgContainer>
          <ModeImg src={'/img/explorerMIi.png'} />
          </ModeImgContainer>
        </ModeContainer>
        <ModeContainer onClick={()=> handleClickCustom()} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
              initial={{opacity:0}}
              animate={{opacity:1, transition:transition}}
              exit={{opacity:0, transition:transition}}
              whileHover={{scale:1.1}} whileTap={{scale:0.9}}
        >
        <ModeText>Create your own Mii</ModeText>
        <ModeImgContainer>
          <ModeImg src={'/img/customMii.png'} />
        </ModeImgContainer>
        </ModeContainer>
      </TwoModeContainer>


      <TitleButton onClick={()=> handleMainMenu()} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
      initial={{opacity:0}}
      animate={{opacity:1, transition:transition}}
      exit={{opacity:0, transition:transition}}
      whileHover={{scale:1.2}} whileTap={{scale:0.9}}
      >
        <Titles  haveStroke={true} scale={0.14} />
        <TextStyle style={{fontSize:'36px'}} >Main Menu</TextStyle>
      </TitleButton>


      {/* <ResortButtonDiv onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}} >
      <ResortButton iconID='settings' scale={0.9} text='Settings' />
      </ResortButtonDiv> */}
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

// const ResortButtonDiv = styled(motion.div)`
//   position: absolute;
//   top: 75vh;
//   left: 70vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

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
  aspect-ratio: 1900/995;
  height:auto;
  width: 90%;
  border-radius:20px;
  overflow: hidden;
  user-drag: none;  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  /* background: red; */
`

const ModeImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  user-drag: none;  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

const ModeContainer = styled(motion.div)`
  height: 70%;
  width: 30%;
  border-radius: 15px;
  box-shadow: 0px 10px rgba(20,20,20,0.4);
  background-color: rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`

export default ModeMenu