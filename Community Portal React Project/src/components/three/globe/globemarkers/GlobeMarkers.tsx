import { useFrame } from '@react-three/fiber'
import { DITUMesh } from '../../../../datamodels/Models'

const GlobeMarkers = ({ dituMeshs }: { dituMeshs: Array<DITUMesh> }) => {
  /* useFrame(() => {
    dituMeshs.forEach(dituMesh => {
      if (dituMesh?.markerRef?.current && dituMesh?.ref?.position) {
        //dituMesh?.markerRef.current.position.copy(dituMesh?.ref.localToWorld(dituMesh?.ref.position))
      }
    })
  },) */
  return (
    <>
    {dituMeshs?.map((dituMesh, index) => {
      console.log("dituMesh", dituMesh)
      return (
        <div className="marker">
          <h1 className="marker__label" key={index}>{dituMesh._project.name}</h1>
        </div>
      )})
    }
    </>
  )
}

export default GlobeMarkers