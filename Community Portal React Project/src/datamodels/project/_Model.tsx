import {Project} from '../Models'

type T_ModelTypes = 'basic' | 'descriptive';

class Model {
  type: T_ModelTypes
  _project: Project;
  constructor({type, project}: {type: T_ModelTypes, project: Project}) {
    this.type = type ?? "basic";
    this._project = project;
  }
}

export default Model