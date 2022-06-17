import React, { useState } from "react"



const NavBar = ({ children, _items, ...props }) => {
  const items, setItems = useState(_items ?? props["items"] ?? [])
  return (
    <>
      {items.map((item, index) => {
        if (type == "Link") {
          return <a href={item.href}>{item.text}</a>
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