import { useState } from 'react';
import { DITUMesh } from '../../../../datamodels/Models';
import { T_Children } from '../../../../GlobalState'

const House = ({children, nativeID = 1, dituMeshs, ...props}: {
  children: T_Children,
  nativeID: number,
  dituMeshs: DITUMesh[],
  Array<any>
}) => {
  
  return (
    <group
      ref={(r) => dituMeshs[nativeID].ref = r ?? undefined}
      onPointerOver={(e) => {
        dituMeshs[nativeID]?.triggers.onPointerOver(e, nativeID);}
      }
      onPointerOut={(e) => dituMeshs[nativeID]?.triggers.onPointerOut(e, nativeID)}
      onClick={(e) => dituMeshs[nativeID]?.triggers.onClick(e, nativeID)}
      {...props}
    >
      {children}
    </group>
  )
}

export default House