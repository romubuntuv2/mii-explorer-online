import { FullPageContainer } from '@/styles/globalStyles'
import { Titles } from '@/svgs/main-menu/MM_TitlesSVG'
import React from 'react'
import styled from 'styled-components'

const LoadingPage = () => {
  return (
    <Container>
        <Titles haveStroke={false} scale={2} />
        {/* {progress} */}
    </Container>
  )
}

const Container = styled(FullPageContainer)`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default LoadingPage