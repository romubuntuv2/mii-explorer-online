import { motion } from 'motion/react'
import React from 'react'
import styled from 'styled-components'

const RMBTIcon = () => {
  return <Icon onClick={()=> window.open('https://me.romubuntu.dev')} 
  whileHover={{scale:1.1}}    
  >
  <motion.svg 
  whileHover={{rotate:360, transition:{type:'spring'}}}
  width="70%" height="70%" viewBox="0 0 449 426" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M272.121 154.796L415.603 100.308L449 195.663L303.044 243.959L394.576 365.32L312.939 426L221.408 298.448L134.824 426L51.9504 365.32L143.482 243.959L0 195.663L33.3967 100.308L173.168 154.796V0H272.121V154.796Z" fill="white"/>
</motion.svg>
  </Icon>
}

const Icon = styled(motion.div)`
    position: absolute;
    margin-left: 10px;
    margin-bottom: 10px;
    left: 0;
    bottom: 0;
    height: 40px;
    width: 40px;
    border-radius: 25px;
    border: 2px solid white;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default RMBTIcon