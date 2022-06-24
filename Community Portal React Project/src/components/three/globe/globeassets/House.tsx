import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { MeshBasicMaterial } from 'three';
import { DITUMesh } from '../../../../datamodels/Models';
import { T_Children } from '../../../../GlobalState'

const House = ({children, nativeID = 1, dituMeshs: _dituMeshs, ...props}: {
  children: T_Children,
  nativeID: number,
  dituMeshs: DITUMesh[],
} & any) => {
  const [dituMeshs, setDituMeshs] = useState<DITUMesh[]>(_dituMeshs);
  if (!dituMeshs) {
    console.warn(`No dituMeshs passed to House`);
    setDituMeshs(_dituMeshs ?? []);
  }
  return (
    <group
      ref={(r) => {
        if (!(dituMeshs[nativeID])) {
          console.warn(`No DITUMesh found for nativeID: ${nativeID} in House\nHouse exists with no dituMesh!`);
          return
        } else {
          console.log(`Found DITUMesh for nativeID: ${nativeID} in House`);
          dituMeshs[nativeID].triggers.onClick = (e, id) => {
            console.log(`Clicked on DITU mesh with id ${id} and e, opening _project url!`, e);
            dituMeshs[nativeID]._project.url_open();
          }
        }
        dituMeshs[nativeID].ref = r ?? undefined
      }}
      /* onPointerOver={(e) => {
        dituMeshs[nativeID]?.triggers?.onPointerOver(e, nativeID);}
      }
      onPointerOut={(e) => dituMeshs[nativeID]?.triggers?.onPointerOut(e, nativeID)} */
      onClick={(e) => dituMeshs[nativeID]?.triggers?.onClick(e, nativeID)}
      {...props}
    >
      <HouseMeshMarker />
      {children}
    </group>
  )
}


export const HouseMeshMarker = () => {
  const markerRef = useRef<MeshBasicMaterial>(null!);
  useFrame((state, delta, xrFrame) => {
    if (markerRef.current.opacity) {
      markerRef.current.opacity = Math.sin(Date.now() / 1000) / 3 + 0.5;
      //console.log("markerRef.current.opacity", markerRef.current.opacity);
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