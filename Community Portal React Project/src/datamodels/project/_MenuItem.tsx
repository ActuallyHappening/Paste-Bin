import { Project } from "../Models";
import { T_ProjectInfo } from "./_Project";

// Represents a selectable option in the dropdown menu in the navbar

export type T_MenuItemPurposeTypes = "meta" | "project";
export type T_MenuItemTypes = "Link"; // Add more types later maybe
export type T_MenuItemInfo = T_ProjectInfo | {};

export default class MenuItem {
  purposeType: T_MenuItemPurposeTypes;
  type: T_MenuItemTypes;
  info: T_MenuItemInfo;
  _project: Project | undefined;
  constructor({ purposeType = "project", type = "Link", project, ...info }: T_MenuItemInfo & { purposeType?: T_MenuItemPurposeTypes, type?: T_MenuItemTypes, project?: Project }) {
    this._project = project;
    if (this._project) this.info = this._project // info comes form project
    else this.info = info // info is given by constructor like new MenuItem({purposeType: "meta", name: "About", url: "/about"})
    this.purposeType = purposeType;
    switch (purposeType) { // Assume proper type from purpose (useless now but maybe useful later)
      case "meta":
        this.type = type ?? "Link"
        break;
      case "project":
        this.type = type ?? "Link"
        break;
      default:
        this.type = type ?? "Link"
        break;
    }
  }
}