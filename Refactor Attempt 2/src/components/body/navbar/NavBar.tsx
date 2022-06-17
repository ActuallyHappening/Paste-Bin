import React, { useState } from "react"
import GlobalState from "../../../GlobalState"
import { Item } from './_NavBar'

const NavBar = ({ children, items, }: {children: any, items: Array<Item>}) => {
  const [_items, setItems] = useState(items ?? [])
  return (
    <>
      {_items.map((item, index) => {
        if (item.type == "Link") {
          return <a href={item.url}>{item.text}</a>
        } else {
          console.warn(`NavBar item type not supported: ${item.type}`)
        }
      })}
      {children}
    </>
  )
}

NavBar.Raw = ({ children }) => {
  return (
    <div className="menu__item">
      {children}
    </div>
  )
}

NavBar.RawLink = ({ children, text, ...props }) => {
  return (
    <NavBar.Raw>
        <a {...props}>{text}</a>
        {children}
    </NavBar.Raw>
  )
}

NavBar.Link = ({ text, href, }) => {
  return (
    <NavBar.RawLink href={href} text={text ?? href}></NavBar.RawLink>
  )
}

export default NavBar