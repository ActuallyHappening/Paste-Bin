import React from "react";
import * as DropDownMenu from "./components/navbar/dropdown/dropdownmenu/_DropdownMenu";

type T_Children = React.ReactNode;

const _G = {
  "DropDownMenu": {
    "__default__": {
      "items": [
        new DropDownMenu.Item({type: "Link", url: "#about", text: "About"}),
        new DropDownMenu.Item({type: "Link", url: "#contact", text: "Contact us"}),
      ]
    }
  }
}

export { _G as default, _G }
export type { T_Children }