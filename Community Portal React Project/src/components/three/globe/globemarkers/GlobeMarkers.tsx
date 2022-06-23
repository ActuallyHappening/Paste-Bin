import React from 'react'
import { DITUMesh } from '../../../../datamodels/Models'

const GlobeMarkers = ({ dituMeshs }: { dituMeshs: Array<DITUMesh> }) => {
  return (
    <>
    {dituMeshs?.map((dituMesh, index) => {
      return (
        <mesh key={index} position={dituMesh?.position ?? 300}>
          <sphereBufferGeometry attach="geometry" args={[0.1, 16, 16]} />
          <meshBasicMaterial attach="material" color={dituMesh?.color ?? "red"} />
        </mesh>
      )})
    }
    </>
  )
}

export default GlobeMarkers