import { useState } from "react"
import { MenuItem } from "../../../../datamodels/Models"
import { T_Children } from "../../../../GlobalState"

const DropDownMenu = ({ children, items, }: {children?: any, items: Array<MenuItem>}) => {
  const [_items, setItems] = useState(items)
  return (
    <ul className="menu__items">
      {_items.map((item, index) => {
        if (item.type == "Link") {
          return <DropDownMenu.Link key={index} text={item._project.name} href={item._project.url}/>  
        } else {
          console.warn(`NavBar item type not supported: ${item.type}`)
        }
      })}
      {children}
    </ul>
  )
}

DropDownMenu.Raw = ({ children }: {children?: T_Children}) => {
  return (
    <div className="menu__item">
      {children}
    </div>
  )
}

DropDownMenu.RawLink = ({ children, text, ...props }: {children?: T_Children, text: string, [props: string]: any}) => {
  return (
    <DropDownMenu.Raw>
        <a  className="menu__link" {...props}>{text}</a>
        {children}
    </DropDownMenu.Raw>
  )
}

DropDownMenu.Link = ({ text, href, }: {text: string, href: string}) => {
  return (
    <DropDownMenu.RawLink text={text ?? href} href={href}></DropDownMenu.RawLink>
  )
}

export default DropDownMenu