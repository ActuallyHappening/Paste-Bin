// define item class
class Item {
  type: string
  url: string
  text: string
  icon?: string
  constructor({type, url, text, icon = ""}: {type: string, url: string, text: string, icon: string}) {
    this.type = type ?? "Link"
    this.url = url ?? "#"
    this.text = text ?? "Default Item Text"
    this.icon = icon ?? "src/assets/images/default.png"
  }
}

export { Item }