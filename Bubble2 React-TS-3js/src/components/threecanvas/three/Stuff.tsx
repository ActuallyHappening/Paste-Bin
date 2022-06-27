import { useState } from "react"

const posAdd = (pos: number[], add: number[]) => [pos[0] + add[0], pos[1] + add[1], pos[2] + add[2]]

const halfRandom = () => Math.random() > .5

export default function RandomUnit({...rawProps}) {
  const [qad_sphere, setQadSphere] = useState<Boolean>(halfRandom())
  const [qad_square, setQadSquare] = useState<Boolean>(halfRandom())
  // console.log('RandomUnit', rawProps, qad_sphere, qad_square, rawProps.position[0])
  return (
    <group name="Random Unit">
      <PlatformSquare {...rawProps}/>
      {qad_sphere ? <HoveringSphere position={posAdd(rawProps.position, [0, 15, 0])} /> : <></>}
      {qad_square ? <HoveringSquare position={posAdd(rawProps.position, [25, 15, 25])} /> : <></>}
    </group>
  )
}

export const HoveringSphere = ({...rawProps}) => {
  // console.log('HoveringSphere', rawProps)
  return (
    <mesh {...rawProps}>
      <sphereGeometry args={[10, 32, 32]} />
      <meshBasicMaterial color="red" />
    </mesh>
  )
}
export const HoveringSquare = ({...rawProps}) => {
  return (
    <mesh {...rawProps}>
      <boxGeometry args={[10, 10, 10]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  )
}

export const PlatformSquare = ({...rawProps}) => {
  return (
    <mesh {...rawProps}>
      <boxGeometry args={[100, 5, 100]} />
      <meshBasicMaterial color="green" />
    </mesh>
  )
}