const Panel = ({children, name}: {children: T_Children, name: string}) => {
  return (
    <div className="panel" id={name}>
      <div className="panel__content">
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