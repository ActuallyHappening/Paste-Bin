import { Project } from "../Models";
import { T_ProjectInfo, T_ProjectInfo_All } from "./_Project";

// Represents a selectable option in the dropdown menu in the navbar

export type T_MenuItemPurposeTypes = "meta" | "project";
export type T_MenuItemTypes = "Link" | "Project";

// Parameters to be contained in the info object of a MenuItem SPECIFIC to MenuItem
// These parameters don't relate to T_ProjectInfo
export type T_MenuItemSpecificInfo_InferredType = {type?: T_MenuItemTypes};
export type T_MenuItemSpecificInfo_All = {type: T_MenuItemTypes};

// Parameters to be contained in the info object of a MenuItem .
// These parameters can be relied upon, like item.name and item.icon etc.
export type T_MenuItemInfo = T_ProjectInfo & T_MenuItemSpecificInfo_All;
export type T_MenuItemInfo_InferredType = T_ProjectInfo & T_MenuItemSpecificInfo_InferredType;
export type T_MenuItemInfo_All = T_ProjectInfo_All & T_MenuItemSpecificInfo_All;

// Types for the constructor 'overloads' of MenuItem
type T_MenuItemConstructor_ConstructedFromProject = { // Required project ref
  purposeType: "project";
  project: Project;
};
type T_MenuItemConstructor_ConstructedFromParameters = { // Gets info params from called constructor params
  purposeType: "meta";
  project?: undefined;
} & T_MenuItemInfo_InferredType;

export default class MenuItem {
  purposeType: T_MenuItemPurposeTypes;
  info: T_MenuItemInfo_All;
  _project?: Project;
  // Two constructors:
  // First one from project
  // Second one for meta
  // Basically looping through T_MenuItemPurposeTypes
  // Multiple constructors are not allowed, so is split into large switch statement
  constructor({ purposeType = "project", project, ...info }: T_MenuItemConstructor_ConstructedFromProject | T_MenuItemConstructor_ConstructedFromParameters) {
    this.purposeType = purposeType;
    let _info: T_MenuItemInfo;
    switch (purposeType) {
      case "meta":
        _info = {...info, type: {...info}.type ?? "Link", url: {...info}.url ?? `/#${{...info}.name}`} as T_MenuItemInfo;
        break;
      case "project":
        this._project = project
        _info = {...this._project, type: {...info}.type ?? "Project", url: {...info}.url ?? `/#${this._project?.name}`} as T_MenuItemInfo;
        break;
      default:
        throw new Error("MenuItem constructor: Invalid purposeType");
      
    }
    // Give default values to info if not provided (convert to T_MenuItemInfo_All)
    this.info = {..._info, ...{
      name: _info.name ?? "Default Menu Item Name",
      shortDescription: _info.shortDescription ?? "Default Menu Item Short Description",
      longDescription: _info.longDescription ?? "Default Menu Item Long Description",
      icon: _info.icon ?? "src/models/defaultassets/smallIcon.png",
      image: _info.image ?? "src/models/defaultassets/mediumImage.png",
      video: _info.video ?? "GET VIDEO WORKING TODO", // TODO get video working!
      url: _info.url ?? `/#${_info.name ?? "UNKNOWN_PROJECT"}` // Should never occur, unless not caught in switch statement above
    }} as T_MenuItemInfo_All;
    if (!this.info.url) throw new Error("MenuItem constructor: _project.id is required if no url is given");
  }
}