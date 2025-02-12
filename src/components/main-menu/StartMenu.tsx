import { TextStyle } from '@/styles/globalStyles'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Titles } from '@/svgs/main-menu/MM_TitlesSVG'
import useDimensions from '@/hooks/useDimensions'
import {AnimatePresence, motion, spring, useMotionValue} from 'motion/react'
import { useMainMenuStore } from '@/stores/MainMenuStore'
import { InfoIcon } from '@/svgs/main-menu/InfoIcon'
import { useSoundsStore } from '@/stores/SoundsStore'
import Information from '../utils/Information'
import { WalkerSVG } from '@/svgs/main-menu/WalkSVG'


const BLUE = '#13A7CE'
const ORANGE = '#DA9023'

const ORANGE_GREY = "#BBBBBB"
const BLUE_GREY = "#D9D9D9"

const WAITING_TIME =0.5

const StartMenu = () => {

    const {vwANDvh,vw, vh, width:innerWidth} = useDimensions()
    const {changeMenu,isStartMenu} = useMainMenuStore();
    const {play, stop} = useSoundsStore();

    const [showingInfos, setShowingInfos] = useState<boolean>(false);

    //#region SPACE AND CLICK HANDLERS

    const SpaceColor = useMotionValue(ORANGE_GREY)
    const RightClickColor = useMotionValue(BLUE_GREY)
    const [click, setClick] = useState(false);
    const [space, setSpace] = useState(false);
    useEffect(()=> {
        const handleKey =(event:KeyboardEvent, down:boolean) => {
            const code = event.code;
            if(code == "Space") {
                if(down) {
                    SpaceColor.set(ORANGE)
                    setSpace(true);
                }
                else  {
                    setSpace(false);
                    SpaceColor.set(ORANGE_GREY)
                }
            }
        }
        const handleMouse = (e:MouseEvent, down:boolean) => {

            if(e.buttons == 1) {
                if(down) RightClickColor.set(BLUE)
                setClick(true)
            }
            if(!down){
                RightClickColor.set(BLUE_GREY)
                setClick(false)
            }
        }

        window.addEventListener('keydown',(e) => handleKey(e, true));
        window.addEventListener('keyup',(e) => handleKey(e, false));
        window.addEventListener('mousedown',(e) => handleMouse(e,true));
        window.addEventListener('mouseup',(e) => handleMouse(e,false));
        return () => {
            window.removeEventListener('keydown',(e) => handleKey(e, true));
            window.removeEventListener('keyup',(e) => handleKey(e, false,));
            window.addEventListener('mousedown',(e) => handleMouse(e,true));
            window.addEventListener('mouseup',(e) => handleMouse(e,false));
        }
    }, [])


    useEffect(()=> {
        if(click && space && !showingInfos){
            play('start')
            changeMenu("Transition");
            setTimeout(()=> {
                changeMenu("ModeMenu");
            },800)
        }
    },[click,space,showingInfos])


    const handleShowInfos =() => {
        play("menuIn");
        setShowingInfos(true)
    }

  return <AnimatePresence>{isStartMenu() &&
    <>

    <Information isCredit={true} showing={showingInfos}  setShowingInfos={setShowingInfos} /> 


    <InfoContainer onClick={()=> handleShowInfos()}  onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:WAITING_TIME, type:spring,duration:2}}}
    exit={{opacity:0, transition:{type:spring,duration:1}}}
    whileHover={{scale:1.1}}
    >
        <InfoLogo>
            <InfoIcon/>
        </InfoLogo>
        <TextStyle style={{textAlign:'center',fontSize:'24px'}} >
            Information & Credits
        </TextStyle>
    </InfoContainer>

    <TitlesContainer
        initial={{opacity:0}}
        animate={{opacity:1, transition:{type:spring,delay:WAITING_TIME, duration:2}}} 
        exit={{opacity:0, transition:{type:spring,duration:1}}}
    >
        <motion.div
    initial={{x:3000}}
    animate={{x:0, transition:{delay:2+WAITING_TIME, duration:2, type:spring}}}
    exit={{x:-3000, transition:{duration:1, type:spring}}}
    >
        <Titles  haveStroke={false} scale={1}/>
        </motion.div>
    </TitlesContainer>


        <PressText as={motion.div} initial={{opacity:0}}animate={{opacity:1, transition:{delay:WAITING_TIME, duration:2}}}  exit={{opacity:0, transition:{duration:1}}}
        top={vh(70)}>
            Press Space and Right Click to Start !
        </PressText>

        <Line1 as={motion.div} initial={{opacity:0}} animate={{opacity:1, transition:{delay:WAITING_TIME, type:spring, duration:2}}}  exit={{opacity:0, transition:{type:spring,duration:1}}}
        color={"#787878"} top={vh(70)} left={"0px"} width={vw(100)} height={vh(1.5)} />
        <Line2 as={motion.div} initial={{opacity:0}} animate={{opacity:1, transition:{delay:WAITING_TIME, type:spring,duration:2}}} 
        exit={{opacity:0}}
        style={{backgroundColor:SpaceColor}} top={vh(71.5)} left="0" width={vw(100)} height={vh(1.5)} />
        <Line3 
        as={motion.div} initial={{opacity:0}} animate={{opacity:1, transition:{type:spring,delay:WAITING_TIME, duration:2}}} 
        exit={{opacity:0}}
        style={{backgroundColor:RightClickColor}} top={vh(73)} left="0" width={vw(100)} height={vh(1.5)} />

        <OuterCircle as={motion.div} initial={{opacity:0}} animate={{opacity:1, transition:{delay:WAITING_TIME,type:spring, duration:2}}}  exit={{opacity:0, transition:{type:spring,duration:1}}}
        top={vwANDvh(-5,70)} left={vw(80)}  width={vw(9.5)} height={vw(9.5)}>
        <CenterCircle as={motion.div} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:WAITING_TIME,type:spring, duration:1}}>
            <WalkerSVG scale={1 * (innerWidth/1280)}  />
        </CenterCircle>
        </OuterCircle>



        <HalfCircle  as={motion.div}  initial={{opacity:0}} animate={{opacity:1, transition:{delay:WAITING_TIME, type:spring,duration:2}}}  exit={{opacity:0, transition:{type:spring,duration:1}}}
        style={{backgroundColor:RightClickColor}} index={5}  top={vwANDvh(0,70)} left={vw(77.7)}  width={vw(15)} height={vw(7.5)}/>
        <HalfCircle as={motion.div} initial={{opacity:0}} 
        animate={{opacity:1, transition:{delay:WAITING_TIME, type:spring,duration:2}}}  exit={{opacity:0, transition:{type:spring,duration:1}}}
        style={{backgroundColor:SpaceColor}} index={7}  top={vwANDvh(0,70)} left={vw(78.75)}  width={vw(13)} height={vw(6.5)}/>


    <CopyrightCont
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:WAITING_TIME, type:spring,duration:2}}}
    exit={{opacity:0, transition:{duration:1}}}
    >
        <CopyrightText>© 2009 - 2025 Nintendo </CopyrightText>
    </CopyrightCont>
    </>}</AnimatePresence>
  
}



const InfoContainer = styled(motion.div)`
    position: absolute;
    z-index: 8;
    top: 5vh;
    right: 5vw;
    height: 8vh;
    width: 20vw;
    background: rgb(214,214,214);
    background: linear-gradient(180deg, rgba(214,214,214,1) 0%, rgba(249,249,249,1) 100%);
    border-radius: 20px;
    border: 5px solid #707070;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const InfoLogo = styled.div`
    height: 65%;
    aspect-ratio: 1;
    width: auto;
`



interface CustumDivProps {
    top: string;
    left:string;
    height:string;
    width:string;
}

const CustumDiv = styled.div<CustumDivProps>`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    height: ${props => props.height};
    width: ${props => props.width};
`

const Line1 = styled(CustumDiv)`
    z-index: 8;
    background-color: ${props=>props.color};
`
const Line2 = styled(CustumDiv)`
    z-index: 6;
    background-color:${props=>props.color};
`
const Line3 = styled(CustumDiv)`
    z-index: 4;
    background-color: ${props=>props.color};
`

const OuterCircle = styled(CustumDiv)`
    border-radius: 100px;
    background-color: #D9D9D9;
    border: 0.5vw  solid #FFF ;

    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterCircle = styled.div`
    z-index: 10;
    aspect-ratio: 1;
    border-radius: 100px;
    width: 8vw;
    height: auto;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HalfCircle = styled(CustumDiv)<{index:number}>`
    position: absolute;
    z-index: ${props=>props.index};
    /* aspect-ratio: 1; */
    border-radius: 0 0 1000px 1000px;
    background-color: ${props=> props.color};
`


const PressText = styled(TextStyle)<{top:string}>`
    z-index: 9;
    position: absolute;
    top: ${props=>props.top};
    width: 100vw;
    font-size: 36px;
    display: flex;
    text-align: center;
    justify-content: center;
`

const TitlesContainer = styled(motion.div)`
    z-index: 2;
    position: absolute;
    top:40vh;
    left: 0vw;
    width: 100vw;
    height: 30vh;
    background-color: rgba(255,255,255,0.7);

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`



const CopyrightCont= styled(motion.div)`
    z-index: 2;
    position: absolute;
    top: 90vh;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CopyrightText = styled(TextStyle)`
    font-size: 48px;
`

export default StartMenu