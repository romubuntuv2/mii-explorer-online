import { useControlsStore } from '@/stores/ControlsStore'
import { FullParentContainer, MC_StyleContainer } from '@/styles/globalStyles'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const MainHUD = () => {

  const {isChatOpen, setMsg:sendMsg} = useControlsStore();

  const [msg, setMsg] = useState<string>("");
  const OnClickMessage = () => {
    setMsg("")
    sendMsg(msg)
  }

  useEffect(()=> {
    setMsg("")
  },[isChatOpen])

  return (
    <MainContainer>

      <UpContainer></UpContainer>

      <DownContainer>
      {isChatOpen?
      <InputChatContainer>
      <InputChat type='text' value={msg} onChange={(e)=> setMsg(e.target.value)} />
      <InputChatButton onClick={()=> OnClickMessage()} />
      </InputChatContainer>
      :<></>}
      </DownContainer>

    </MainContainer>
  )
}

const UpContainer = styled.div`
  flex:2;
`
const DownContainer = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputChatContainer = styled(MC_StyleContainer)`
  width: 80%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputChat = styled.input`
  height: 100%;
  width: 90%;
  font-size: 24px;
  user-select: none;
`

const InputChatButton = styled.button`
  height: 100%;
  width: 10%;

`

const MainContainer = styled(FullParentContainer)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
`

export default MainHUD