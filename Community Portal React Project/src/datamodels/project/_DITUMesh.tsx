// Contains the necessary info about the linked DITU mesh (basically nothing right now)

import { Project } from "../Models";

export default class DITUMesh {
  nativeID: number; // What id of house to use :)
  _project: Project;
  constructor({ nativeID, project }: { nativeID?: number, project: Project }) {
    this._project = project;
    this.nativeID = nativeID ?? this._project.id ?? 0;
  }
}