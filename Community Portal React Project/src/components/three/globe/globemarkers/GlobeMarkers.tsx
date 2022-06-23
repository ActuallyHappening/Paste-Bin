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
        <>
        <Line
          key={index}
          ref={(r) => {
            if (!r) return
            dituMesh.markerRef = r
          }}
          lineWidth={7}
          color="red"
          points={[[0, 0, 0], [100, 100, 100], [400, 400, 400]]}
        />
        </>
      )})
    }
    </>
  )
}

export default GlobeMarkers