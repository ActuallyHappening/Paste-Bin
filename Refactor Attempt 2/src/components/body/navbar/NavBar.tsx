import React, { useState } from "react"
import _G from "../../../GlobalState"
import GlobalState, { T_Children } from "../../../GlobalState"
import { Item } from './_NavBar'

const NavBar = ({ children, items, }: {children: any, items: Array<Item>}) => {
  const [_items, setItems] = useState(items ?? _G.NavBar.__default__.items)
  return (
    <ul className="menu__items">
      {_items.map((item, index) => {
        if (item.type == "Link") {
          return <NavBar.Link key={index} text={item.text} href={item.url}/>  
        } else {
          console.warn(`NavBar item type not supported: ${item.type}`)
        }
      })}
      {children}
    </ul>
  )
}

NavBar.Raw = ({ children }: {children: T_Children}) => {
  return (
    <div className="menu__item">
      {children}
    </div>
  )
}

NavBar.RawLink = ({ children, text, ...props }: {children?: T_Children, text: string, [props: string]: any}) => {
  return (
    <NavBar.Raw>
        <a {...props}>{text}</a>
        {children}
    </NavBar.Raw>
  )
}

NavBar.Link = ({ text, href, }: {text: string, href: string}) => {
  return (
    <NavBar.RawLink text={text ?? href} href={href}></NavBar.RawLink>
  )
}

export default NavBar