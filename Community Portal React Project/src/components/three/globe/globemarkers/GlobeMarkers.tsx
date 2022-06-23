import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { DITUMesh } from '../../../../datamodels/Models'

const GlobeMarkers = ({ dituMeshs }: { dituMeshs: Array<DITUMesh> }) => {
  return (
    <>
    {dituMeshs?.map((dituMesh, index) => {
        console.log("dituMesh loading ...", dituMesh, dituMesh?.ref?.position)
        console.log("dituMesh attempting coords ...", dituMesh?.ref?.localToWorld(dituMesh.ref?.position))
        return <GlobeMarker top={100} left={100} dituMesh={dituMesh} />  
    })}
    </>
  )
}

const GlobeMarker = ({ top, left, dituMesh }: { top: number, left: number, dituMesh: DITUMesh }) => {
  const markerRef = useRef(null!)
  useEffect(() => {
    console.log('dituMesh useEffect', dituMesh)
    if (dituMesh?.markerRef?.current?.style && dituMesh?.ref?.position) {
      dituMesh.markerRef.current.style.top = `${dituMesh?.ref.localToWorld(dituMesh?.ref.position).y}px`
      dituMesh.markerRef.current.style.left = `${dituMesh?.ref.localToWorld(dituMesh?.ref.position).x}px`
      console.log(dituMesh?.ref.localToWorld(dituMesh?.ref.position))
    }
  })
  return (
    <div
      className="marker"
      ref={markerRef}
      id={`project-nativeid-${dituMesh.nativeID}`}
      style={{
        top: `${top}px`,
        left: `${left}px`,
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