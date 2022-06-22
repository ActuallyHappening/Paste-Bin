// In non-static site, add async function to this global state file

import { DITUMesh, MenuItem, Project } from "./datamodels/Models";

export type T_Children = React.ReactNode;
export type T_GlobalState = {projects: Array<Project>, menu_items: Array<MenuItem>, panels: Object, houses: Array<DITUMesh>};

const _G: T_GlobalState = {
  "projects": [new Project({id: 1, shortDescription: "Testing Project (SD)", longDescription: "Testing Project (LD)", name: "Testing Project (N)"})],
  "menu_items": [
    new MenuItem({purposeType: "meta", name: "About", shortDescription: "About", url: "/#about"}),
    new MenuItem({purposeType: "meta", name: "Contact", shortDescription: "Contact", url: "/#contact"}),
    // Filled with items from projects
  ],
  "panels": {
    "about": null, // Will add info like route and text TODO
    "contact": null,
  },
  "houses": [
    // Fill with DITU Mesh coming from projects
  ]
}

_G.projects.forEach((project, index) => {
  _G.menu_items.push(project._item);
  _G.houses.push(project._DITUMesh);
});

export { _G as default, _G };