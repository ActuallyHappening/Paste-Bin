import { Line, Text } from '@react-three/drei'
import React from 'react'
import { DITUMesh } from '../../../../datamodels/Models'

const GlobeMarkers = ({ dituMeshs }: { dituMeshs: Array<DITUMesh> }) => {
  return (
    <>
    {dituMeshs?.map((dituMesh, index) => {
      console.log("dituMesh", dituMesh)
      return (
        <>
        <Line
          key={index}
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