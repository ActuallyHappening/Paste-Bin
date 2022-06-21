// In non-static site, add async function to this global state file

import * as DropDownMenu from "./components/navbar/dropdown/dropdownmenu/_DropdownMenu";
import { Project } from "./datamodels/Models";

type T_Children = React.ReactNode;



const _G: {projects: Array<Project>} = {
  "projects": [new Project({id: 1, shortDescription: "Testing Project (SD)", longDescription: "Testing Project (LD)", name: "Testing Project (N)"})]
}

export { _G as default, _G }
export type { T_Children }