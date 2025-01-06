'use client'
import BasicBox from '@/r3f/meshes/BasicBox'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <Container>
      <Canvas>
        <BasicBox />
      </Canvas>

    </Container>
  )
}


const Container = styled.div`
  height: 90vh;
  width: 90vw;
  background-color: antiquewhite;
`

export default HomePage