import {Project} from '../Models'

export type T_ModelTypes = 'identifier' | 'basic' | 'descriptive';

export default class Model {
  type: T_ModelTypes
  _project: Project;
  constructor({type = "basic", project}: {type: T_ModelTypes, project: Project}) {
    this.type = type;
    this._project = project;
  }
}