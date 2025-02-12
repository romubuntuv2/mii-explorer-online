import React, { useEffect } from 'react'
import styled from 'styled-components'
import {motion,  useMotionValue } from 'motion/react'

const WiiCursor = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useMotionValue(1);


    useEffect(()=> {
        const handleMove = (e:MouseEvent) => {
            if(e.clientX+50<window.innerWidth) {
                x.set(e.clientX-5);
            }
            if(e.clientY+60 < window.innerHeight) {
                y.set(e.clientY-5);
            }
        }

        const handlePress = (down:boolean) => {
            if(down) scale.set(0.9)
            else scale.set(1)
        }

        window.addEventListener('mousemove',handleMove);
        window.addEventListener('mousedown',()=>handlePress(true));
        window.addEventListener('mouseup',()=>handlePress(false));

        return ()=> {
            window.removeEventListener('mousemove',handleMove);
        }
    },[])


    // return <></>
  return <ContImage 
  style={{width:48, height:48,scale:scale, x:x, y:y}} >
    <StyledImage src={"/img/wiiCursor.png"}
    height={"54"}
    width={"48"}
    alt="Wii Cursor"/>
    </ContImage>
}

const ContImage = styled(motion.div)`
    position: absolute;
    z-index: 12;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    user-drag: none;  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
      pointer-events: none;
`

const StyledImage = styled.img`
    /* z-index: 10; */
    pointer-events: none;
    contain: fill;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    user-drag: none;  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

export default WiiCursor