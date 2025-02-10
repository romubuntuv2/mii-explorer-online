import React, { useState } from 'react'
import ResortButton from '../utils/ResortButton'

import styled from 'styled-components'
import { TextStyle } from '@/styles/globalStyles'
import { SoloIcon } from '@/svgs/main-menu/SoloIcon'
import { MultiIcon } from '@/svgs/main-menu/MultiIcon'
import { ExplorerHeader } from '@/svgs/main-menu/ExplorerHeader4'
import { Canvas } from '@react-three/fiber'
import { useMainMenuStore } from '@/stores/MainMenuStore'
import { AnimatePresence, motion } from 'motion/react'
import { enterTransition } from '@/styles/motions'



const ExplorationMenu = () => {


    const {isExploration, changeMenu} = useMainMenuStore();

    const [modeSelected, setModeSelected] = useState<string|null>(null);    

    const handleClickMode = (single:boolean) => {
        if(single) setModeSelected("Single");
        else setModeSelected("Multi");
    }

    const handleBackButton = ()=> {
        if(modeSelected != null) setModeSelected(null);
        else {
            changeMenu("Transition");
            setTimeout(()=> {
                changeMenu("ModeMenu")
            },2000)
        }
    }


  return <AnimatePresence> {isExploration() &&
    <>
    <Header
    initial={{opacity:0}}
    animate={{opacity:1, transition:enterTransition}}
    exit={{opacity:0, transition:enterTransition}}
    >
        <ExplorerHeader />
    </Header>



    <DoubleMenuContainer>
    <MenuContainer
    initial={{x:0, opacity:0}}
    animate={modeSelected===null?{x:0,opacity:1}:{x:-3000,opacity:0}}
    exit={{opacity:0}}
    >
        <SelectionButton onClick={()=> handleClickMode(true)}
        whileHover={{scale:1.1}} >
            <SelectionIconContainer>
                <SoloIcon/>
            </SelectionIconContainer>
            <SelectionTextContainer>
                <SelectionText >Solo</SelectionText>
            </SelectionTextContainer>
        </SelectionButton>


        <SelectionButton onClick={()=> handleClickMode(false)}
        whileHover={{scale:1.1}} >
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
            <MiiButton><TextStyle>Session Mii</TextStyle> </MiiButton>
            <MiiButton><TextStyle>Online Mii</TextStyle> </MiiButton>
        </MiiMenu>

        <MiisContainer>
            <MiiImage  >
                <Canvas style={{width:'100%', height:'100%'}}>
                    <mesh>
                        <sphereGeometry/>
                        <meshBasicMaterial color={'red'} />
                    </mesh>
                </Canvas>
            </MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
            <MiiImage></MiiImage>
        </MiisContainer>
        </SecondContainer>
    </MenuContainer>

    </DoubleMenuContainer>
    
    <ResortButtonDiv onClick={()=> handleBackButton()}  >
    <ResortButton back={true} scale={1} text='Back' />
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
    
const MiiImage = styled.div`
    width: 10%;
    aspect-ratio: 1;
    height: 30%;
    background-color: #E3E5E5;
    border-radius: 10px;
    border: 5px solid white;
    margin-left: 2.5%;
    margin-right: 2.5%;
`

const MiiMenu = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MiiButton = styled.div`
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
const ResortButtonDiv = styled.div`
  position: absolute;
  top: 80vh;
  left: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
`


export default ExplorationMenu