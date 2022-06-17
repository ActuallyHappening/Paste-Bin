import * as _NavBar from "./components/body/navbar/_NavBar";

type T_Children = Array<JSX.Element> | JSX.Element;

const _G = {
  "NavBar": {
    "__default__": {
      "items": [
        new _NavBar.Item({type: "Link", url: "#about", text: "About"}),
        new _NavBar.Item({type: "Link", url: "#contact", text: "Contact us"}),
      ]
    }
  }
}

export { _G as default, _G }
export type { T_Children }