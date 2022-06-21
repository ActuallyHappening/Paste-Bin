const Panel = ({children, name}: {children: T_Children, name: string}) => {
  return (
    <div className="panel" id={name}>
      <div className="panel__content">
        {children}
      </div>
    </div>
  )
}

export default Panel