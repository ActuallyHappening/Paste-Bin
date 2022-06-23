import { useState } from 'react';
import { DITUMesh } from '../../../../datamodels/Models';
import { T_Children } from '../../../../GlobalState'

const House = ({children, nativeID: _nativeID, nativeReg, ...props}: {
  children: T_Children,
  nativeID: number,
  nativeReg: (arg0: number) => [(r: React.MutableRefObject<null>) => null, DITUMesh[]]
}) => {
  const [nativeID, setNativeID] = useState(_nativeID);
  console.log('nativeReg', nativeReg)
  const result = nativeReg(_nativeID) ?? []
  if (!result[0]) result[0] = (r) => null
  if (!result[1]) result[1] = []

  const [refCallback, dituMeshs] = 
  return (
    <group
    ref={refCallback}
      onPointerOver={(e) => {
        dituMeshs[nativeID]?.triggers.onPointerOver(e, 1);}
      }
      onPointerOut={(e) => dituMeshs[nativeID]?.triggers.onPointerOut(e, 1)}
      onClick={(e) => dituMeshs[nativeID]?.triggers.onClick(e, 1)}
      {...props}
    >
      {children}
    </group>
  )
}

export default House