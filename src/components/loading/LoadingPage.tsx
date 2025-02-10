import { FullPageContainer } from '@/styles/globalStyles'
import React from 'react'
import styled from 'styled-components'

const LoadingPage = ({progress}:{progress:number}) => {
  return (
    <Container>
        {progress}
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