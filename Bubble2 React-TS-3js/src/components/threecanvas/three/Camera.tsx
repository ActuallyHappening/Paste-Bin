import { Cloud, OrbitControls, Preload, Sky, Stars } from '@react-three/drei'
import React from 'react'

const Camera = () => {
  return (
    <>
    <OrbitControls
      makeDefault
      enableDamping
      dampingFactor={0.1}
      
    />
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    <Preload all /> {/* Preloads EVERYthing, production build implement loader */}
    <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>
    {/* <Cloud
      opacity={0.6}
      speed={0.1} // Rotation speed
      width={10} // Width of the full cloud
      depth={1.5} // Z-dir depth
      segments={2} // Number of particles
    /> */} {/* Doesn't look nice :( */}
    
    </>
  )
}

export default Camera