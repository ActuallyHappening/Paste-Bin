// In non-static site, add async function to this global state file

import { MenuItem, Project } from "./datamodels/Models";

export type T_Children = React.ReactNode;
export type T_GlobalState = {projects: Array<Project>, items: Array<MenuItem>}

const _G: T_GlobalState = {
  "projects": [new Project({id: 1, shortDescription: "Testing Project (SD)", longDescription: "Testing Project (LD)", name: "Testing Project (N)"})],
  "items": [],
}

_G.projects.forEach((project, index) => {
  _G.items[index] = project._item;
});

export { _G as default, _G };