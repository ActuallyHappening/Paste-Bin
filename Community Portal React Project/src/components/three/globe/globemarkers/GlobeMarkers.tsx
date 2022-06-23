import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { DITUMesh } from '../../../../datamodels/Models'

const GlobeMarkers = ({ dituMeshs, camera }: { dituMeshs: Array<DITUMesh>, camera: THREE.PerspectiveCamera }) => {
  return (
    <>
    {dituMeshs?.map((dituMesh, index) => {
        //console.log("dituMesh loading ...", dituMesh, dituMesh?.ref?.position)
        //console.log("dituMesh attempting coords ...", dituMesh?.ref?.localToWorld(dituMesh.ref?.position))
        return <GlobeMarker key={index} top={100} left={100} dituMesh={dituMesh} camera={camera.current}/>  
    })}
    </>
  )
}

const GlobeMarker = ({ top, left, dituMesh, camera}: { top: number, left: number, dituMesh: DITUMesh, camera }) => {
  const markerRef = useRef(null!)
  useEffect(() => {
    //console.log('dituMesh useEffect', dituMesh)
    //console.log(dituMesh?.ref?.localToWorld(dituMesh?.ref.position))
    dituMesh.markerRef = markerRef.current
    if (dituMesh?.markerRef?.style && dituMesh?.ref?.position && camera) {
      /* let vector = dituMesh?.ref?.position.clone()
      console.log('camera', camera)
      vector.project(camera)
      vector.x = Math.round((0.5 + vector.x / 2) * (1027 / window.devicePixelRatio));
      vector.y = Math.round((0.5 - vector.y / 2) * (887.141 / window.devicePixelRatio));
      console.log("POSITION", vector)
      dituMesh.markerRef.style.top = `${vector.y}px`
      dituMesh.markerRef.style.left = `${vector.x}px` */
    } else {
      console.log("dituMesh useEffect", dituMesh, dituMesh?.ref?.position)
    }
  })
  return (
    <div
      className="marker"
      ref={markerRef}
      id={`project-nativeid-${dituMesh.nativeID}`}
      style={{
        top: `${Math.round(top * (1027 / window.devicePixelRatio))}px`,
        left: `${Math.round(left * (887.141 / window.devicePixelRatio))}px`,
      }}
    >
      <a className="marker__label" href={dituMesh._project.url}>
        <strong className="marker__label" >{dituMesh._project.name}</strong>
      </a>
      <div className='marker__pointer'>
        <strong className="marker__label" >BRO ! {dituMesh._project.name}</strong>

      </div>
    </div>
  )
}

export default GlobeMarkers