import { useSoundsStore } from '@/stores/SoundsStore'
import React from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'motion/react'
import { MyColors } from '@/styles/colors'

const joye = "https://bsky.app/profile/joeycarlino.bsky.social"
const modelUhu =  "https://www.reddit.com/r/wii/comments/q20pg9/i_ported_wuhu_island_to_blender/"
const mod = "https://sketchfab.com/3d-models/wuhu-island-wii-sports-resort-68d83db076c944fdb5e1273f95b4fc7d"

const Information = ({showing, setShowingInfos, isCredit}:{showing:boolean, setShowingInfos:(value:boolean)=>void, isCredit:boolean}) => {

    const {play} = useSoundsStore()

    const handleClick = ()=> {
        play('menuOut');
        setShowingInfos(false);
    }

    const handleOpen = (url:string)=> {
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    const text = ()=> {
      if(isCredit) {
        return <TextContainer >
        <Text onClick={()=>handleOpen('https://me.romubuntu.dev')} whileHover={{scale:1.1}}  style={{fontSize:"30px"}}>Concept, Developpement and Design by @romubuntu</Text>
        <Text onClick={()=>handleOpen(joye)} whileHover={{scale:1.1}} >Mii Asset 3D models created by @JoeyC</Text>
        <Text onClick={()=>handleOpen(modelUhu)} whileHover={{scale:1.1}} >Wuhu Island 3D model created by @Nelib</Text>
        <Text onClick={()=>handleOpen(mod)} whileHover={{scale:1.1}} >Wuhu Island Environnement models created by @GlitchingNo</Text>
        <Text onClick={()=>handleOpen("https://www.nintendo.com/")} whileHover={{scale:1.1}} >This website is freely inspired by the Wii Sport Resort by Nintendo. It use the soundstracks and the artistic direction from the game</Text>
        <Text whileHover={{scale:1.1}} style={{fontSize:"20px"}}>Release February 2024. VERSION 1.0</Text>
        </TextContainer>
      } else {
        return <TextContainer >
        <Text >Use the Mouse to move the Camera </Text>
        <Text >Press the Up Arrow or Z/W to move your Mii</Text>
        <Text >Press the Shift to run </Text>
        <Text >Press Space to jump</Text>
        <Text >Press T to open the chat input </Text>
        <Text >Press E to open the emotes </Text>

        </TextContainer>
      }
    }

  return <AnimatePresence>
    {showing &&
    <TutorialContainer onClick={()=>handleClick() }
    >
        {/* <TutorialContainerElement   */}
        <TutorialContainerElement  style={isCredit?{width: "70%",height: "80%"}:{width: "40%",height: "40%"}}
        whileHover={{scale:1.02}}
        initial={{opacity:0, scale:0.4}}
        animate={{opacity:1, scale:1}}
        exit={{opacity:0, scale:0.4}}
        >
          {text()}

        </TutorialContainerElement>
    </TutorialContainer>}
    </AnimatePresence>
}

const Text = styled(motion.a)`
  text-align: center;
  font-family: var(--font-ubuntu);
    color: #5A5A5A;
    /* -webkit-text-stroke: 5px ${MyColors.darkBlue}; */
    paint-order: stroke fill;
    user-select: none;
`


const TextContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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


export default Information