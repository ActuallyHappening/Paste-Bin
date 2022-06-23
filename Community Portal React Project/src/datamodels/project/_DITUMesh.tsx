import { ThreeEvent } from '@react-three/fiber';

// Contains the necessary info about the linked DITU mesh (basically nothing right now)

import { Project } from "../Models";

export type T_DituMeshTriggers = {
  onClick: (e: ThreeEvent<MouseEvent>, id: number) => void;
  onPointerOver: (e: ThreeEvent<PointerEvent>, id: number) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>, id: number) => void;
}
export type T_DituMesh = {
  nativeID: number;
  _project: Project;
  ref?: React.RefObject<THREE.Group>;
} & {
  triggers: T_DituMeshTriggers
};

const defaultConsoleTriggers: T_DituMeshTriggers = {
  onClick: (e, id: number) => {
    console.log(`Clicked on DITU mesh with id ${id} and e`, e);
  },
  onPointerOver: (e, id: number) => {
    console.log(`Pointer over DITU mesh with id ${id} e`, e);
  },
  onPointerOut: (e, id: number) => {
    console.log(`Pointer out DITU mesh with id ${id} e,`, e);
  }
}

export default class DITUMesh {
  nativeID: number; // What id of house to use :)
  _project: Project;
  ref?: THREE.Group;
  triggers: T_DituMeshTriggers;
  markerRef?: React.RefObject<THREE.Group>;
  constructor({project, nativeID}: {project: Project, nativeID?: number}) {
    this.nativeID = nativeID ?? project.id;
    if (!this.nativeID) throw new Error("No nativeID provided");
    this._project = project;
    this.triggers = defaultConsoleTriggers;
  }
}