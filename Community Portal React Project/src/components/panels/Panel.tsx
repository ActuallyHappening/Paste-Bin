import { T_Children } from "../../GlobalState"

const Panel = ({children, name, closeButton = true}: {children: T_Children, name: string, closeButton?: boolean}) => {
  return (
    <div className="panel" id={name}>
      <div className="panel__content">
        {closeButton && <CloseButton />}
        {children}
      </div>
    </div>
  )
}

const CloseButton = () => {
  return (
    <a href="/#" className="panel__close">
      <span className="material-icons">&#xe5cd;</span>
    </a>
  )
}


export { Panel as default, CloseButton}