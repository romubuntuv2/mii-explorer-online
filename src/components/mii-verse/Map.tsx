import { FTPCoordsList } from '@/data/fastTeleportCoord'
import { useControlsStore } from '@/stores/ControlsStore'
import { TextStyle } from '@/styles/globalStyles'
import React from 'react'
import styled from 'styled-components'
import {motion} from 'motion/react'
import { useSoundsStore } from '@/stores/SoundsStore'

const Map = () => {

    const {play, stop} =useSoundsStore()
    const {isMapOpen, toogleMap, setTP} = useControlsStore()

    const handleTP = (pos:[number, number, number])=> {
      toogleMap();
      setTP(pos);
    }

  return (
    <Container>

    {isMapOpen &&
    <MapContainer>



      {FTPCoordsList.map((coord, i) => {
        return<Marker onClick={()=> handleTP(coord.pos)}
        onHoverStart={()=>{play('menuHoover')}} onHoverEnd={()=>{stop('menuHoover')}}
        whileHover={{scale:1.1}} whileTap={{scale:0.9}}
         key={i} left={coord.mapPos.left} top={coord.mapPos.top} >
        <Point/>
          <MarketName>{coord.name}</MarketName>
        </Marker>
      })}

    
    </MapContainer>

    }



    </Container>
  )
}

const MarketName = styled(TextStyle)`
  margin-left: 5px;
  font-size: 12px;
  color: rgba(190,130,40,1) !important;
`

const Marker = styled(motion.div)<{left:string, top:string}>`
  position: absolute;
  left: ${props=>props.left};
  top: ${props=>props.top};
  display: flex;
`

const Point = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color:rgba(255,255,150,1);
  box-shadow: 0px 0px 30px rgba(190,130,40,1);
  
  `

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MapContainer = styled.div`
    position: relative;
    border: 5px solid white;
    border-radius: 20px;
    z-index: 9;
    height: 70%;
    widows: auto;
    aspect-ratio: 1;
    background-size: cover;
    opacity: 0.9;
    background-repeat: no-repeat;
    background-image:url("/img/WuhuIslandMap.png");
`



export default Map