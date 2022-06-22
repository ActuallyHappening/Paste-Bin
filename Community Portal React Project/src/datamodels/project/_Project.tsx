import { DITUMesh, MenuItem, Model } from '../Models'

export type T_ProjectInfo = {
  name: string,
  shortDescription: string,
  longDescription?: string,
  icon?: string,
  image?: string,
  video?: string,
  url?: string,
}
export type T_ProjectInfo_All = {
  name: string,
  shortDescription: string,
  longDescription: string,
  icon: string,
  image: string,
  video: string,
  url: string,
}

export type T_ModelStateHandles = "persistent" | "hovered";
export type T_ModelStateHandlesObject = { [key in T_ModelStateHandles]: Model };

export default class _Project {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image: string;
  video: string;
  url: string;
  _item: MenuItem;
  _models: T_ModelStateHandlesObject;
  _DITUMesh: DITUMesh;
  constructor({id, item, models, DITUMesh: _DITUMesh, ...ProjectInfo}: T_ProjectInfo & {id: number, item?: MenuItem, models?: T_ModelStateHandlesObject, DITUMesh?: DITUMesh}) {
    this.id = id; if (!id) {throw new Error("Project id is required")}
    this.name = ProjectInfo.name ?? "Default Project Name";
    this.shortDescription = ProjectInfo.shortDescription ?? "Default Project Short Description";
    this.longDescription = ProjectInfo.longDescription ?? ProjectInfo.shortDescription ?? "Default Project Long Description <ERROR!>";
    this.icon = ProjectInfo.icon ?? "src/models/defaultassets/smallIcon.png";
    this.image = ProjectInfo.image ?? "src/models/defaultassets/mediumImage.png";
    this.video = ProjectInfo.video ?? "GET VIDEO WORKING TODO"; // TODO get video working!
    this.url = ProjectInfo.url ?? `/projects/${this.id}`;
    this._item = item ?? new MenuItem({purposeType: "project", project: this});
    this._models = models ?? {
      "persistent": new Model({type: "basic", project: this}),
      "hovered": new Model({type: "descriptive", project: this})
    };
    this._DITUMesh = _DITUMesh ?? new DITUMesh({nativeID: this.id, project: this});
    
  }
}