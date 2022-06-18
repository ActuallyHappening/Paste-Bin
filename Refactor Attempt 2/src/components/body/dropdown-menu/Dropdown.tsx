import React, { useState } from "react"
import _G, { T_Children } from "../../../GlobalState"
import { Item } from './_Dropdown'

const DropDownMenu = ({ children, items, }: {children?: any, items: Array<Item>}) => {
  const [_items, setItems] = useState(items ?? _G.DropDownMenu.__default__.items)
  return (
    <ul className="menu__items">
      {_items.map((item, index) => {
        if (item.type == "Link") {
          return <DropDownMenu.Link key={index} text={item.text} href={item.url}/>  
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