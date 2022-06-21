import { useState } from "react"
import { MenuItem } from "../../../../datamodels/Models"
import { T_Children } from "../../../../GlobalState"

const DropDownMenu = ({ children, items: _items, }: {children?: any, items: Array<MenuItem>}) => {
  const [items, setItems] = useState(_items)
  return (
    <ul className="menu__items">
      {_items.map((item, index) => {
        if (item.info.type == "Link") {
          return <DropDownMenu.Link key={index} text={item.info.name} href={item.info.url}/>  
        } else {
          console.warn(`NavBar item type not supported: ${item.info.type}`)
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

DropDownMenu.Link = ({ text, href, _item}: {text: string, href: string, _item?: MenuItem}) => {
  return (
    <DropDownMenu.RawLink text={text ?? href} href={href}>
      {_item?.info.url ? <img src={`${_item.info.url}`}/> : null }
    </DropDownMenu.RawLink>
  )
}

export default DropDownMenu