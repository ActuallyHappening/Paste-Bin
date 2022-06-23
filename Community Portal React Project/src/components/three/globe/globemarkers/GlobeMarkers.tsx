import { Line, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { DITUMesh } from '../../../../datamodels/Models'

const GlobeMarkers = ({ dituMeshs }: { dituMeshs: Array<DITUMesh> }) => {
  useFrame(() => {
    dituMeshs.forEach(dituMesh => {
      if (dituMesh?.markerRef?.current && dituMesh?.ref?.position) {
        dituMesh?.markerRef.current.position.copy(dituMesh?.ref.localToWorld(dituMesh?.ref.position))
      }
    })
  },)
  return (
    <>
    {dituMeshs?.map((dituMesh, index) => {
      console.log("dituMesh", dituMesh)
      return (
        
      )})
    }
    </>
  )
}

export default GlobeMarkers