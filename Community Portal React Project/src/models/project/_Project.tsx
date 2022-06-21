import { MenuItem } from "./_MenuItem"
import { DITUMesh } from "./_DITUMesh"
import { Model } from '/_Model'

class Project {
  id: number;
  name: string;
  description: string;
  icon: string;
  url: string;
  _item: MenuItem;
  constructor({id, name, description, icon, url, item}: {id: number, name: string, description: string, icon: string, url: string, item: MenuItem}) {
    this.id = id ?? 0;
    this.name = name ?? "Default Project Name";
    this.description = description ?? "Default Project Description";
    this.icon = icon ?? "src/components/body/navbar/deafultItemIcon.png";
    this.url = url ?? `/projects/${this.id}`;
    this._item = item ?? new MenuItem({type: "Link", url: this.url, text: this.name, icon: this.icon});

  }
}
