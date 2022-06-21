import { Project } from "../Models";

// Represents a selectable option in the dropdown menu in the navbar

export type T_MenuItemPurposeTypes = "meta" | "project";
export type T_MenuItemTypes = "Link"; // Add more types later maybe

export default class MenuItem {
  purposeType: T_MenuItemPurposeTypes;
  type: T_MenuItemTypes;
  _project: Project;
  constructor({ purposeType = "project", type = "Link", project }: { purposeType?: T_MenuItemPurposeTypes, type?: T_MenuItemTypes, project: Project }) {
    this._project = project;
    this.purposeType = purposeType;
    switch (purposeType) {
      case "meta":
        this.type = "Link"
        break;
      case "project":
        this.type = "Link"
        break;
      default:
        this.type = "Link"
        break;
    }
  }
}