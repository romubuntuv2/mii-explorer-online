import { useControlsStore } from '@/stores/ControlsStore'
import { FullParentContainer, TextStyle } from '@/styles/globalStyles'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import WiiCursor from '../utils/WiiCursorHook'
import { Message } from '@/svgs/mii-verse/Message'
import {AnimatePresence, motion} from 'motion/react'
import ResortButton from '../utils/ResortButton'
import { useSoundsStore } from '@/stores/SoundsStore'
import { Titles } from '@/svgs/main-menu/MM_TitlesSVG'
import { useRouter } from 'next/navigation'
import Map from './Map'
import Information from '../utils/Information'

const MainHUD = () => {

  const router = useRouter()
  const {isChatOpen, toogleMap, toogleChat, setMsg:sendMsg} = useControlsStore();
  const {play, stop} = useSoundsStore()

  const [showInfos, setShowInfos] = useState(true);

  const [msg, setMsg] = useState<string>("");
  const OnClickMessage = () => {
    setMsg("")
    sendMsg(msg)
    toogleChat();
  }

  const handleMainMenu = ()=> {
    stop("explorer");
    router.push('/')
  }

  useEffect(()=> {
    setMsg("")
  },[isChatOpen])

  return (
    <MainContainer>
      <WiiCursor />

      <Information isCredit={false} showing={showInfos} setShowingInfos={setShowInfos} />


      <UpContainer></UpContainer>

      <DownContainer>
      <AnimatePresence>
      {isChatOpen &&
      <InputChatContainer whileHover={{scale:1.1}}
      initial={{opacity:0, width:0}}
      animate={{opacity:1, width:"50%"}}
      exit={{opacity:0, width:0}}
      >
      <InputChat type='text' 
      value={msg} onChange={(e)=> setMsg(e.target.value)} />
      <InputChatButton onClick={()=> OnClickMessage()} 
      whileHover={{scale:1.1}} whileTap={{scale:0.9}}
      >
      <Message/>
      </InputChatButton>
      </InputChatContainer>
      }
      </AnimatePresence>
      </DownContainer>
      <UpContainer></UpContainer>



      <TitleButton onClick={()=> handleMainMenu()} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
      initial={{opacity:0}}
      animate={{opacity:1, transition:{}}}
      exit={{opacity:0, transition:{}}}
      whileHover={{scale:1.2}} whileTap={{scale:0.9}}
      >
        <Titles  haveStroke={true} scale={0.14} />
        <TextStyle style={{fontSize:'36px'}} >Main Menu</TextStyle>
      </TitleButton>

      <ResortButtonDiv onClick={()=>{toogleMap()}} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}} >
      <ResortButton iconID={"map"} scale={0.7} text='Map' />
      </ResortButtonDiv>

      <Map/>

    </MainContainer>
  )
}




const TitleButton = styled(motion.div)`
  position: absolute;
  z-index: 8;
  top: 85vh;
  left: 5vw;
  border: 5px solid white;
  border-radius: 20px;
  background-color:rgba(94,185,229,0.4);
  height: 8vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`


const ResortButtonDiv = styled(motion.div)`
  position: absolute;
  top: 85vh;
  left: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UpContainer = styled.div`
  flex:1;
`
const DownContainer = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputChatContainer = styled(motion.div)`
  width: 50%;
  height: 25%;
  display: flex;
  z-index: 8;
  justify-content: space-around;
  align-items: center;
  border: 5px solid white;
  border-radius: 10px;
  background-color:rgba(94,185,229,0.4);
`

const InputChat = styled.input`
  font-family: var("--font-ubuntu");
  font-size: 62px;
  color: #5A5A5A;
  font-family: var(--font-ubuntu);
  -webkit-text-stroke: 5px #fff;
  paint-order: stroke fill;
  user-select: none;
  height: 100%;
  width: 85%;
  font-size: 24px;

  text-align: center;
  background: none;
  border: none;
  cursor: none;

  &::selection {
    background-color: transparent;
  }

  &::-moz-selection {
    background-color: transparent;
  }

  &:focus {
    outline: none;
  }
`

const InputChatButton = styled(motion.div)`
  height: 80%;
  width: auto;
  aspect-ratio: 1;
  cursor: none;
  border: none;

`

const MainContainer = styled(FullParentContainer)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
`

export default MainHUD