import { Project } from "../Models";
import { T_ProjectInfo } from "./_Project";

// Represents a selectable option in the dropdown menu in the navbar

export type T_MenuItemPurposeTypes = "meta" | "project";
export type T_MenuItemTypes = "Link"; // Add more types later maybe
export type T_MenuItemInfo = T_ProjectInfo & {type: T_MenuItemTypes};

type T_MenuItemConstructor_ConstructedFromProject = {
  purposeType: "project";
  project: Project;
};
type T_MenuItemConstructor_ConstructedFromParameters = {
  purposeType: "meta";
  project?: Project;
} & T_MenuItemInfo;

export default class MenuItem {
  purposeType: T_MenuItemPurposeTypes;
  info: T_MenuItemInfo;
  _project: Project | undefined;
  // Two constructors:
  // First one from project
  // Second one for meta
  // Basically looping through T_MenuItemPurposeTypes
  // Multiple constructors are not allowed, so is split into large switch statement
  constructor({ purposeType = "project", project, ...info }: T_MenuItemConstructor_ConstructedFromProject | T_MenuItemConstructor_ConstructedFromParameters) {
    this.purposeType = purposeType;
    switch (this.purposeType) {
      case "meta":
        this.info = info as T_MenuItemInfo;
        break;
      case "project":
        this._project = project
        this.info = {...this._project, type: "Link"} as T_MenuItemInfo;
        break;
      default:
        throw new Error("MenuItem constructor: Invalid purposeType");

    }
  }
}