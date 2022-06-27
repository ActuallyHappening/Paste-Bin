type T_HelperOptions = {
  children: React.ReactNode
  expand?: boolean
  max_content?: boolean
}

export const HorizontalDivider = ({children, expand, max_content}: T_HelperOptions) => {
  return (
    <div className={`HorizontalDivider${expand ? " Mixin-expand" : ""}${max_content ? " Mixin-max-content" : ""}`}>
      {children}
    </div>
  )
}
export const VerticalDivider = ({children, expand, max_content}: T_HelperOptions) => {
  return (
    <div className={`VerticalDivider${expand ? " Mixin-expand" : ""}${max_content ? " Mixin-max-content" : ""}`}>
      {children}
    </div>
  )
}