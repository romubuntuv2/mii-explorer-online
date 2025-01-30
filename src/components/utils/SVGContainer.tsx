

import { pb } from '@/pocketbase/getPocketBase'
import { RecordModel } from 'pocketbase'
import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'


const SVGContainer = ({element}:{element:RecordModel}) => {

  return <Container>
    <ReactSVG src={pb.files.getURL(element,element.svg)}  /> 
  </Container>
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default SVGContainer
