const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshBasicMaterial color="green" /> 
    </mesh>
  )
}

export default Ground