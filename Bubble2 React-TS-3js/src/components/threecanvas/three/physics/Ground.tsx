import { usePlane } from "@react-three/cannon"
import { Point, Points } from "@react-three/drei"
import { useRef, useState } from "react"

const π = Math.PI

export default function Ground({_ref, ...props}) {
  const pointRef = useRef()
  const [debugPos, setDebugPos] = useState<number[]>([0, 0, 0])
  const [planeRef, api] = usePlane(() => ({ rotation: [-π / 2, 0, 0], ...props }))
  return (
    <>
    <Points>
      <pointsMaterial vertexColors />
      <Point ref={pointRef} color="red" position={debugPos}/>
    </Points>
    <mesh
      ref={planeRef}
      onPointerMove={e => {
        // console.log("Moved mouse to:", e.point)
        _ref.current = e.point.toArray()
        setDebugPos(e.point.toArray())
      }}
      >
      <planeGeometry args={[100, 100]} />
    </mesh>
      </>
  )
}