// In non-static site, add async function to this global state file

import React from "react";
import * as DropDownMenu from "./components/navbar/dropdown/dropdownmenu/_DropdownMenu";

type T_Children = React.ReactNode;

const _G: {Projects: Array<Object>, DropDownMenu: {items: Array<DropDownMenu.Item>}} = {
  "Projects": [
    {
      "id": "1",
      "name": "Project 1",
      "description": "Project 1 description",
      "url": "/#1",
    }
  ],
  "DropDownMenu": {
      "items": [
        new DropDownMenu.Item({type: "Link", url: "#about", text: "About"}),
        new DropDownMenu.Item({type: "Link", url: "#contact", text: "Contact us"}),
      ]
  }
}

_G.Projects.forEach((project) => {
    _G.DropDownMenu.items.push(new DropDownMenu.Item({type: "Link", url: project.url, text: project.name}));
})

export { _G as default, _G }
export type { T_Children }