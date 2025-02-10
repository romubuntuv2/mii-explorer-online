import { useMainMenuStore } from '@/stores/MainMenuStore'
import { AnimatePresence } from 'motion/react';
import React from 'react'

const EditMii = () => {

    const {isCustomMii} = useMainMenuStore();

  return <AnimatePresence> {isCustomMii() && <>
  
  COUOUC
  
  
  
  </>}
  </AnimatePresence>
}

export default EditMii