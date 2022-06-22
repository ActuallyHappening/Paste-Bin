import { useFrame, Vector3 as T_Vector3 } from "@react-three/fiber"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Line, Mesh, Vector3 } from "three"

const GlobeMarkers = () => {
  return (
    <>
      <GlobeMarker from={100} too={500}/>
    </>
  )
}

export const GlobeMarker = ({ from: _from, too: _too }: {from: T_Vector3, too: T_Vector3}) => {
  const markerRef = useRef<Mesh>(null!)
  const [from, setFrom]: [Vector3, Dispatch<SetStateAction<Vector3>>] = useState<Vector3>(typeof(_from) === "number" ? new Vector3(_from, _from, _from): _from as Vector3)
  const [too, setToo]: [Vector3, Dispatch<SetStateAction<Vector3>>] = useState<Vector3>(typeof(_too) === "number" ? new Vector3(_too, _too, _too) : _too as Vector3)
  /* useFrame(() => {
    if (markerRef.current) {
      markerRef.current.rotation.x += 0.01
    }
  }); */
  useEffect(() => {
    if (!_from || !_too) return
    markerRef.current?.geometry.setFromPoints([from, too]);
  }, [_from, _too])
  return (
    // @ts-ignore WHY geez still can't work out!
    <mesh ref={markerRef}>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  )
}

export default GlobeMarkers