import React, { Suspense } from 'react'
import { Object3D } from 'three'
import { Mii } from '../MiiRendered'
import EyebrowsAsset from './EyebrowsAsset'
import EyesAsset from './EyesAsset'
import MouthAsset from './MouthAsset'
import GlassesAsset from './GlassesAsset'
import MustacheAsset from './MustacheAsset'
import MakeupAsset from './MakeupAsset'
import NoseAsset from './NoseAsset'




const FullFaceManager = ({mii, bone}:{mii:Mii,bone:Object3D}) => {

  return <>
  <EyebrowsAsset bone={bone} eyesElement={mii.eyebrows} />
  <EyesAsset bone={bone} eyesElement={mii.eyes} />
  <MouthAsset bone={bone} faceElement={mii.mouth} />

  <Suspense>
    <GlassesAsset bone={bone} faceElement={mii.glasses} />
  </Suspense>

  <Suspense>
    <MustacheAsset bone={bone} miiElement={mii.mustache} />
  </Suspense>

  <Suspense>
    <MakeupAsset bone={bone} miiElement={mii.makeups} />
  </Suspense>

  <Suspense>
    <MakeupAsset bone={bone} miiElement={mii.wrinkles} />
  </Suspense>

  <NoseAsset bone={bone} miiElement={mii.nose} />
  </>

}

export default FullFaceManager