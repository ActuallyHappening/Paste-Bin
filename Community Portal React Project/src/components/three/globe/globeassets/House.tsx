import { Float, Sparkles } from '@react-three/drei';
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
      <HouseMeshMarker flash={Boolean((dituMeshs ?? [])[nativeID])}/>
      {children}
    </group>
  )
}


export const HouseMeshMarker = ({ flash: _flash = true }: {flash?: boolean}) => {
  const markerRef = useRef<MeshBasicMaterial>(null!);
  const [flash, setFlash] = useState(_flash);
  useFrame((state, delta, xrFrame) => {
    if (!flash) {
      markerRef.current.opacity = 0;
      return
    }
    if (markerRef.current.opacity) {
      markerRef.current.opacity = Math.sin(Date.now() / 1000) / 3 + 0.5;
      //console.log("markerRef.current.opacity", markerRef.current.opacity);
    }
  })
  return (
    <group name="HouseMeshMarker">
    {/* <Sparkles count={100} speed={2} opacity={1} color={[0, 0, 255]} scale={2} noise={[1, 1, 1]}/> */}
    <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[-10, 10]}>
      <mesh>
        <sphereBufferGeometry args={[30, 300, 300]} />
        <meshBasicMaterial ref={markerRef} color="red" transparent={true} opacity={1}/>
      </mesh>
    </Float>
    </group>
  )
}


export default House