import { TextStyle } from '@/styles/globalStyles'
import { enterTransition } from '@/styles/motions'
import { BackIcon } from '@/svgs/main-menu/BackIcon'
import { BoutonRelou } from '@/svgs/main-menu/BoutonRelou'
import { SettingSVG } from '@/svgs/main-menu/SettingSVG'
import {motion} from 'motion/react'
import React from 'react'
import styled from 'styled-components'

const ResortButton = ({scale, text, back}:{scale:number, text:string, back:boolean}) => {

    const width = 445*scale;
    const height = 163*scale;



  return <Container 
  initial={{opacity:0}}
  animate={{opacity:1, transition:enterTransition}}
    exit={{opacity:0, transition:enterTransition}}
  whileHover={{scale:1.1}}
  style={{width:width, height:height}}>
    <IconDiv>
    {back? <BackIcon />
    : <SettingSVG scale={scale} />
    }
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