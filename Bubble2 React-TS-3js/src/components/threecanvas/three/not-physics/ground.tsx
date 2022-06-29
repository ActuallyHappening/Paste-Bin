import { Point, Points } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useState } from "react"

const Ground = ({ exposePoint }) => {
  const [point, setPoint] = useState([0, 2, 0])
  useFrame(() => {
    // if (!exposePoint?.current) {
    //   console.log("exposePoint is null: ", exposePoint)
    // } else {
    //   console.log("exposePoint is not null: ", exposePoint?.current, point)
    // }
    exposePoint.current = point
    
  })
  return (
    <>
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      onPointerMove={(e) => {
        setPoint([e.point.x, 0, e.point.z])
      }}
    >
      <planeBufferGeometry args={[1000, 1000]} />
      <meshBasicMaterial color="green" /> 
    </mesh>
    <mesh position={point}>
      <sphereGeometry args={[0.5, 15, 15]} />
      <meshBasicMaterial color="red" />
    </mesh>
    </>
  )
}

export default Ground