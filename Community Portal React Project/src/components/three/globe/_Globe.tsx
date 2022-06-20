import DropDownMenu from "../../navbar/dropdown/dropdownmenu/DropdownMenu"

// define House class
class House {
  type: string
  menuItem?: DropDownMenu.Item
  constructor({type, url, text, icon = ""}: {type: string, url: string, text: string, icon?: string}) {
    this.type = type ?? "Link"
    this.url = url ?? "#"
    this.text = text ?? "Default Item Text"
    this.icon = icon ?? "src/components/body/navbar/deafultItemIcon.png"
  }
}

export { Item }