import { useFrame, Vector3 as T_Vector3 } from "@react-three/fiber"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Line, Mesh, Vector3 } from "three"

/* // TODO types for Vector3 constructors
export type T_V3_Params = [x: number, y: number, z: number]
export type t_V3_Scalar = {s: number}
//export type T_V3_V3 = 

const V3 = (x: number, y: number, z: number) => new Vector3(x, y, z)
 */
const GlobeMarkers = () => {
  return (
    <>
      {/* <GlobeMarker attach={new Vector3(500, 500, 500)}/> */}
    </>
  )
}

export const GlobeMarker = ({ attach = 69 }: { attach: Vector3 | number }) => {
  const markerRef = useRef<THREE.Line>(null!)
  const [points, setFrom]: [Array<Vector3>, Dispatch<SetStateAction<Array<Vector3>>>] = useState<Array<Vector3>>([
      new Vector3(),
      typeof(attach) === "number" ? new Vector3(attach, attach, attach) : attach,
    ])
  //const [too, setToo]: [Vector3, Dispatch<SetStateAction<Vector3>>] = useState<Vector3>(typeof(_too) === "number" ? new Vector3(_too, _too, _too) : _too as Vector3)
  /* useFrame(() => {
    if (markerRef.current) {
      markerRef.current.rotation.x += 0.01
    }
  }); */
  /* useEffect(() => {
    //if (!_from || !_too) return
    markerRef.current?.geometry.setFromPoints(points);
    console.log("settings from points", points, points[1]?.x)
  }, [points]) */
  return (
    <line ref={(r) => {markerRef.current = r; markerRef.current?.geometry.setFromPoints(points); console.log("REF points", points, points[1]?.x)}}>
        <bufferGeometry />
        <lineBasicMaterial color="hotpink"/>
    </line>
  )
}

export default GlobeMarkers