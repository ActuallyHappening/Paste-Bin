import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { DITUMesh } from '../../../../datamodels/Models';
import { T_Children } from '../../../../GlobalState'

const House = ({children, nativeID = 1, dituMeshs = [{}, {}], ...props}: {
  children: T_Children,
  nativeID: number,
  dituMeshs: DITUMesh[],
}) => {
  return (
    <group
      ref={(r) => dituMeshs[nativeID].ref = r ?? undefined}
      onPointerOver={(e) => {
        dituMeshs[nativeID]?.triggers.onPointerOver(e, nativeID);}
      }
      onPointerOut={(e) => dituMeshs[nativeID]?.triggers.onPointerOut(e, nativeID)}
      onClick={(e) => dituMeshs[nativeID]?.triggers.onClick(e, nativeID)}
      {...props}
    >
      <HouseMeshMarker />
      {children}
    </group>
  )
}


export const HouseMeshMarker = () => {
  const markerRef = useRef(null!);
  useFrame((state, delta, xrFrame) => {
    if (markerRef.current) {
      markerRef.current.opacity = Math.sin(Date.now() / 1000) / 3 + 0.5;
      console.log("markerRef.current.opacity", markerRef.current.opacity);
    }
  })
  return (
    <mesh>
      <sphereBufferGeometry args={[30, 300, 300]} />
      <meshBasicMaterial ref={markerRef} color="red" transparent={true} opacity={1}/>
    </mesh>
  )
}


export default House