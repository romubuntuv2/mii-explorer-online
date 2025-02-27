import React, {useState } from 'react'
import ResortButton from '../utils/ResortButton'

import styled from 'styled-components'
import { TextStyle } from '@/styles/globalStyles'
import { SoloIcon } from '@/svgs/main-menu/SoloIcon'
import { MultiIcon } from '@/svgs/main-menu/MultiIcon'
import { ExplorerHeader } from '@/svgs/main-menu/ExplorerHeader4'
import { useMainMenuStore } from '@/stores/MainMenuStore'
import { AnimatePresence, motion, spring } from 'motion/react'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { Canvas } from '@react-three/fiber'
import MiiRendered, { Mii } from '@/r3f/mii/MiiRendered'
import { Environment } from '@react-three/drei'
import { useSocketStore } from '@/stores/SocketStore'
import { useRouter } from 'next/navigation'
import { useSoundsStore } from '@/stores/SoundsStore'
import { defaultMiis } from '@/data/defaultsMii'

const transition = {duration:0.8, type:spring}

const ExplorationMenu = () => {

    const router = useRouter()
    const {isExploration, changeMenu} = useMainMenuStore();
    const {savedMiis} = useMiiCreatorStore();
    const {setLocalMii, setIsLocalOnly} = useSocketStore()

    const {play, stop} = useSoundsStore()

    const [modeSelected, setModeSelected] = useState<string|null>(null);    
    const [isSessionMiis, setIsSesseionMiis] = useState(true);

    const handleClickMode = (single:boolean) => {
        play("menuIn");
        if(single) setModeSelected("Single");
        else setModeSelected("Multi");
    }

    const handleBackButton = ()=> {
        play("menuOut");
        if(modeSelected != null) setModeSelected(null);
        else {
            changeMenu("Transition");
            setTimeout(()=> {
                changeMenu("ModeMenu")
            },800)
        }
    }

    const handleClickMii = (mii:Mii) => {
        play('ok')
        setLocalMii(mii)
        if(modeSelected == "Single") setIsLocalOnly(true)
        else setIsLocalOnly(false)
        setTimeout(()=> {  
            stop("title")
            router.push('/mii-verse')
          },500)
    }


    const MiiImageCanvas = ({mii}:{mii:Mii}) => {
        return <>
        <Environment preset='sunset' />
        <group position={[0,1.2,3.8]}>
        <MiiRendered msg='' animationString='directIdle' mii={mii}  />
        </group>
        </>
    }

    const GenerateMiiImage = () => {
        if(isSessionMiis){
        if(savedMiis.length == 0) {
            return <TextStyle style={{fontSize:'24px'}} >Create your own Mii with Mii Creatore to have Session Mii</TextStyle>
        } else {
        return savedMiis.map((mii, index) => { //PAGE DE 12
            return <MiiImage key={index} onClick={()=>handleClickMii(mii)} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
            whileHover={{scale:1.1}} whileTap={{scale:0.9}}
            >
                <Canvas style={{width:'100%', height:'100%'}}>
                <MiiImageCanvas mii={mii} />
                </Canvas>
            </MiiImage>
            
        })}} else {
            return defaultMiis.map((mii, index) => { //PAGE DE 12
                return <MiiImage key={index} onClick={()=>handleClickMii(mii)} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
                whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                >
                    <Canvas style={{width:'100%', height:'100%'}}>
                    <MiiImageCanvas mii={mii} />
                    </Canvas>
                </MiiImage>
        })} 
    }

  return <AnimatePresence> {isExploration() &&
    <>
    <Header
    initial={{opacity:0}}
    animate={{opacity:1, transition:transition}}
    exit={{opacity:0, transition:transition}}
    >
        <ExplorerHeader />
    </Header>



    <DoubleMenuContainer>
    <MenuContainer
    initial={{x:0, opacity:0}}
    animate={modeSelected===null?{x:0,opacity:1}:{x:-3000,opacity:0}}
    exit={{opacity:0}}
    >
        <SelectionButton onClick={()=> handleClickMode(true)} onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
        whileHover={{scale:1.1}} whileTap={{scale:0.9}} >
            <SelectionIconContainer>
                <SoloIcon/>
            </SelectionIconContainer>
            <SelectionTextContainer>
                <SelectionText >Solo</SelectionText>
            </SelectionTextContainer>
        </SelectionButton>


        <SelectionButton onClick={()=> handleClickMode(false)}  onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
        whileHover={{scale:1.1}} whileTap={{scale:0.9}} >
            <SelectionIconContainer>
                <MultiIcon/>
            </SelectionIconContainer>
            <SelectionTextContainer>
                <SelectionText >Multiplayer</SelectionText>
            </SelectionTextContainer>
        </SelectionButton>

    </MenuContainer>

    <MenuContainer
    initial={{x:3000, opacity:0}}
    animate={modeSelected===null?{x:3000,opacity:0}:{x:0,opacity:1}}
    >
        <SecondContainer>
        <MiiMenu>
            <MiiButton onClick={() => {setIsSesseionMiis(true)}}
            style={isSessionMiis?{backgroundColor:"rgba(0,255,255,1)"}:{backgroundColor:"#808080"}}
            whileHover={{scale:1.1}} whileTap={{scale:0.9}}
             onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
            >
                <TextStyle>Session Mii</TextStyle> 
            </MiiButton>
            <MiiButton onClick={() => {setIsSesseionMiis(false)}}
            style={!isSessionMiis?{backgroundColor:"rgba(0,255,255,1)"}:{backgroundColor:"#808080"}}
            whileHover={{scale:1.1}} whileTap={{scale:0.9}}
             onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
            >
                <TextStyle>Invite Mii</TextStyle> 
            </MiiButton>
        </MiiMenu>

        <MiisContainer>
            {GenerateMiiImage()}
        </MiisContainer>
        </SecondContainer>
    </MenuContainer>

    </DoubleMenuContainer>
    
    <ResortButtonDiv onClick={()=> handleBackButton()}    >
    <ResortButton iconID='back' scale={1} text='Back' />
    </ResortButtonDiv>
  </>}
  </AnimatePresence>
}

const DoubleMenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
`


const Header = styled(motion.div)`
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    width: 100vw;
    height: 15vh;
`

const SecondContainer = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
`
    
const MiiImage = styled(motion.div)`
    width: 10%;
    aspect-ratio: 1;
    height: 30%;
    border-radius: 10px;
    border: 5px solid white;
    margin-left: 3.75%;
    margin-right: 3.75%;
    background-color: #F0F5F5;
    box-shadow: 0px 5px 5px #5A5A5A;
`

const MiiMenu = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MiiButton = styled(motion.div)`
    height: 80%;
    width: 20%;
    font-size: 32px;
    display: flex;
    background-color: #808080;
    border-radius: 10px;
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
`

const MiisContainer = styled.div`
    height: 70%;
    width: 80%;
    border-radius: 10px;
    background-color: rgba(0,255,255,0.7);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    overflow-y: auto;
    white-space: nowrap;
    
`


const MenuContainer = styled(motion.div)`
    position: absolute;
    z-index: 8;
    width: 100%;
    height: 60%;
    top: 20vh;
    left: 0;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
`
const SelectionButton = styled(motion.div)`
    position: relative;
    height: 20%;
    width: 50%;
    border: 5px solid white;
    border-radius: 20px;
    background-color:rgba(94,185,229,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 10px rgba(30,30,30,0.6);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
`

const SelectionIconContainer = styled.div`
    position: absolute;
    left: 5%;
    aspect-ratio: 1;
    width: auto;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const SelectionTextContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SelectionText = styled(TextStyle)`
    font-size: 62px;
    color:#4E4EFF !important;
`
const ResortButtonDiv = styled(motion.div)`
  position: absolute;
  top: 80vh;
  left: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
`


export default ExplorationMenu