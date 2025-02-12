import { useSoundsStore } from '@/stores/SoundsStore'
import { TextStyle } from '@/styles/globalStyles'
import { BackIcon } from '@/svgs/main-menu/BackIcon'
import { BoutonRelou } from '@/svgs/main-menu/BoutonRelou'
import { SettingSVG } from '@/svgs/main-menu/SettingSVG'
import { MapSVG } from '@/svgs/mii-verse/MapSVG'
import {motion, spring} from 'motion/react'
import React from 'react'
import styled from 'styled-components'

const transition = {duration:0.8, type:spring}

const ResortButton = ({scale, text, iconID}:{scale:number, text:string, iconID:string}) => {

    const width = 445*scale;
    const height = 163*scale;
    const {play, stop} = useSoundsStore()

    const getIcon = ()=> {
        switch ((iconID)) {
            case "back":
                return <BackIcon />
            case "settings":
                return  <SettingSVG scale={scale} />
            case "map":
                return <MapSVG />
            default:
                return <></>
        }
    }


  return <Container 
  onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
  initial={{opacity:0}}
  animate={{opacity:1, transition:transition}}
exit={{opacity:0, transition:transition}}
  whileHover={{scale:1.1}}
  whileTap={{scale:0.9}}
  style={{width:width, height:height}}>
    <IconDiv>
    {getIcon()}
    </IconDiv>
    <Button scale={scale}/>
    <TextContainer>
    <Text fontSize={(height/3.5).toString()+"px"} >{text}</Text>
    </TextContainer>
    </Container>
}


const Container = styled(motion.div)`
    position: relative;
    z-index: 7;
`

const IconDiv = styled.div`
    position: absolute;
    top: 17%;
    left: 7%;
`

const TextContainer =styled.div`
    position: absolute;
    z-index: 10;
    top: 30%;
    left: 35%;
    width: 60%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled(TextStyle)<{ fontSize: string }>`

    font-size: ${props=>props.fontSize};
`

const Button = styled(BoutonRelou)`
    position: absolute;
`

export default ResortButton