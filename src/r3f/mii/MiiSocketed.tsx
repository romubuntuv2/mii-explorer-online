import { SocketUser } from '@/stores/SocketStore'
import React from 'react'
import MiiRendered from './MiiRendered'
import { Mii2 } from '@/data/defaultsMii'


const MiiSocketed = ({user}:{user:SocketUser}) => {


  return <group position={user.position} >
    <MiiRendered mii={Mii2} animationString='' cloned={true} />
  </group>
}

export default MiiSocketed