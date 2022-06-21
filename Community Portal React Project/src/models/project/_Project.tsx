import { MenuItem } from "./_MenuItem"
import { DITUMesh } from "./_DITUMesh"
import { Model } from '/_Model'

type T_ModelStateHandles = "persistent" | "hovered";

class _Project {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image: string;
  video: string;
  url: string;
  _item: MenuItem;
  _models: T_ModelStateHandles;
  constructor({id, name, shortDescription, longDescription, icon, image, video, url, item, models}: {id: number, name: string, shortDescription: string, longDescription: string, icon: string, image: string, video: string, url: string, item: MenuItem, models: T_ModelStateHandles}) {
    this.id = id ?? 0;
    this.name = name ?? "Default Project Name";
    this.shortDescription = shortDescription ?? "Default Project Short Description";
    this.longDescription = longDescription ?? "Default Project Long Description";
    this.icon = icon ?? "src/models/defaultassets/smallIcon.png";
    this.image = image ?? "src/models/defaultassets/mediumImage.png";
    this.video = video ?? "GET VIDEO WORKING TODO"; // TODO get video working!
    this.url = url ?? `/projects/${this.id}`;
    this._item = item ?? new MenuItem({project: this});
    this._models = models ?? {"persistent": Model({type: "basic", project: this}), "hovered": Model({type: "descriptive", project: this})};
    
  }
}

export default _Project